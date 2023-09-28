import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-center items-center font-semibold mt-10">
            <div>
                <Link className="mr-5" to="/">Home</Link>
                <Link className="ml-5" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;