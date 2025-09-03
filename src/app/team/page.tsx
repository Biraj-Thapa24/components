import React from "react";
import teamData from "@/data/team.json"; // Import JSON
import TeamCard from "@/components/TeamCard/TeamCard";


export default function TeamPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {teamData.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            position={member.position}
            age={member.age}
            photo={member.photo}
          />
        ))}
      </div>
    </div>
  );
}
