import { fetchDuckiesData, updateDuckiesData } from "@/scripts/redisData";

export async function GET(req) {
  try {
    const duckies = await fetchDuckiesData();
    return new Response(JSON.stringify(duckies), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch duckies" }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { duckies } = await req.json();
  try {
    await updateDuckiesData(duckies);
    return new Response(
      JSON.stringify({ message: "Duckies updated" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to update duckies" }),
      { status: 500 }
    );
  }
}
