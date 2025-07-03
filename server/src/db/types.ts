import type { ColumnType, Generated } from "kysely";

export interface Database {
  product: ProductTable;
}

export interface ProductTable {
  id: Generated<number>;
  name: string;
  description: string;
  price: number;
  createdAt: ColumnType<Date, string | undefined, never>;
  updatedAt: ColumnType<Date, string | undefined, string>;
}
