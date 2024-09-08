import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../utils/const";
import LoadingDiv from "../../utils/LoadingDiv";
import { PriceHistoryChangeContext } from "../../utils/ContextProvider";
import PriceChangeHistory from "./PriceChangeHistory";

const CoinDetailsPage = () => {
    const { resId } = useParams();
    const [data, setData] = useState({});
    const { coinData } = useContext(PriceHistoryChangeContext);
    // console.log(coinData);

    const getCoinData = async () => {
        const response = await fetch(`${API}/getcoindata?id=${resId}`);
        const result = await response.json();
        setData(result?.data?.[resId]);
        // console.log(result?.data?.[resId]);
    };
    useEffect(() => {
        getCoinData();
        scrollTo(0, 0);
    }, []);

    if (Object.keys(data).length == 0) {
        return <LoadingDiv />;
    }
    const date = new Date(data?.date_launched);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-500 min-h-dvh">
            <div className="flex justify-around py-20 ">
                <img className="object-none" src={data?.logo}></img>
                <div>
                    <div className="text-white text-4xl"> {data?.name}</div>
                    {data.date_launched ? (
                        <div className="text-gray-300 text-sm">
                            launch date: {date.getDate()}/{date.getMonth() + 1}/
                            {date.getFullYear()}
                        </div>
                    ) : (
                        <div className="text-gray-300 text-sm">
                            launch date: no information
                        </div>
                    )}
                    <div className=" flex text-gray-300 text-sm">
                        price: $
                        <div className="text-green-500 pr-1">
                            {coinData?.price}
                        </div>{" "}
                        USD
                    </div>
                </div>
            </div>
            <PriceChangeHistory />
            <div className="flex justify-center flex-wrap mx-auto w-full">
                {data?.tags.map((ele, i) => {
                    return (
                        <div
                            key={i}
                            className="text-gray-400 border border-gray-400 rounded-xl m-2 px-1"
                        >
                            {ele}
                        </div>
                    );
                })}
            </div>

            <div className="p-20 text-gray-300">{data.description}</div>
        </div>
    );
};

export default CoinDetailsPage;
