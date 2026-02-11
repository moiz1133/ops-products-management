import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const sku = searchParams.get("sku");
  const ownerId = searchParams.get("ownerId");
  const status = searchParams.get("status");

  const products = await prisma.product.findMany({
    where: {
      name: name ? { contains: name } : undefined,
      sku: sku || undefined,
      ownerId: ownerId ? Number(ownerId) : undefined,
      status: status || undefined,
    },
    include: { owner: true },
  });

  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, sku, price, inventory, status, imageUrl, ownerId } = body;

  if (price < 0 || inventory < 0) {
    return NextResponse.json(
      { error: "Price and inventory must be non-negative" },
      { status: 400 }
    );
  }

  const product = await prisma.product.create({
    data: { name, sku, price, inventory, status, imageUrl, ownerId },
  });

  return NextResponse.json(product, { status: 201 });
}
