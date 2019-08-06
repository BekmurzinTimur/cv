import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CV from '../Assets/CV.pdf';

const Contacts = (props) => {
    return <div className="contacts_wrapper">
        <a href={CV}  download="CV"><button id='cv_button'>Download my CV</button></a>
        <p>Email: bekmurzint@yandex.ru</p>
        <p>Phone: +7 (987) 487-30-72</p>
        <a href="https://github.com/BekmurzinTimur" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
    </div>
}

export default Contacts;