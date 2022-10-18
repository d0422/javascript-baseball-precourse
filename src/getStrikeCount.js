export default function getStrikeCount(answerArray, inputArray) {
  let count = 0,
    x = 0;
  for (x = 0; x < 3; x++) {
    if (answerArray[x] === inputArray[x]) {
      count++;
    }
  }
  return count;
}
