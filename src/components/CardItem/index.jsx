import React from "react";

const CardItem = () => {
  // tạo mảng card chứa các avatar, name,job
  const card = [
    {
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      name: "Phan Tuan Anh",
      job: "Developer",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      name: "Phan Tuan Anh",
      job: "Developer",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      name: "Phan Tuan Anh",
      job: "Developer",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      name: "Phan Tuan Anh",
      job: "Developer",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      name: "Phan Tuan Anh",
      job: "Developer",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      name: "Phan Tuan Anh",
      job: "Developer",
    },
  ];
  return <>
    {
      <div className="flex gap-4">
        {card.map((card, index) => {
          return (
            <div className="card text-center" key={index}>
              <img src={card.avatar} alt="" />
              <h4 className="font-bold">{card.name}</h4>
              <p>{card.job}</p>
            </div>
          );
        })}
      </div>
    }
    
  </>;
};

export default CardItem;
