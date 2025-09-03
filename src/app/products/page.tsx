// app/products/page.tsx

import ProductCard from "@/components/ProductCard/ProductCard";
import products from "@/data/product.json"

export default function ProductsPage() {
  return (
    <main className="min-h-screen p-6 bg-base-200">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
}
