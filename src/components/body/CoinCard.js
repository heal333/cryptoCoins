import { useContext } from "react";
import { Link } from "react-router-dom";
import { PriceHistoryChangeContext } from "../../utils/ContextProvider";

const CoinCard = ({ details }) => {
    const { setCoinData } = useContext(PriceHistoryChangeContext);

    return (
        <Link
            onClick={() => setCoinData(details?.quote?.USD)}
            to={`/${details.id}`}
            className="bg-black text-white m-3 p-5 rounded-lg text-2xl lg:text-base transition-all duration-500"
        >
            <div className="flex justify-between min-w-96 lg:min-w-60">
                <div className="flex items-center justify-center rounded-full w-24 h-24 lg:w-16 lg:h-16 border-2 border-gray-400">
                    {details.symbol}
                </div>
                <div className="flex items-center ml-10 text-gray-400">
                    {details.name}
                </div>
            </div>
            <div className="flex justify-between text-gray-300 text-lg">
                <div>price per unit: </div>

                <div>{details.quote?.USD?.price.toFixed(7)} USD</div>
            </div>
            <div className=" text-gray-500">
                <div className="flex justify-center">In last:</div>
                <div className="flex justify-end ">
                    24 hours:
                    <div
                        className={`${
                            details.quote?.USD?.percent_change_24h > 0
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {details.quote?.USD?.percent_change_24h.toFixed(2)}%
                    </div>
                </div>
                <div className="flex justify-end">
                    7 days:
                    <div
                        className={`${
                            details.quote?.USD?.percent_change_7d > 0
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {details.quote?.USD?.percent_change_7d.toFixed(2)}%
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CoinCard;
