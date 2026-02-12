"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 


export default function ProductForm({ product }: { product?: any }) {
  const router = useRouter();
  
  const [preview, setPreview] = useState<string | null>(null);
  const [owners, setOwners] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/owners")
      .then(res => res.json())
      .then(data => setOwners(data))
      .catch(err => console.error("Failed to load owners", err));
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPreview(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const url = product ? `/api/products/${product.id}` : "/api/products";
    const method = product ? "PUT" : "POST";

    const res = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      alert(product ? "Product updated successfully!" : "Product created successfully!");
      router.push("/products"); // navigate back
      router.refresh();
      e.currentTarget.reset();
      setPreview(null);
    }
    if (!res.ok) {
        const err = await res.json();
        alert("Failed: " + err.error);
    }

  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body p-5">

          <h3 className="fw-bold mb-4">{product ? "Edit Product" : "Create New Product"}</h3>

          <form onSubmit={handleSubmit}>

            {/* Basic Info */}
            <div className="row g-4">

              <div className="col-md-6">
                <label className="form-label fw-semibold">Product Name</label>
                <input
                  name="name"
                  className="form-control"
                  defaultValue={product?.name}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">SKU</label>
                <input
                  name="sku"
                  className="form-control"
                  defaultValue={product?.sku}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Price ($)</label>
                <input
                  name="price"
                  type="number"
                  className="form-control"
                  defaultValue={product?.price}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Inventory</label>
                <input
                  name="inventory"
                  type="number"
                  className="form-control"
                  defaultValue={product?.inventory}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Status</label>
                <select name="status" className="form-select" defaultValue={product?.status}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Owner</label>
                <select name="ownerId" className="form-select"  defaultValue={product?.ownerId}  required>
                  <option value="">Select Owner</option>
                  {owners.map(owner => (
                    <option key={owner.id} value={owner.id}>
                      {owner.name} ({owner.email})
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Image Section */}
            <hr className="my-5" />

            <h5 className="fw-semibold mb-3">Product Image</h5>

            <div className="mb-3">
              <label className="form-label fw-semibold">Image URL</label>
              <input
                name="imageUrl"
                type="text"
                className="form-control"
                defaultValue={product?.imageUrl || ""}
                placeholder="https://example.com/image.jpg"
                onChange={handleImageChange}
              />
            </div>

            {preview && (
              <div className="mb-4 text-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="d-flex justify-content-end gap-3">
              <button
                type="reset"
                className="btn btn-outline-secondary rounded-pill px-4"
                onClick={() => setPreview(null)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-success rounded-pill px-4"
                disabled={loading}
              >
                {loading ? (product ? "Updating..." : "Creating...") : product ? "Update Product" : "Create Product"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
