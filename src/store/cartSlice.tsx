import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export type Product = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  url: string;
};

// export interface cartState {
//   cart: Product[];
// }

export interface cartAction {
  type: string;
  payload: Product;
}

const savedCart = localStorage.getItem("cartItems");

const initialState = savedCart ? JSON.parse(savedCart) : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: Product[], action: cartAction) => {
      // verify if product is already in the cart
      const productIsInTheCart = state.some(
        (product: Product) => product.id === action.payload.id
      );

      // if. the product exist in cart: plus 1 to this product quantity
      // else. add this product to cart
      if (productIsInTheCart) {
        const newCart = state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        toast.info("Increased product quantity", {
          position: "bottom-right",
          autoClose: 1400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        localStorage.setItem("cartItems", JSON.stringify(newCart));
        return newCart;
      } else {
        const newCart = [...state, { ...action.payload, quantity: 1 }];

        toast.success("Product added to cart", {
          position: "bottom-right",
          autoClose: 1400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        localStorage.setItem("cartItems", JSON.stringify(newCart));
        return newCart;
      }
    },

    increaseQuantity: (state: Product[], action) => {
      const newCart = state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      toast.info("Increased product quantity", {
        position: "bottom-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      localStorage.setItem("cartItems", JSON.stringify(newCart));
      return newCart;
    },
    decreaseQuantity: (state: Product[], action) => {
      const newCart = state
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);

      toast.info("Decreased product quantity", {
        position: "bottom-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      localStorage.setItem("cartItems", JSON.stringify(newCart));
      return newCart;
    },
    removeAllProducts: (state) => {
      state = [];

      toast.warn("Cart is empty", {
        position: "bottom-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      localStorage.setItem("cartItems", JSON.stringify(state));
      return state;
    },
  },
});

export const {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  removeAllProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
