import { useContext } from "react";
import { Link } from "react-router-dom";
import { PriceHistoryChangeContext } from "../../utils/ContextProvider";
import { HOME_ADDRESS } from "../../utils/const";

const CoinCard = ({ details }) => {
    const { setCoinData } = useContext(PriceHistoryChangeContext);

    return (
        <Link
            onClick={() => setCoinData(details?.quote?.USD)}
            to={`${HOME_ADDRESS}/${details.id}`}
            className="bg-black text-white m-5 p-7 rounded-xl text-1xl 2xl:text-base transition-all duration-500"
        >
            <div className="flex justify-between min-w-96 2xl:min-w-60">
                <div className="flex items-center justify-center rounded-full w-20 h-20 2xl:w-16 2xl:h-16 border-2 border-gray-400">
                    {details.symbol}
                </div>
                <div className="flex items-center ml-44 text-gray-400">
                    {details.name}
                </div>
            </div>
            <div className="flex justify-between text-gray-300 text-xl 2xl:text-base">
                <div>price per unit: </div>

                <div>{details.quote?.USD?.price.toFixed(3)} USD</div>
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
