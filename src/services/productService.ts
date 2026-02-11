// src/services/productService.ts
import { productRepository } from "@/repositories/productRepository";

export const productService = {
  async getProduct(id: number) {
    return productRepository.findById(id);
  },

  async updateProduct(id: number, data: any) {
    const { price, inventory } = data;
    if (price < 0 || inventory < 0) {
      throw new Error("Price and inventory must be non-negative");
    }
    return productRepository.update(id, data);
  },

  async deleteProduct(id: number) {
    return productRepository.delete(id);
  },
   async getAllProducts() {
    return productRepository.findAll();
  },

  async createProduct(data: any) {
    const { price, inventory } = data;
    if (price < 0 || inventory < 0) {
      throw new Error("Price and inventory must be non-negative");
    }
    return productRepository.create(data);
  }
};
