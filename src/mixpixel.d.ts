import 'mixpanel-browser';

declare module 'mixpanel-browser' {
  interface Mixpanel {
    __loaded?: boolean; // Adding the custom property
  }
}
