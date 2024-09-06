import "./app.css";
import ReactDOM from "react-dom/client";
import CoinList from "./components/CoinList";

const App = () => {
    return (
        <div>
            <CoinList />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
