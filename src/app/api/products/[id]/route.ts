// src/app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import { productService } from "@/services/productService";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  try {
    const product = await productService.getProduct(Number(id));
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(product);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = await req.json();
  try {
    const product = await productService.updateProduct(Number(id), body);
    return NextResponse.json(product);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  try {
    await productService.deleteProduct(Number(id));
    return new Response(null, { status: 204 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
