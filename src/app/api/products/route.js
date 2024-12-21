import { NextResponse } from "next/server";
import { queryProducts } from "@/lib/services/productService";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const products = await queryProducts(category);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error querying products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}