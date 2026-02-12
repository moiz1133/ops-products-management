"use client";
import { useEffect, useState } from "react";

export default function OwnersList() {
  const [owners, setOwners] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/owners")
      .then(res => res.json())
      .then(data => setOwners(data))
      .catch(err => console.error("Failed to load owners", err));
  }, []);

  return (
    <div className="container py-5">
      <h3 className="fw-bold mb-4">Product Owners</h3>
      <div className="row g-4">
        {owners.map(owner => (
          <div key={owner.id} className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{owner.name}</h5>
                <p className="text-muted">{owner.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

