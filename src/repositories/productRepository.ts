// src/repositories/productRepository.ts
import { prisma } from "@/lib/prisma";

export const productRepository = {
  async findById(id: number) {
    return prisma.product.findUnique({
      where: { id },
      include: { owner: true },
    });
  },

  async update(id: number, data: any) {
    return prisma.product.update({
      where: { id },
      data: {
      name: data.name,
      sku: data.sku,
      price: Number(data.price),       // convert to number
      inventory: Number(data.inventory), // convert to number
      status: data.status,
      ownerId: Number(data.ownerId),   // convert to number
      imageUrl: data.imageUrl || null
    }
    });
  },

  async delete(id: number) {
    return prisma.product.delete({
      where: { id },
    });
  },
  async findAll() {
    return prisma.product.findMany({ include: { owner: true } });
  },

  async create(data: any) {
  return prisma.product.create({
    data: {
      name: data.name,
      sku: data.sku,
      price: Number(data.price),       // convert to number
      inventory: Number(data.inventory), // convert to number
      status: data.status,
      ownerId: Number(data.ownerId),   // convert to number
      imageUrl: data.imageUrl || null
    }
  });
}

};
