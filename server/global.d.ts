// globals.d.ts
namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_KEY: string;
    PRIVATE_KEY: string;
    PORT: string;
    MONGO_URI: string;
    BASE: string;
    ACCESS_TOKEN_TTL: string;
    REFRESH_TOKEN_TTL: string;
    SALT_WORK_FACTOR: string;
  }
}
