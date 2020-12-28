"use strict";

import PopUp from "./popup.js";
import Game from "./game.js";

const gameFinishBanner = new PopUp();
const game = new Game(3, 2, 2);
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case "cancel":
      "Replay? 🤔";
      break;
    case "win":
      message = "YOU WON 🎉";
      break;
    case "lose":
      message = "😢 YOU LOSE 😢";
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
