import React, {useState} from 'react';
import './Header.css';
import es from '../../images/es.png';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#home"><img src={es} alt='ES'/></a>
                </div>
                <nav className="nav ${isMenuOpen ? 'nav-open' : ''}">
                    <ul>
                        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#certifications" onClick={toggleMenu}>Certifications</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </nav>
                <button className="menu-toggle" onClick={toggleMenu}></button>
            </div>
        </header>
    )
}

export default Header;