import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
    return <div className="card_wrapper">
    <h2>{props.card_info.title}</h2>
        <div className="card">
            <div className="card_image">
                <img src={require('../Assets/thumbnails/thumbnail_'+props.index+'.png')} alt={'Screenshot of ' + props.card_info.title}></img>
            </div>
            <div className="hover_info">
                <div className="hover_info--inner">
                    <p className="hover_info--text">{props.card_info.description}</p>
                    <ul className="links">
                        <li><a href={props.card_info.url_pages} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="globe"/></a></li>
                        <li><a href={props.card_info.url_repository} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
  </div>
}

export default Card;