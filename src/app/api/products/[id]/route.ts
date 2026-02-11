import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; 
  console.log("Received id:", id);

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: { owner: true },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; 
    const body = await req.json();
    const { name, sku, price, inventory, status, imageUrl, ownerId } = body;

    if (price < 0 || inventory < 0) {
      return NextResponse.json(
        { error: "Price and inventory must be non-negative" },
        { status: 400 }
      );
    }

    const product = await prisma.product.update({
      where: { id: Number(id) },
      data: { name, sku, price, inventory, status, imageUrl, ownerId },
    });

    return NextResponse.json(product);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; 

    await prisma.product.delete({
      where: { id: Number(id) },
    });

   return new Response(null, { status: 204 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

