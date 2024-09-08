import { Link } from "react-router-dom";
import { HOME_ADDRESS } from "../../utils/const";

const Header = () => {
    return (
        <div className="flex justify-between fixed w-full h-20 px-3 bg-gradient-to-l from-gray-900 to-gray-500">
            <Link
                to={`${HOME_ADDRESS}/`}
                className="text-white text-3xl lg:text-4xl px-3 my-auto font-bold"
            >
                crypto Coins
            </Link>
            <Link
                to={`${HOME_ADDRESS}/cryptoConverter`}
                className="text-white text-x lg:text-xl px-3 my-auto"
            >
                Crypto Converter
            </Link>
        </div>
    );
};

export default Header;
