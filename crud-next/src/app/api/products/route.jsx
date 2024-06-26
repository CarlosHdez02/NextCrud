import { NextResponse } from "next/server";

export const GET = async () => {
  const result = await fetch(process.env.API_URL, {
    headers: {
      "Content-type": "application/json",
    },
  });
  const products = await result.json();
  return NextResponse.json({ data: products });
};
export const POST = async (request) => {
  const product = await request.json();
  const result = await fetch(process.env.API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const newProduct = await result.json()
  return NextResponse.json({data:newProduct})
};
