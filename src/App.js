import "./app.css";
import ReactDOM from "react-dom/client";
import CoinList from "./components/body/CoinList";
import Header from "./components/header/Header";

const App = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-500">
            <Header />
            <CoinList />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
