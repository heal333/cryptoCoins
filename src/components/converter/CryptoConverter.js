import { useEffect, useState } from "react";
import { API } from "../../utils/const";

const CryptoConverter = () => {
    const [coins, setCoins] = useState([
        { name: "USD", symbol: "USD", id: 2781 },
    ]);
    const [fromInput, setFromInput] = useState({
        name: "USD",
        symbol: "USD",
        id: 2781,
    });
    const [toInput, setToInput] = useState({
        name: "USD",
        symbol: "USD",
        id: 2781,
    });
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(0);

    const fetchCoins = async () => {
        try {
            const response = await fetch(`${API}/coins`);
            const result = await response.json();
            const temp = [{ name: "USD", symbol: "USD", id: 2781 }];

            result.data.map((obj, i) => {
                temp.push({ name: obj.name, symbol: obj.symbol, id: obj.id });
            });
            setCoins(temp);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchConvert = async () => {
        setResult("loading...");
        const response = await fetch(
            `${API}/convert?amount=${amount}&fromid=${fromInput.id}&toid=${toInput.id}`
        );
        const result = await response.json();
        // console.log(result);
        setResult(result?.data?.quote[toInput.id]?.price);
    };

    const convertClickHandler = () => {
        console.log(fromInput.id, toInput.id, amount);
        fetchConvert();
    };
    const switchHandler = () => {
        const temp = fromInput;
        setFromInput(toInput);
        setToInput(temp);
    };

    useEffect(() => {
        fetchCoins();
    }, []);
    useEffect(() => {
        fetchConvert();
    }, [fromInput, toInput, amount]);
    const temp = "m-3";
    const inputStyle =
        "pl-2 py-2 ml-2 text-black rounded-xl bg-black text-white";
    return (
        <div className="h-full bg-gradient-to-b from-gray-900 to-gray-500 text-white">
            <div className="text-center text-2xl mb-10">
                Convert between different currencies
            </div>
            <div className="flex flex-wrap justify-evenly">
                <div className={temp}>
                    From:
                    <select
                        className={inputStyle}
                        onChange={(e) =>
                            setFromInput(coins[e.target.selectedIndex])
                        }
                        value={fromInput.name}
                    >
                        {coins.map((obj) => {
                            return (
                                <option key={obj.id} id={34} temp="34">
                                    {obj.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button onClick={switchHandler}>switch</button>
                <div className={temp}>
                    To:
                    <select
                        className={inputStyle}
                        onChange={(e) => {
                            setToInput(coins[e.target.selectedIndex]);
                        }}
                        value={toInput.name}
                    >
                        {coins.map((obj) => {
                            return <option key={obj.id}>{obj.name}</option>;
                        })}
                    </select>
                </div>
                <div className={temp}>
                    Amount:
                    <input
                        onChange={(e) => setAmount(e.target.value)}
                        className={inputStyle}
                        type="number"
                        value={amount}
                    ></input>
                </div>
            </div>
            {/* <button
                className="block m-auto px-2 rounded-2xl border hover:bg-white hover:text-black"
                onClick={convertClickHandler}
            >
                Convert!
            </button> */}
            <div className="text-center text-2xl my-10">
                {amount} {fromInput.symbol} = {result} {toInput.symbol}
            </div>
        </div>
    );
};

export default CryptoConverter;
