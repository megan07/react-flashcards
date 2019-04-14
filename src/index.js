import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as data from './flashcards.json';
import Flashcard from './Flashcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcards: JSON.parse(data.default).flashcards,  // read in flashcard
      flipped: new Set()  // create a set so we know which cards have been flipped
    }
  }

  // How many of the displayed cards have been flipped?
  calculateFlipped(id) {
    const flipped = this.state.flipped;

    this.setState({
      flipped: flipped.add(id)
    });
  }

  renderFlashcards(cards) {
    let flashcards = [];

    for (let i = 0; i < cards.length; i++) {
      flashcards.push(<Flashcard
        key={cards[i].id}
        info={cards[i]}
        id={cards[i].id}
        onClick={ (id) => this.calculateFlipped(id) }
      />);
    }

    return flashcards;
  }

  render() {
    const flashcards = this.state.flashcards;
    const num_flashcards = flashcards.length;
    const num_flipped = this.state.flipped.size;

    return (
      <div className="game">
      <div className="total">You've flipped {num_flipped} of {num_flashcards} cards!</div>
      <div>{num_flipped === 0 ? "Get flipping!" : parseInt(num_flashcards - num_flipped)+" left to go!"}</div>
      <div className="game-board">
        {this.renderFlashcards(flashcards)}
      </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
