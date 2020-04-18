import React, { Component } from "react";

class Card extends Component {
  state = {
    verso: false,
    active: false
  };
  flip = () => {
    this.props.flip();
    if (this.state.verso === false) {
      this.setState({ verso: true, active:true });
    } else {
      this.setState({ verso: false, active:false });
    }
  };
  render() {
    return (
      <div
        className={`flip-card ${this.state.active === true ? "active" : ""}`}
        onClick={() => this.flip()}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            
            <p>{this.props.card.question}</p>
          </div>
          <div className="flip-card-back">
          <p>{this.props.card.answer}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
