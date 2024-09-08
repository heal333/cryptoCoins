import "./app.css";
import ReactDOM from "react-dom/client";
import CoinList from "./components/body/CoinList";
import Header from "./components/header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CoinDetailsPage from "./components/coinPage/CoinDetailsPage";
import { HOME_ADDRESS } from "./utils/const";
import HeaderOffset from "./utils/HeaderOffset";
import Footer from "./components/footer/Footer";
import ContextProvider from "./utils/ContextProvider";
import CryptoConverter from "./components/converter/CryptoConverter";

const App = () => {
    return (
        <ContextProvider>
            <Header />
            <HeaderOffset />
            <Outlet />
            <Footer />
        </ContextProvider>
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
            {
                path: `${HOME_ADDRESS}/cryptoConverter`,
                element: <CryptoConverter />,
            },
            { path: `${HOME_ADDRESS}/:resId`, element: <CoinDetailsPage /> },
        ],
        errorElement: (
            <div>
                got to <a href={HOME_ADDRESS}>homepage</a>
            </div>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
