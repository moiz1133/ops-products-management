"use client";
export default function Pagination({ page, setPage }: { page: number; setPage: (p: number) => void }) {
  return (
    <div className="flex gap-2 mt-4">
      <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-3 py-1 border rounded">
        Prev
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded">
        Next
      </button>
    </div>
  );
}
