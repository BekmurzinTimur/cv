import React from 'react';
import './App.scss';
import Card from './Card/Card';
import Welcome from './Welcome/Welcome';
import Logos from './Logos/Logos';
import StickHeader from './StickHeader/StickHeader';
import Contacts from './Contacts/Contacts';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGlobe);
//import thumbnail1 from './Assets/thumbnails/thumbnail_1.png'
class App extends React.Component {
  state = {
    cards: [
      {
        title: 'Route editor',
        description: 'Here you can get the route by typing the adresses. You can change the order of them and change the location using drag and drop',
        url_pages: 'https://bekmurzintimur.github.io/level2',
        url_repository: 'https://github.com/BekmurzinTimur/level2',
      },
      {
        title: 'To-Do List',
        description: 'This project was made using plain JavaScript. I implemented such features as: Drag and Drop,local storage, archive of completed tasks and ctrl+z undo.',
        url_pages: 'https://bekmurzintimur.github.io/to-do-list',
        url_repository: 'https://github.com/BekmurzinTimur/to-do-list',
      },
      {
        title: 'Simple Restaraunt Page',
        description: 'In this project I was learning to dynamicaly update main content on the page. Also this was my first expirience with Webpack and Sass.',
        url_pages: 'https://bekmurzintimur.github.io/simple-restaurant-page',
        url_repository: 'https://github.com/BekmurzinTimur/simple-restaurant-page',
      },
      {
        title: 'The Next Web',
        description: 'It is the copy of TheNextWeb.com. Main task was to make it responsive using media queries.',
        url_pages: 'https://bekmurzintimur.github.io/thenextweb-frontpage/',
        url_repository: 'https://github.com/BekmurzinTimur/thenextweb-frontpage',
      },
      {
        title: 'The New York Times',
        description: 'I was trying to match the original article and get a clue how they achived certain layout.',
        url_pages: 'https://bekmurzintimur.github.io/the_new_york_times_article',
        url_repository: 'https://github.com/BekmurzinTimur/the_new_york_times_article',
      },
      {
        title: 'Calculator',
        description: 'Basic calculator able to evaluate consecutive operations.',
        url_pages: 'https://bekmurzintimur.github.io/calculator',
        url_repository: 'https://github.com/BekmurzinTimur/calculator',
      },
      {
        title: 'Apple Front Page',
        description: 'Front page of Apple.com from 2014.',
        url_pages: 'https://bekmurzintimur.github.io/apple-webpage',
        url_repository: 'https://github.com/BekmurzinTimur/apple-webpage',
      }
    ]
  }

  cards = <div className="cards_container">{
    this.state.cards.map((card, index) => {
      return <Card card_info={card} key={index} index={this.state.cards.length - 1 -index}/>
    })}
  </div>;

  render() {
    return (
      <div className="App">
        <StickHeader/>
        <Welcome/>
        <Logos/>
        <section className="section_divider" id="projects"></section>
        <section id="project_hub">
          <h2>Project hub</h2>
          <p>These are the projects that i worked on during my learning process. Hover over them or touch if you use mobile device to see additional information and links.</p>
          {this.cards}
        </section>
        <section className="section_divider" id="contacts"></section>
        <Contacts/>
      </div>
    );
  }
  
}

export default App;
