import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [id]);
  return (
    <div className="bg-slate-200">
      <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 ">
        <div className="h-full grid grid-cols-1 sm:grid-cols-2  justify-center gap-4 md:justify-around">
          <div className="ml-10">
            <h1 className="text-2xl font-normal uppercase">General Info</h1>
            <hr className="w-[50%]" />

            <h3 className="mt-2">Coin Name: {coin.name} </h3>
            <h3>Market Cap Rank: {coin.market_cap_rank}</h3>
            <h3>
              Origin: {coin.country_origin ? coin.country_origin : "Not Found"}
            </h3>
            <h3>Contract Address: {coin.name}</h3>
            <h3>Hashing Algorithm: {coin.name}</h3>
            <h3>Genesis Date: {coin.name}</h3>
            <h3>Last Updated: {coin.name}</h3>

            <h1 className="mt-7 text-2xl font-normal uppercase">Scores</h1>
            <hr className="w-[50%]" />
            <h3 className="mt-2">Community Score:</h3>
            <h3>Developer Score:</h3>
            <h3>Liquidity Score:</h3>
            <h3>Public Interest Score:</h3>
          </div>
          <div>
            <img src={coin.image?.large} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
