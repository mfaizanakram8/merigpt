/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Or false depending on your needs
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    MIXPANEL_PROJECT_TOKEN: process.env.MIXPANEL_PROJECT_TOKEN,
    APP_ENV: process.env.APP_ENV,
    APP_NAME: process.env.APP_NAME
  },
};

module.exports = nextConfig;
