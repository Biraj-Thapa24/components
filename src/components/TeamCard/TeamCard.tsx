import React from "react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  position: string;
  age: number;
  photo: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position, age, photo }) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl hover:shadow-2xl transition">
      <figure>
        <Image
          src={photo}
          alt={name}
          width={300}
          height={200}
          className="object-cover h-40 w-full"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-sm text-gray-500">{position}</p>
        <p className="text-sm text-gray-400">Age: {age}</p>
      </div>
    </div>
  );
};

export default TeamCard;
