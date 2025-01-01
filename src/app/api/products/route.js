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

export async function POST(request) {
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);

    const attributeEntries = Array.from(formData.entries()).filter(([key]) => key.startsWith('attributes['));

    const attributes = {};
    for (const [key, value] of attributeEntries) {
      const match = key.match(/attributes\[(\d+)\]\[(key|value)\]/)
      if (match) {
        const index = match[1];
        const key = match[2];
        if (!attributes[index]) attributes[index] = {};
        attributes[index][key] = value;
      }
    }

    const processedAttributes = Object.values(attributes).map((attr) => ({
      key: attr.key,
      value: attr.value,
    }));

    return NextResponse.json({ success: true, body });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Failed to add products' },
      { status: 500 }
    )
  }
}