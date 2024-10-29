import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IProduct } from "../types/IProduct";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICart {
  cart: ICartProduct[];
  addToCart: (item: ICartProduct) => void;
  removeFromCart: (name: string) => void;
  clearToCart: () => void;
  getTotalItems: () => number;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  removeItem: (name: string) => void;
  getTotalPrice: () => number; // Nueva función para obtener el total
}

export const cartStore = create<ICart>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((i) => i.name === item.name);
          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.name === item.name
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          } else {
            return { cart: [...state.cart, item] };
          }
        }),
      removeFromCart: (name) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.name !== name),
        })),
      clearToCart: () => set({ cart: [] }),
      getTotalItems: () => {
        const state = get();
        return state.cart.reduce((total, item) => total + item.quantity, 0);
      },
      increaseQuantity: (name) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.name === name ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),
      decreaseQuantity: (name) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.name === name && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),
      removeItem: (name) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.name !== name),
        })),
      // Implementación de la nueva función para calcular el total del carrito
      getTotalPrice: () => {
        const state = get();
        return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: "cart-storage", // nombre del storage (key)
      storage: createJSONStorage(() => localStorage), // método de almacenamiento
    }
  )
);
