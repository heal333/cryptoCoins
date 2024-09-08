import "./app.css";
import ReactDOM from "react-dom/client";
import CoinList from "./components/body/CoinList";
import Header from "./components/header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CoinDetailsPage from "./components/coinPage/CoinDetailsPage";
import { HOME_ADDRESS } from "./utils/const";
import HeaderOffset from "./utils/HeaderOffset";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div className="">
            <Header />
            <HeaderOffset />
            <Outlet />
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: HOME_ADDRESS,
        element: <App />,
        children: [
            { path: `${HOME_ADDRESS}/`, element: <CoinList /> },
            {
                path: `${HOME_ADDRESS}/test`,
                element: <div>test page</div>,
            },
            { path: `${HOME_ADDRESS}/:resId`, element: <CoinDetailsPage /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
