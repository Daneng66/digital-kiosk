import { Product, listProducts } from '@digital-kiosk/services';
import { useEffect, useState } from 'react';

export function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const res = await listProducts();
      setProducts(res);
    })();
  }, []);

  return (
    <div>
      {products.map((p, i) => (
        <p key={i}>{p.name}</p>
      ))}
    </div>
  );
}

export default App;
