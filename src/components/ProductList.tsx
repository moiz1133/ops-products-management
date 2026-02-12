"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Sorting from "./Sorting";
import Link from "next/link";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/api/products?sort=${sort}&page=${page}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [sort, page]);

  return (
    <div>

      {/* Toolbar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 p-3 bg-light rounded shadow-sm">
        {/* <Sorting sort={sort} setSort={setSort} /> */}
        <div className="d-flex align-items-center gap-3">
          {/* <small className="text-muted">Page {page}</small> */}
          {/* New button to owners listing */}
          <Link href="/owners" className="btn btn-outline-primary btn-sm">
            View Owners
          </Link>
        </div>
      </div>

      {/* Grid */}
      {products.length === 0 ? (
        <div className="bg-white shadow-sm rounded-4 p-5 text-center text-muted">
          No products found.
        </div>
      ) : (
        <div className="row g-4">
          {products.map((p) => (
            <div key={p.id} className="col-12 col-md-6 col-lg-4">
              <ProductCard
                key={p.id}
                product={p}
                onDelete={(id) => setProducts(products.filter((prod) => prod.id !== id))}
                />

            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {/* <div className="d-flex justify-content-center mt-5">
        <Pagination page={page} setPage={setPage} />
      </div> */}
    </div>
  );
}
