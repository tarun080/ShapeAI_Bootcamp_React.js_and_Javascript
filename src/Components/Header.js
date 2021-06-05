import React from 'react';

function Header() {
    return (
        <header>
            <ul>
                <li><h1>Shape AI</h1></li>
                <li className="flo"><a href="#contact">Contact</a></li>
                <li className="flo"><a href="#about">About</a></li>
                <li className="flo"><a href="#home">Home</a></li>
            </ul>
        </header>
    );
}

export default Header;