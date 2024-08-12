export default () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT, 10) || 8080,
  JWT_SECRET: process.env.JWT_SECRET,
  HTTP_TIMEOUT: process.env.HTTP_TIMEOUT,
  HTTP_MAX_REDIRECTS: process.env.HTTP_MAX_REDIRECTS,
  BASE_URL: process.env.BASE_URL,
});
