const CoinCard = ({ details }) => {
    return (
        <div key={details.id} className="bg-black m-3 p-5 rounded-lg">
            <div className="flex justify-between min-w-52">
                <div>{details.symbol}</div>
                <div className="ml-10">{details.name}</div>
            </div>
            <div>USD{details.quote?.USD?.price.toFixed(3)}</div>
            last
            <div className="flex">
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
            <div className="flex">
                7 days:
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
        </div>
    );
};

export default CoinCard;
