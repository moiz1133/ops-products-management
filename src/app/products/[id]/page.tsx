import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

export default async function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;   // unwrap the promise
  const productId = Number(id);

  if (isNaN(productId)) {
    notFound(); // invalid URL → global not-found.tsx
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, { cache: "no-store" });

  if (!res.ok) {
    notFound(); // product not found
  }

  const product = await res.json();

  return (
    <div className="p-6">
      <ProductCard product={product} />
    </div>
  );
}
