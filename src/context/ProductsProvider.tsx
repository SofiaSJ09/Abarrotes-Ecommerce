// ProductsProvider.tsx

import React, { ReactNode, useState } from "react";
import ProductsContext from "./ProductsContext";

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [productId, setProductId] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        productId,
        setProductId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
