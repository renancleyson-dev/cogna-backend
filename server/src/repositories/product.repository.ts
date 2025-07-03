import { db } from "../db/connection";

export async function getAllProducts(params: {
  limit: number;
  offset: number;
}) {
  const products = await db
    .selectFrom("product")
    .selectAll()
    .limit(params.limit)
    .offset(params.offset)
    .orderBy("createdAt", "desc")
    .execute();

  return products;
}

export async function getProductById(id: number) {
  return await db
    .selectFrom("product")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst();
}
