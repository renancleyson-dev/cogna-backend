import { db } from "../../db/connection";

export async function createProductFixtures() {
  return await Promise.all([
    db
      .insertInto("product")
      .values({
        name: "Product 1",
        description: "Description for Product 1",
        price: 19.99,
      })
      .returningAll()
      .executeTakeFirstOrThrow(),
    db
      .insertInto("product")
      .values({
        name: "Product 2",
        description: "Description for Product 2",
        price: 29.99,
      })
      .returningAll()
      .executeTakeFirstOrThrow(),
    db
      .insertInto("product")
      .values({
        name: "Product 3",
        description: "Description for Product 3",
        price: 39.99,
      })
      .returningAll()
      .executeTakeFirstOrThrow(),
  ]);
}
