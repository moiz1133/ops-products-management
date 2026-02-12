export default function NotFound() {
  return (
    <div className="container py-5">
      <div className="alert alert-danger">
        Invalid URL. Please go back to the{" "}
        <a href="/products" className="alert-link">Products page</a>.
      </div>
    </div>
  );
}
