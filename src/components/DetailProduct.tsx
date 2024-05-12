// DetailProduct.tsx

import React from "react";
import { useParams } from "react-router";
import { useProductsContext } from "../context/ProductsContext"; // Importa el hook del contexto
import ProductsProvider from "../context/ProductsProvider"; // Importa el proveedor del contexto
import useGetProductById from "../hooks/Products/useGetProductById";


const DetailProduct = () => {
  const { productId: productIdFromParams } = useParams<{ productId: string }>();
  const { productId: productIdFromContext } = useProductsContext();

  const productId = productIdFromParams || productIdFromContext;
  const{product} = useGetProductById(productId)
  console.log(product)

  return (
    <ProductsProvider>
      <div>{productId}</div>
    </ProductsProvider>
  );
};

export default DetailProduct;
