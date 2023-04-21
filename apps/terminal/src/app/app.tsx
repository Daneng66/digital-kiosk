import {
  Product,
  initialiseServices,
  productService,
} from '@digital-kiosk/services';
import { useEffect, useState } from 'react';

initialiseServices({
  gateway: import.meta.env.VITE_GRPC_GATEWAY,
  mock: import.meta.env.VITE_GRPC_MOCKED,
  token: '',
});

export function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    productService()
      .listProducts({}, { signal: controller.signal })
      .then((res) => setProducts(res.products))
      .catch((e) => {
        if (controller.signal.aborted) {
          return;
        }
        console.error(e);
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      {JSON.stringify(import.meta.env)}
      {products.map((p, i) => (
        <p key={i}>{p.name}</p>
      ))}
    </div>
  );
}

export default App;
