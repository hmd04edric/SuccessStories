import React, { useState } from "react";

// tạo usestate cho filter

const SuccessStoriesSection = () => {
  const [filter, setFilter] = useState("All");
  // tạo mảng card chứa các image,title,description,tech
  const cards = [
    {
      image: "https://picsum.photos/400/250?random=1",
      title: "Project Alpha",
      description: "Ứng dụng web quản lý công việc trực quan và dễ sử dụng.",
      tech: ["Mobile Apps"],
    },
    {
      image: "https://picsum.photos/400/250?random=2",
      title: "E-commerce Store",
      description: "Website bán hàng với giỏ hàng và thanh toán trực tuyến.",
      tech: ["AI Solutions"],
    },
    {
      image: "https://picsum.photos/400/250?random=3",
      title: "Portfolio Website",
      description: "Trang cá nhân giới thiệu kỹ năng và dự án.",
      tech: ["Blockchain"],
    },
    {
      image: "https://picsum.photos/400/250?random=4",
      title: "Mobile Fitness App",
      description: "Ứng dụng di động theo dõi sức khỏe và tập luyện.",
      tech: ["Blockchain"],
    },
    {
      image: "https://picsum.photos/400/250?random=5",
      title: "Chat Application",
      description: "Ứng dụng nhắn tin realtime với socket.io.",
      tech: ["Quality Control"],
    },
    {
      image: "https://picsum.photos/400/250?random=6",
      title: "Data Dashboard",
      description: "Bảng điều khiển trực quan hóa dữ liệu.",
      tech: ["Embedded Systems"],
    },
  ];
  // tạo function fillter để lọc các card theo tech
  const filterCards = (cards, filter) => {
    if (filter === "All") {
      return cards;
    }
    if (filter === "Web Apps") {
      return cards.filter((card) => card.tech.includes("Web Apps"));
    }
    if (filter === "Mobile Apps") {
      return cards.filter((card) => card.tech.includes("Mobile Apps"));
    }
    if (filter === "AI Solutions") {
      return cards.filter((card) => card.tech.includes("AI Solutions"));
    }
    if (filter === "Blockchain") {
      return cards.filter((card) => card.tech.includes("Blockchain"));
    }
    if (filter === "Embedded Systems") {
      return cards.filter((card) => card.tech.includes("Embedded Systems"));
    }
    if (filter === "Quality Control") {
      return cards.filter((card) => card.tech.includes("Quality Control"));
    }
  };
  return (
    <div>
      <div class="bg-gray-800 py-4">
        <div class="flex justify-center gap-6 text-white">
          <button
            class="px-4 py-2 hover:bg-gray-400 text-white rounded-md font-semibold"
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            class="px-4 py-2 hover:bg-gray-400 hover:text-green-800"
            onClick={() => setFilter("Web Apps")}
          >
            Web Apps
          </button>
          <button
            class="px-4 py-2 hover:bg-gray-400"
            onClick={() => setFilter("Mobile Apps")}
          >
            Mobile Apps
          </button>
          <button
            class="px-4 py-2 hover:bg-gray-400"
            onClick={() => setFilter("AI Solutions")}
          >
            AI Solutions
          </button>
          <button
            class="px-4 py-2 hover:bg-gray-400"
            onClick={() => setFilter("Blockchain")}
          >
            Blockchain
          </button>
          <button
            class="px-4 py-2 hover:bg-gray-400"
            onClick={() => setFilter("Embedded Systems")}
          >
            Embedded Systems
          </button>
          <button
            class="px-4 py-2 hover:bg-gray-400"
            onClick={() => setFilter("Quality Control")}
          >
            Quality Control
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterCards(cards, filter).map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={card.image} alt={card.title} className="w-full mb-4" />
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
            <p className="text-gray-600">Tech: {card.tech.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
