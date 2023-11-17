import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import {
  ProductListContainer,
  ProductCard,
  ProductName,
  ProductPrice,
  QuantityInput,
  Button,
  Title,
  Content,
} from "./styles";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ProductList: React.FC = () => {
  const { id } = useParams<any>();
  const [products, setProducts] = useState<Product[]>([]);
  const [buyId, setBuyId] = useState(null);

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: number
  ) => {
    const quantity = parseInt(event.target.value);

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  const handleAddToCart = async () => {
    const filteredProducts = products.filter((product) => product.quantity > 0);

    const body = {
      products: filteredProducts,
      userId: id,
    };
    console.log(body);
    if (filteredProducts.length !== 0) {
      try {
        const response = await fetch("http://localhost:3333/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        if (response.ok) {
          console.log("Compra em andamento");
          const userData = await response.json();
          const { id } = userData;
          setBuyId(id);
          localStorage.setItem("userData", JSON.stringify(userData));
        } else {
          console.log("Compra falhou!");
        }
      } catch (error) {
        console.log("Erro ao criar a compra:", error);
      }
    }
  };

  useEffect(() => {
    fetch("http://localhost:3333/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  if (buyId) {
    return <Redirect to={`/order/${id}/${buyId}`} />;
  }

  return (
    <div>
      <ProductListContainer>
        <Title>Mercadinho</Title>
        <Content>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{"Preço: R$" + product.price}</ProductPrice>
              <QuantityInput
                type="number"
                min="0"
                value={product.quantity}
                onChange={(event) => handleQuantityChange(event, product.id)}
              />
            </ProductCard>
          ))}
        </Content>
        <Button onClick={handleAddToCart}>Comprar</Button>
      </ProductListContainer>
    </div>
  );
};

export default ProductList;
