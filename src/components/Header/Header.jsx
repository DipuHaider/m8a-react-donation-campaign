import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="absolute inset-x-0 top-0 z-50">
            <div className="container mx-auto max-w-7xl">
                <div className="header-container">
                    {/* Header content */}
                    <div className="navbar">
                        <div className="flex-1">
                            <img src="https://i.ibb.co/NrFjzyf/Logo.png" alt="" />
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
            </div>
        </div>
    );
};

export default Header;