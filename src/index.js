import checkValue from "./checkValue.js";
import getRandomNumbers from "./getRandomNumber.js";

export default class BaseballGame {
  constructor() {
    this.computerInputNumber = getRandomNumbers();
    this.submit = document.querySelector("#submit");
    this.restartBtn = document.querySelector("#game-restart-button");
    this.result = document.querySelector("#result");
    this.input = document.querySelector("#user-input");
    this.result.innerHTML = "";
    this.restartBtn.style.visibility = "hidden";
    this.submit.addEventListener("click", () => {
      event.preventDefault();
      if (this.checkInput(this.input.value)) {
        alert("잘못된 입력입니다!");
        return;
      }
      this.play(this.computerInputNumber);
    });
  }
  play(computerInputNumber) {
    const userInputNumbers = this.input.value;
    if (checkValue(computerInputNumber, userInputNumbers) === "3스트라이크") {
      result.innerHTML =
        "🎉 정답을 맞추셨습니다! 🎉 게임을 새로 시작하시겠습니까?";
      this.restartBtn.style.visibility = "visible";
      this.restartBtn.addEventListener("click", this.reset);
    } else {
      result.innerHTML = checkValue(computerInputNumber, userInputNumbers);
    }
    return checkValue(computerInputNumber, userInputNumbers);
  }
  reset() {
    document.querySelector("#user-input").value = "";
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#game-restart-button").style.visibility = "hidden";
  }
  checkInput(input) {
    const inputSet = new Set([...input]);
    const inputArray = [...inputSet];
    if ((input.length != 3) | (inputArray.length != 3)) {
      return true;
    }
    return false;
  }
}
new BaseballGame();
