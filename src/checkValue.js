import getBallCount from "./getBallCount.js";
import getStrikeCount from "./getStrikeCount.js";

export default function checkValue(inputValue, answer) {
  const answerArray = [...answer];
  const inputArray = [...inputValue];
  let outputString = "낫싱";
  const strikeCount = getStrikeCount(answerArray, inputArray);
  const ballCount = getBallCount(answerArray, inputArray);
  if (strikeCount || ballCount) {
    outputString = "";
    if (strikeCount && ballCount)
      outputString = `${ballCount}볼 ${strikeCount}스트라이크`;
    else if (strikeCount) outputString = `${strikeCount}스트라이크`;
    else outputString = `${ballCount}볼`;
  }
  return outputString;
}
