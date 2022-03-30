import React from "react";

const AllCoin = ({ coin }) => {
  const { image, name, symbol } = coin;
  console.log(coin);
  return (
    <div className="shadow-lg rounded-2xl w-[250px] bg-white p-4 m-4">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex-shrink-0">
          <img
            className="h-16 w-16 mx-auto object-cover rounded-full"
            src={image}
            alt="coin-img"
          />
        </div>
        <div className="flex flex-col justify-end">
          <h4 className="text-gray-600 font-medium">{name}</h4>
          <h6 className="text-gray-400">{symbol}</h6>
        </div>
      </div>
    </div>
  );
};

export default AllCoin;
