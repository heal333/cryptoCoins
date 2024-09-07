import { useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import { API } from "../../utils/const";
const CoinList = () => {
    const [coinsList, setCoinsList] = useState([]);
    const fetchCoins = async () => {
        const response = await fetch(`${API}`);
        const result = await response.json();
        setCoinsList(result.data);
        console.log(coinsList);
    };

    useEffect(() => {
        fetchCoins();
    }, []);
    console.log(coinsList);

    return (
        <div className="flex flex-wrap justify-evenly pt-20">
            {coinsList.map((obj, i) => {
                return <CoinCard details={obj} />;
            })}
        </div>
    );
};

export default CoinList;
