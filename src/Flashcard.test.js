import React from 'react';
import ReactDOM from 'react-dom';
import Flashcard from './Flashcard';

it('renders without crashing', () => {

  const card = {
    "front": "front-test",
    "back": "back-test",
    "id": "a-card"
  }

  const div = document.createElement('div');
  ReactDOM.render(<Flashcard
        key={card.id}
        info={card}
        id={card.id}
        onClick={ (id) => {} }
      />, div);
  ReactDOM.unmountComponentAtNode(div);
});
