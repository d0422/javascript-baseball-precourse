import checkValue from "./checkValue.js";
import getInputValue from "./getInputValue.js";
import getRandomNumbers from "./getRandomNumber.js";

export default class BaseballGame {
  constructor() {
    this.computerInputNumber = getRandomNumbers();
    this.submit = document.querySelector("#submit");
    this.restartBtn = document.querySelector("#game-restart-button");
    this.result = document.querySelector("#result");
    this.result.innerHTML = "";
    this.submit.addEventListener("click", () => {
      event.preventDefault();
      this.play(this.computerInputNumber);
    });
  }
  play(computerInputNumber) {
    const userInputNumbers = getInputValue();
    if (checkValue(computerInputNumber, userInputNumbers) === "3스트라이크") {
      result.innerHTML =
        "🎉 정답을 맞추셨습니다! 🎉 게임을 새로 시작하시겠습니까?";
    } else {
      result.innerHTML = checkValue(computerInputNumber, userInputNumbers);
    }
    return checkValue(computerInputNumber, userInputNumbers);
  }
}
new BaseballGame();
