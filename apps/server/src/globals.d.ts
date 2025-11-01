namespace NodeJS {
  interface ProcessEnv {
    MONGO_URI: string;
    PORT: string;
    CORS_ORIGIN: string;
    GOOGLE_CLIENT_ID: string;
    JWT_SECRET: string;
    ACCESS_TOKEN_TTL: string;
    REFRESH_TOKEN_TTL: string;
    PUBLIC_KEY: string;
    PRIVATE_KEY: string;
    SALT_WORK_FACTOR: string;
  }
}
