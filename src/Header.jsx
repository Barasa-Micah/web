import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

return (
    <header>
        <div className="container">
            <div className="logo">micaDevelops</div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about me'>About Me</Link></li>
                <li><Link to='/hire me'>Hire me</Link></li>
                <li><Link to='/socials'>Socials</Link></li>
            </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
            </div>
        </div>
    </header>
)
}