import React from "react";
import CardGroupList from "./CardGroupList";

const TarotCardGrid = () => {
  const wandCards = [
    "ace_of_wands", "two_of_wands", "three_of_wands", "four_of_wands",
    "five_of_wands", "six_of_wands", "seven_of_wands", "eight_of_wands",
    "nine_of_wands", "ten_of_wands", "page_of_wands", "knight_of_wands",
    "queen_of_wands", "king_of_wands"
  ];

  const cupCards = [
    "ace_of_cups", "two_of_cups", "three_of_cups", "four_of_cups",
    "five_of_cups", "six_of_cups", "seven_of_cups", "eight_of_cups",
    "nine_of_cups", "ten_of_cups", "page_of_cups", "knight_of_cups",
    "queen_of_cups", "king_of_cups"
  ];

  const swordCards = [
    "ace_of_swords", "two_of_swords", "three_of_swords", "four_of_swords",
    "five_of_swords", "six_of_swords", "seven_of_swords", "eight_of_swords",
    "nine_of_swords", "ten_of_swords", "page_of_swords", "knight_of_swords",
    "queen_of_swords", "king_of_swords"
  ];

  const pentacleCards = [
    "ace_of_pentacles", "two_of_pentacles", "three_of_pentacles", "four_of_pentacles",
    "five_of_pentacles", "six_of_pentacles", "seven_of_pentacles", "eight_of_pentacles",
    "nine_of_pentacles", "ten_of_pentacles", "page_of_pentacles", "knight_of_pentacles",
    "queen_of_pentacles", "king_of_pentacles"
  ];

  return (
    <div className="p-4">
      <CardGroupList cards={wandCards} title="Štapovi" />
      <CardGroupList cards={cupCards} title="Pehari" />
      <CardGroupList cards={swordCards} title="Mačevi" />
      <CardGroupList cards={pentacleCards} title="Pentakli" />
    </div>
  );
};

export default TarotCardGrid;
