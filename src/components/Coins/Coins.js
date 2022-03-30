import React, { useEffect, useState } from "react";
import AllCoin from "../AllCoin/AllCoin";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (
    <div className="bg-slate-200">
      <div className="h-[100%] className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
        <div className="text-center py-6">
          <h1 className="text-xl md:text-3xl font-bold text-gray-600 mb-2">
            Available Crypto Currencies
          </h1>
          <p className="text-gray-500">Total coins: {coins.length}</p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {coins.map((coin) => (
            <AllCoin key={coin.id} coin={coin}></AllCoin>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coins;
