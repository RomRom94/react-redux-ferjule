import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Card from "./Card";
import * as flip from "../actions/flip";

const CardList = ({ cards, flip }) => (
  <ul className="cards-list">
    {cards.map(card => (
      <Card key={card.id} card={card} {...flip} />
    ))}
  </ul>
);

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

const mapDispatchToProps = dispatch => ({
  flip: bindActionCreators(flip, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
