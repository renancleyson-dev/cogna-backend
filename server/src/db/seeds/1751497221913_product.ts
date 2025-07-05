import type { Kysely } from "kysely";
import type { Database } from "../types";

export async function seed(db: Kysely<Database>): Promise<void> {
  await Promise.all([
    db
    .insertInto("product")
    .values({
      name: "Logitech MX Master 3S",
      description: "Mouse sem fio ergonômico com sensor de 8000 DPI e rolagem eletromagnética MagSpeed.",
      price: 499.90,
    })
    .execute(),
    db
      .insertInto("product")
      .values({
        name: "Samsung SSD 980 PRO 1TB",
        description: "SSD NVMe PCIe 4.0 com velocidades de leitura de até 7000 MB/s, ideal para gamers e criadores.",
        price: 789.00,
      })
      .execute(),
    db
      .insertInto("product")
      .values({
        name: "Monitor LG UltraGear 27 QHD",
        description: "Monitor gamer 27 com taxa de atualização de 144Hz, 1ms de resposta e tecnologia G-Sync.",
        price: 1899.99,
      })
      .execute(),
  ]);
}
