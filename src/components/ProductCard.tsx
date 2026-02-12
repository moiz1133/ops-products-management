"use client"
import Link from "next/link";

export default function ProductCard({
  product,
  onDelete,
}: {
  product: any;
  onDelete?: (id: number) => void;
}) {
    const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${product.name}"?`)) return;

    const res = await fetch(`/api/products/${product.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Product deleted successfully!");
      onDelete(product.id);
    } else {
      alert("Failed to delete product.");
    }
  };
  return (
    <div className="card border-0 shadow-sm h-100 rounded-4 product-card">
      <div className="card-body d-flex flex-column p-4">

        {/* Title */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="fw-bold mb-0">{product.name}</h5>

          <span
            className={`badge rounded-pill ${
              product.status === "active"
                ? "bg-success-subtle text-success"
                : "bg-secondary-subtle text-secondary"
            }`}
          >
            {product.status}
          </span>
        </div>

        <small className="text-muted mb-3">SKU: {product.sku}</small>

        {/* Details */}
        <div className="mb-3">
          <p className="mb-1 text-muted small">Owner</p>
          <p className="fw-semibold mb-2">{product.owner?.name}</p>

          <p className="mb-1 text-muted small">Price</p>
          <p className="fw-semibold text-success mb-2">
            ${Number(product.price).toLocaleString()}
          </p>

          <p className="mb-1 text-muted small">Inventory</p>
          <p className="fw-semibold">{product.inventory} units</p>
        </div>

        {/* Buttons */}
        <div className="mt-auto d-flex gap-2">
          <Link
            href={`/products/${product.id}/edit`}
            className="btn btn-outline-primary btn-sm rounded-pill flex-fill"
          >
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-outline-danger btn-sm rounded-pill flex-fill">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
