"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";

export default function AddProduct() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (status === "loading") return <Loading />;
  if (!session) return <p className="text-red-500">Please login to add products.</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setMessage("Product added successfully!");
      setForm({ name: "", description: "", price: "", image: "" });
    } else {
      setMessage(data.error || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-base-200 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      {message && <p className="mb-4 text-green-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="input input-bordered w-full"
          step="0.01"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary rounded-full w-full" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
