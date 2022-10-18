export default function getRandomNumbers() {
  const restartBtn = document.querySelector("#game-restart-button");
  restartBtn.style.visibility = "hidden";
  const existNumber = [];
  let randomNum;
  while (existNumber.length !== 3) {
    randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (existNumber.indexOf(randomNum) === -1) {
      existNumber.push(randomNum);
    }
  }
  const randomNumbers = existNumber.join("");
  return randomNumbers;
}
