import { NavLink } from "react-router-dom";
import { navItems } from '../../data/navItems'
import './NavBar.css'

export function NavBar() {
    return (
        <nav>
            <div className="navbar-items-container">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                            {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}