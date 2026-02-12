"use client";
export default function Sorting({ sort, setSort }: { sort: string; setSort: (s: string) => void }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <label className="fw-semibold">Sort by:</label>
      <select
        className="form-select form-select-sm"
        value={sort}
        onChange={(e) => setSort(e.target.value)} // ✅ triggers re-fetch
      >
        <option value="name">Name</option>
        <option value="sku">SKU</option>
        <option value="owner">Owner</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
}
