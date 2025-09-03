// src/components/Card/Card.tsx
import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string; // optional extra class
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Card Image",
  buttonText = "Click",
  onButtonClick,
  className = "",
}) => {
  return (
    <div className={`card bg-base-100 shadow-sm w-96 ${className}`}>
      <figure>
        <Image src={imageSrc} alt={imageAlt} width={400} height={250} className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {buttonText && (
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={onButtonClick}>
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
