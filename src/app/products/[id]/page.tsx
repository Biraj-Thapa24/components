import products from "@/data/product.json"

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return <p className="p-6 text-center">Product not found</p>;

  return (
    <main className="min-h-screen p-6 bg-base-200 flex flex-col items-center">
      <div className="card w-96 bg-base-100 shadow-lg">
        <figure>
          <img src={product.image} alt={product.title} className="w-full h-72 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <p className="font-bold text-xl">${product.price}</p>
          <button className="btn btn-primary mt-4 w-full">Proceed to Checkout</button>
        </div>
      </div>
    </main>
  );
}
