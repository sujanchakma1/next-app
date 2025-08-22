import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {

    const { name, description, price } = await req.json();

    const client = await clientPromise;
    const db = client.db("nextApp");
    const products = db.collection("products");

    const result = await products.insertOne({ name, description, price, createdAt: new Date() });

    return new Response(JSON.stringify(result), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
