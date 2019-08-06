import React from 'react';
import logo from '../Assets/logos/1.svg';
import logo1 from '../Assets/logos/2.png';
import logo2 from '../Assets/logos/3.png';
import logo3 from '../Assets/logos/4.png';
import logo4 from '../Assets/logos/5.png';

const Logos = (props) => {
    return <section className="icons" id="logos">
        <h2>My stack</h2>
        <img src={logo} alt="JavaScript logo"></img>
        <img src={logo1} alt="HTML5 logo"></img>
        <img src={logo2} alt="CSS3 logo"></img>
        <img src={logo3} alt="Sass logo"></img>
        <img src={logo4} alt="Git logo"></img>
    </section>
}

export default Logos;