import OwnersList from "@/components/OwnersList";
import Link from "next/link";

export default function OwnersPage() {
  return (
    <div className="container py-5">
    <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Product Owners</h2>
        {/* Back button */}
        <Link href="/products" className="btn btn-outline-secondary">
            ← Back to Products
        </Link>
    </div>
      <OwnersList />
    </div>
  );
}
