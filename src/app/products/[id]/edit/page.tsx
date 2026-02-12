import ProductForm from "@/components/ProductForm";
import { notFound } from "next/navigation";
export default async function EditProductPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;   // unwrap the promise
  // If id is not a valid number, show error page
  if (isNaN(Number(id))) {
    notFound();
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
    cache: "no-store",
  });
  const product = await res.json();

  const normalized = {
    ...product,
    price: Number(product.price),
    inventory: Number(product.inventory),
    ownerId: product.ownerId ?? product.owner?.id,
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body p-5">
          <ProductForm product={normalized} />
        </div>
      </div>
    </div>
  );
}
