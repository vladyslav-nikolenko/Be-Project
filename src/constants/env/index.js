const PORT = 8080;

const DATABASE_URL =
  global.envConfig?.DATABASE_URL || 'mongodb://host.docker.internal/mongodb';

const AUTH_SECRET_KEY = global.envConfig?.AUTH_SECRET_KEY;

const MINIO_IMAGE_STORAGE =
  global.envConfig?.MINIO_IMAGE_STORAGE ||
  'http://minio.tools.godeltech.com/news-images';

const MINIO_ACCESS_KEY = global.envConfig?.MINIO_ACCESS_KEY;

const MINIO_SECRET_KEY = global.envConfig?.MINIO_SECRET_KEY;

export {
  PORT,
  DATABASE_URL,
  AUTH_SECRET_KEY,
  MINIO_IMAGE_STORAGE,
  MINIO_ACCESS_KEY,
  MINIO_SECRET_KEY
};
