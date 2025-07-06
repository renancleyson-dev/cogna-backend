'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShowProduct } from "@/lib/services/products";
import { formatPrice } from "@/lib/utils";

type ProductListProps = {
  products: ShowProduct[];
  page: number;
  totalPages: number;
};

export function ProductList({ products, totalPages, page }: ProductListProps) {
  const router = useRouter();

  const productList = products.map((product) => (
    <div
      key={product.id}
      onClick={() => router.push(`/produto/${product.id}`)}
      className="w-80 border-2 rounded-lg p-4 hover:border-accent-foreground cursor-pointer"
    >
      <Link
        href={`/produto/${product.id}`}
        className="text-xl font-bold truncate"
      >
        {product.name}
      </Link>
      <div className="text-lg mb-4">{formatPrice(product.price)}</div>
      <div className="line-clamp-4">{product.description}</div>
    </div>
  ));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-6 justify-start">{productList}</div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          {page > 1 && (
            <Link
              href={`/?page=${page - 1}`}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Anterior
            </Link>
          )}
          <span className="text-sm">
            Página {page} de {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/?page=${page + 1}`}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Próxima
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
