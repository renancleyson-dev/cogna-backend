import { ProductList } from "@/components/ProductList";
import { getToken } from "@/lib/services/auth";
import { getProducts } from "@/lib/services/products";
import { redirect } from "next/navigation";

type HomeProps = { searchParams: Promise<{ page?: string }> };

export default async function Home({ searchParams }: HomeProps) {
  const { page: qPage = "1" } = await searchParams;
  const authToken = await getToken();
  if (!authToken) {
    redirect("/login");
  }

  const page = parseInt(qPage, 10) || 1;
  const { result: products, totalPages } = await getProducts(page);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
        <h1 className="text-xl font-semibold">Catálogo de Produtos</h1>
      </header>
      <main className="flex-1 px-6 py-8 bg-gray-50">
        <ProductList products={products} page={page} totalPages={totalPages} />
      </main>
    </div>
  );
}
