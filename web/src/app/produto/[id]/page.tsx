import { getProductDetails } from "@/lib/services/products";
import { notFound } from "next/navigation";
import { formatPrice } from "@/lib/utils";
import { GoBackButton } from "@/components/GoBackButton";

type ProductDetailsProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProductDetailsProps) {
  const { id: idParam } = await params;
  const id = parseInt(idParam);

  if (Number.isNaN(id)) {
    notFound();
  }

  const product = await getProductDetails(id);

  return {
    title: `${product.name} por ${formatPrice(product.price)}`,
    description: product.description,
  };
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { id: idParam } = await params;
  const id = parseInt(idParam);

  if (Number.isNaN(id)) {
    notFound();
  }

  const product = await getProductDetails(id);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
        <h1 className="text-xl font-semibold">Detalhes do Produto</h1>
      </header>
      <main className="flex-1 px-6 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {formatPrice(product.price)}
          </p>
          <p className="text-gray-700 text-lg whitespace-pre-line mb-6">
            {product.description}
          </p>
          <GoBackButton>← Voltar para produtos</GoBackButton>
        </div>
      </main>
    </div>
  );
}
