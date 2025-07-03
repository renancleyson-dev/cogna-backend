import type { ReferenceExpression } from "kysely";
import { db } from "../db/connection";
import type { Database } from "../db/types";

export async function countResource<T extends keyof Database>(
  table: T,
  identifier: ReferenceExpression<Database, "product">,
): Promise<number> {
  const result = await db
    .selectFrom(table)
    .select(({ fn }) => [fn.count<number>(identifier).as("count")])
    .executeTakeFirst();

  return result?.count ?? 0;
}
