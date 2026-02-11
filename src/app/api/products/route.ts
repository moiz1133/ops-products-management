import { NextResponse } from "next/server";
import { productService } from "@/services/productService";

// GET /api/products → list all products
export async function GET() {
  try {
    const products = await productService.getAllProducts();
    return NextResponse.json(products);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/products → create a new product
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const product = await productService.createProduct(body);
    return NextResponse.json(product, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
