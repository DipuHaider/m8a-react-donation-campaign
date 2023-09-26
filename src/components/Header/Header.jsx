import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="../../../public/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/donations">Donation</NavLink>
                        <NavLink to="/statistics">Statistics</NavLink>
                    </nav>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;