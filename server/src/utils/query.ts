import type { ReferenceExpression } from "kysely";
import { db } from "../db/connection";
import type { Database } from "../db/types";

export async function countResource<T extends keyof Database>(
  table: T,
  identifier: ReferenceExpression<Database, "product">,
): Promise<number> {
  const result = await db
    .selectFrom(table)
    .select((eb) => eb.fn.count<number>(identifier).as("count"))
    .execute();

  return result[0]?.count ?? 0;
}
