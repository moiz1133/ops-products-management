import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const owners = await prisma.productOwner.findMany({
    include: { products: true },
  });
  return NextResponse.json(owners);
}
