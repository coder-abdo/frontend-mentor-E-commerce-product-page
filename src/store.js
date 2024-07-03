import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    immer((set) => ({
      cartproducts: [],
      addToCart: (item) =>
        set((state) => {
          if (state.cartproducts.find((i) => i.title === item.title)) {
            state.products = state.cartproducts.map((i) => {
              i.quantity = item.quantity;
              return i;
            });
          } else {
            state.cartproducts.push(item);
          }
        }),

      deleteItem: () =>
        set((state) => {
          state.cartproducts = [];
        }),
    })),
    { name: "cart-storage" },
  ),
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

export const useLightBoxStore = create()(
  immer((set) => ({
    isClicked: false,
    selectedImage: 0,
    openLightBox: () =>
      set((state) => {
        state.isClicked = true;
      }),
    closeLightBox: () =>
      set((state) => {
        state.isClicked = false;
      }),
    changeImage: (idx) =>
      set((state) => {
        state.selectedImage = idx;
      }),
  })),
);
