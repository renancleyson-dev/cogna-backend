import { promises as fs } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import {
  Kysely,
  PostgresDialect,
  Migrator,
  FileMigrationProvider,
} from "kysely";
import { Pool, types } from "pg";
import { CONFIG } from "../config";
import type { Database } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

types.setTypeParser(types.builtins.INT8, (val) => Number(val));
types.setTypeParser(types.builtins.NUMERIC, (value) => parseFloat(value));

const dialect = new PostgresDialect({
  pool: new Pool({
    database: CONFIG.DB_NAME,
    host: CONFIG.DB_HOST,
    user: CONFIG.DB_USER,
    port: CONFIG.DB_PORT,
    password: CONFIG.DB_PASSWORD,
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});

export const migrator = new Migrator({
  db,
  allowUnorderedMigrations: true,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, "migrations"),
  }),
});
