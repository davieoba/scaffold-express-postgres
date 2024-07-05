import "dotenv/config"

export interface IEnv {
  PORT: number
  API_VERSION: string
  API_PATH: string
  ENVIRONMENT: string
  ALLOWED_ORIGINS: string
  POSTGRES_USER: string
  POSTGRES_DB: string
  POSTGRES_PASSWORD: string
  POSTGRES_URL: string
  POSTGRES_HOST: string
}

const Env: IEnv = {
  PORT: Number(process.env.PORT),
  API_PATH: "/api/" + process.env.API_PATH,
  API_VERSION: process.env.API_VERSION as string,
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS as string,
  ENVIRONMENT: process.env.ENVIRONMENT as string,
  POSTGRES_DB: process.env.POSTGRES_DB as string,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD as string,
  POSTGRES_HOST: process.env.POSTGRES_HOST as string,
  POSTGRES_URL: process.env.POSTGREST_URL as string,
  POSTGRES_USER: process.env.POSTGRES_USER as string,
}

export default Env
