import { useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import { API } from "../../utils/const";
import LoadingDiv from "../../utils/LoadingDiv";

const CoinList = () => {
    const [coinsList, setCoinsList] = useState([]);
    const fetchCoins = async () => {
        const response = await fetch(`${API}/coins`);
        const result = await response.json();
        setCoinsList(result.data);
    };

    useEffect(() => {
        fetchCoins();
        window.scrollTo(0, 0);
    }, []);

    if (coinsList.length == 0) {
        return <LoadingDiv />;
    }
    // return <LoadingDiv />;

    return (
        <div className="flex flex-wrap justify-evenly bg-gradient-to-b from-gray-900 to-gray-500">
            {coinsList.map((obj, i) => {
                return <CoinCard details={obj} key={obj.id} />;
            })}
        </div>
    );
};

export default CoinList;
