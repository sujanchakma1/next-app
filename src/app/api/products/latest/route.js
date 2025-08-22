import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("nextApp"); // আপনার DB name
    const products = db.collection("products");

    // Latest 5 products, descending order by createdAt
    const latestProducts = await products
      .find({})
      .sort({ createdAt: -1 })
      .limit(6)
      .toArray();

    return new Response(JSON.stringify(latestProducts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
