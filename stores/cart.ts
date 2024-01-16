import { defineStore } from "pinia";
import type { IProduct } from "../interfaces/product.interface";

export const useCartStore = defineStore("carts", {
  state: () => {
    return { items: [] as IProduct[], prefs: "" };
  },
  actions: {
    onRemove(item: IProduct) {
      this.items = this.items.filter((prod) => {
        return prod.id !== item.id;
      });
    },
    onAdd(item: IProduct) {
      const existingItemIndex = this.items.findIndex(
        (prod) => prod.id === item.id
      );
      if (existingItemIndex !== -1) {
        this.items[existingItemIndex].count++;
      } else {
        this.items = [...this.items, { ...item, count: 1 }];
      }
    },
    onIncrement(itemId: number) {
      const existsItem = this.items.filter((prod) => prod.id == itemId);
      existsItem[0].count++;
    },
    onDecrement(itemId: number) {
      const existsItem = this.items.filter((prod) => prod.id == itemId);
      existsItem[0].count--;
    },
  },
  getters: {
    totalPrice(): string {
      const result = this.items.reduce((total, product) => {
        const price = Number(product.price.replace(",", "."));
        const count = Number(product.count);
        return Number(total) + price * count;
      }, 0);
      return result.toFixed(2);
    },
  },
});
