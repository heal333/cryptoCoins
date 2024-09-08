import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex fixed w-full h-20 bg-gradient-to-l from-gray-900 to-gray-500">
            <Link
                to="/"
                className="text-white text-3xl lg:text-4xl px-3 my-auto font-bold"
            >
                crypto Coins
            </Link>
        </div>
    );
};

export default Header;
