import type { Kysely } from "kysely";
import type { Database } from "../types";

export async function seed(db: Kysely<Database>): Promise<void> {
  await Promise.all([
    db
      .insertInto("product")
      .values({
        name: "Product 1",
        description: "Description for Product 1",
        price: 19.99,
      })
      .execute(),
    db
      .insertInto("product")
      .values({
        name: "Product 2",
        description: "Description for Product 2",
        price: 29.99,
      })
      .execute(),
    db
      .insertInto("product")
      .values({
        name: "Product 3",
        description: "Description for Product 3",
        price: 39.99,
      })
      .execute(),
  ]);
}
