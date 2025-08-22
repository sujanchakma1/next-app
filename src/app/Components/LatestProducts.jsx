"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";

export default function LatestProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products/latest")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading></Loading>;

  return (
    <div className="my-10">
      <h2 className="text-center font-bold text-3xl">Latest Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-base-300 hover:shadow-2xl rounded-xl p-4 shadow">
            <img src={product.image} alt={product.name} className="mb-2 w-full h-56 rounded object-cover" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-semibold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
