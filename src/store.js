import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useCartStore = create()(
  immer((set) => ({
    cartproducts: [],
    addToCart: (item) =>
      set((state) => {
        if (state.cartproducts.find((i) => i.id === item.id)) {
          state.products = state.cartproducts.map((i) => {
            i.quantity++;
            return i;
          });
        } else {
          state.products.push({ ...item, quantity: 1 });
        }
      }),
    incrementQuantity: (id) =>
      set((state) => {
        state.addToCart(id);
      }),
    decrementQuantity: (id) =>
      set((state) => {
        if (state.cartproducts.find((i) => i.id === id)) {
          state.products = state.cartproducts.map((i) => {
            i.quantity--;
            if (i.quantity === 0) {
              state.deleteItem(id);
            }
            return i;
          });
        }
      }),
    deleteItem: (id) =>
      set((state) => {
        state.cartproducts = state.cartproducts.filter((i) => i.id !== id);
      }),
  })),
);

export const useToggleMenuStore = create()(
  immer((set) => ({
    isOpen: false,
    openMenu: () =>
      set((state) => {
        state.isOpen = true;
      }),
    closeMenu: () =>
      set((state) => {
        state.isOpen = false;
      }),
  })),
);
