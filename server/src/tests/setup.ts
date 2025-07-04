import { before } from "node:test";
import { migrator } from "../db/connection";

before(async () => {
  await migrator.migrateToLatest();
});
