import { createContext, useState } from "react";

export const PriceHistoryChangeContext = createContext({});

const ContextProvider = (props) => {
    const [coinData, setCoinData] = useState({});
    return (
        <PriceHistoryChangeContext.Provider
            value={{ coinData: coinData, setCoinData }}
        >
            {props.children}
        </PriceHistoryChangeContext.Provider>
    );
};

export default ContextProvider;
