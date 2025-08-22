"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading></Loading>;

  if (!products.length)
    return (
      <p className="flex justify-center items-center h-screen">
        No products found.
      </p>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-base-300 hover:shadow-2xl rounded p-4 shadow-xl"
        >
          <img
            src={product.image}
            alt={product.name}
            className="mb-2 w-full h-56 rounded object-cover"
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="font-semibold mt-2">${product.price}</p>
          <div className="flex justify-end">
            <button className=" btn btn-primary rounded-full">Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}
