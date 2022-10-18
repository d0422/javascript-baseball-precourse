import getIndex from "./getIndex.js";

export default function getBallCount(answerArray, inputArray) {
  let count = 0,
    x = 0;
  for (x = 0; x < 3; x++) {
    if (answerArray[x] === getIndex(x, inputArray)[0]) {
      count++;
    } else if (answerArray[x] === getIndex(x, inputArray)[1]) {
      count++;
    }
  }
  return count;
}
