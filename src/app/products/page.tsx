import ProductList from "@/components/ProductList";
import Link from "next/link";


export default function ProductsPage() {
  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-5">

        {/* Page Header */}
        <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <div>
              <h1 className="fw-bold mb-1">Products</h1>
              <p className="text-muted mb-0">
                Manage and monitor operational products
              </p>
            </div>

            <a
              href="/products/new"
              className="btn btn-success px-4 rounded-pill"
            >
              + Add Product
            </a>
          </div>
        </div>

        <ProductList />
      </div>
    </div>
  );
}
