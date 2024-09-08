import { useContext } from "react";
import { PriceHistoryChangeContext } from "../../utils/ContextProvider";

const PriceChange = ({ change, timeFrame }) => {
    return (
        <div className="flex justify-evenly text-xl">
            <div className="flex justify-end w-72 text-gray-400">
                {timeFrame}
            </div>
            <div
                className={`${
                    change > 0 ? "text-green-500" : "text-red-600"
                } w-44`}
            >
                {change} %
            </div>
        </div>
    );
};

const PriceChangeHistory = () => {
    const { coinData } = useContext(PriceHistoryChangeContext);

    return (
        <div className="mx-auto my-10 w-3/4">
            <PriceChange
                change={coinData?.percent_change_1h}
                timeFrame="Price change in last 1 hour:"
            />
            <PriceChange
                change={coinData?.percent_change_24h}
                timeFrame="Price change in last 24 hours:"
            />
            <PriceChange
                change={coinData?.percent_change_7d}
                timeFrame="Price change in last 7 days:"
            />
            <PriceChange
                change={coinData?.percent_change_30d}
                timeFrame="Price change in last 30 days:"
            />
            <PriceChange
                change={coinData?.percent_change_60d}
                timeFrame="Price change in last 60 days:"
            />
            <PriceChange
                change={coinData?.percent_change_90d}
                timeFrame="Price change in last 90 days:"
            />
        </div>
    );
};

export default PriceChangeHistory;
