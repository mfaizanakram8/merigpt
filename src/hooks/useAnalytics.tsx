import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import useAppState from "./useAppState";

function useAnalytics() {
  const isDevelopment = process.env.APP_ENV === "development";
  const { userId } = useAppState();

  useEffect(() => {
    // Check if userId is defined
    if (!userId) {
      console.warn("User ID is not defined");
      return; 
    }

    // Initialize Mixpanel if not already done
    if (!mixpanel.__loaded) {
      mixpanel.init(process.env.MIXPANEL_PROJECT_TOKEN || "", {
        debug: isDevelopment,
        ignore_dnt: true,
      });
      mixpanel.__loaded = true; 
    }

    // Set up user identity and properties
    try {
      mixpanel.identify(userId);
      mixpanel.people.set({
        $name: userId, 
        $app: process.env.APP_NAME,
      });
    } catch (error) {
      console.error("Mixpanel initialization failed:", error);
    }
  }, [userId, isDevelopment]); 

  function trackEvent(eventName: string, tags: Record<string, string> = {}) {
    const allTags = {
      environment: process.env.APP_ENV,
      app: process.env.APP_NAME,
      ...tags,
    };

    console.log("Tracking event:", eventName, "with tags:", allTags); // Debugging

    try {
      mixpanel.track(eventName, allTags);
    } catch (error) {
      console.error("Error tracking event:", error);
    }

    if (isDevelopment) {
      console.log("Tracked", eventName, allTags);
    }
  }

  return { trackEvent };
}

export default useAnalytics;
