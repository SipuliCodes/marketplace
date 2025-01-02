import { NextResponse } from "next/server";
import { handleAddProduct, queryProducts } from "@/lib/services/productService";

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

    const pics = [];
    const picEntries = Array.from(formData.entries()).filter(([key]) => key.startsWith('pics['));
    for (const [, file] of picEntries) {
      pics.push(file)
    }

    const bodyEntries = Array.from(formData.entries()).filter(
      ([key]) => !key.startsWith('pics[') && !key.startsWith('attributes[')
    );
    const body = Object.fromEntries(bodyEntries);

    body.attributes = processedAttributes;
    
    const response = await handleAddProduct(pics, body);

    if (!response.success) {
      throw new Error(response.error || 'Failed to process the response');
    }
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Failed to add product' + error.message },
      { status: 500 }
    )
  }
}