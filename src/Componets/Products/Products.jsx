import { useEffect, useState } from 'react';
import '../Products/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  return (
    <div className="container-products">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button onClick={() => handleAddToCart(product)}>
            Adicionar ao carrinho {cart.find((item) => item.id === product.id) ? '🛒' : ''}
          </button>
          <button onClick={() => handleRemoveFromCart(product)}>
            Remover do carrinho
          </button>
        </div>
      ))}
      <div className="cart">
        <h2>Carrinho</h2>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
