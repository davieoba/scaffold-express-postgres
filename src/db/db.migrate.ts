import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg"
import Env from "../config/app.keys"
import { logger } from "../extensions/helpers/logger.helper"

async function main() {
  const pool = new Pool({
    connectionString: Env.POSTGRES_URL,
  })
  const db: NodePgDatabase = drizzle(pool)
  logger.info("[Migrate] migration has started ....")
  await migrate(db, { migrationsFolder: "src/db/drizzle" })
  logger.info("[Migrate] migration ended")
  await pool.end()
}

main().catch((err) => {
  logger.error(err)
})
