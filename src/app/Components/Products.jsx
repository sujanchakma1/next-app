"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal এ দেখানোর জন্য

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

  if (loading) return <Loading />;

  if (!products.length)
    return (
      <p className="flex justify-center items-center h-screen">
        No products found.
      </p>
    );

  return (
    <>
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
              <label
                htmlFor="product-modal"
                className="btn btn-primary rounded-full"
                onClick={() => setSelectedProduct(product)}
              >
                Details
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setSelectedProduct(null)}
          >
            ✕
          </label>
          {selectedProduct && (
            <>
              <h3 className="text-lg font-bold mb-2">{selectedProduct.name}</h3>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="mb-2 w-full h-64 rounded object-cover"
              />
              <p className="mb-1"><strong>Description:</strong> {selectedProduct.description}</p>
              <p className="mb-1"><strong>Price:</strong> ${selectedProduct.price}</p>
              <p className="mb-1"><strong>Creation Date:</strong> ${selectedProduct.createdAt}</p>
              {/* আরও চাইলে extra fields দেখাতে পারেন */}
            </>
          )}
        </div>
      </div>
    </>
  );
}
