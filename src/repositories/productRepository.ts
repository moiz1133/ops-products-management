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
      data,
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
    return prisma.product.create({ data });
  },

};
