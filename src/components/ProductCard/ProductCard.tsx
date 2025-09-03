"use client";

import Link from "next/link";

interface ProductProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductProps> = ({ id, title, description, image, price }) => {
  return (
    <div className="card bg-base-100 shadow-lg w-96 mx-auto">
      <figure>
        <img src={image} alt={title} className="w-full h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="font-bold text-lg">${price}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
