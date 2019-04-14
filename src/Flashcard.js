import React, { Component } from 'react';
import './Flashcard.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

library.add(faSync)  // flip icon

class Flashcard extends Component {
  constructor(props) {
    super(props);

    // initiate front-facing card
    this.state = {
      front: true,
      flipping: false,
    }
  }

  flip() {
    const front = this.state.front;

    this.setState(
      {
        front: !front,
        flipping: true
      }
    );

    // update the numbers back on the 'game board'
    this.props.onClick(this.props.id);
  }

  handleClasses() {
    const classes = ["flashcard"];
    classes.push( this.state.flipping ? "flipping" : "" );
    classes.push( this.state.front ? "" : "flipped" );
    return classes.join(" ");
  }

  render() {
    const info = this.props.info;

    return (
      <div className={ this.handleClasses() } onClick={ () =>{ this.flip()} } onTransitionEnd={ () => { this.setState({flipping: false}); console.log(this.state) } }>
        <div className="flipper">
          <div className="front">{ info.front }
            <div className="icon">
              <FontAwesomeIcon icon="sync" />
            </div>
          </div>
          <div className="back">{ info.back }
            <div className="icon">
              <FontAwesomeIcon icon="sync" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flashcard;
