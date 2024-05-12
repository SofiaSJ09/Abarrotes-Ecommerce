// ProductsContext.tsx

import React, { createContext, useContext } from "react";

type ProductsContextType = {
  productId: string; // Asegúrate de que el tipo incluya la propiedad productId
  setProductId: (productId: string) => void;
};
///
const ProductsContext = createContext<ProductsContextType>({
  productId: "",
  setProductId: () => {},
});

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsContext;
