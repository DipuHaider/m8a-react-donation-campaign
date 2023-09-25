import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Header navbar</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/donations">Donation</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
            </nav>
        </div>
    );
};

export default Header;