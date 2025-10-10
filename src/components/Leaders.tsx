import React from "react";

const Leaders = () => {
  const leaders = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder",
      image: "/images/leader1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Founder",
      image: "/images/leader2.png",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "Founder",
      image: "/images/leader3.png",
    },
    {
      id: 4,
      name: "Sophia Brown",
      role: "Founder",
      image: "/images/leader4.png",
    },
  ];

  return (
    <div className="px-10">
      <div className="text-center text-xl font-semibold mt-16 mb-7">
        Guided by visionaries, Driven by values.
      </div>

      <div className="flex w-full gap-7">
        {leaders.map((leader) => (
          <div key={leader.id} className="w-1/4">
            <div className="bg-amber-300 h-96">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="mt-3">{leader.name}</h1>
            <h1 className="text-sm text-gray-500">{leader.role}</h1>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 ">
        <button className="mt-6 px-7 py-4 bg-[#DB0A0A] text-white rounded-full text-sm ">
          MEET OUR LEADERS
        </button>
      </div>
    </div>
  );
};

export default Leaders;
