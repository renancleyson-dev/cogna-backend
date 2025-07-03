import { type Selectable } from "kysely";
import type { ProductTable } from "../db/types";

export function toProductDTO(product: Selectable<ProductTable>) {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
}
