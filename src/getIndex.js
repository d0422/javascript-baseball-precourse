export default function getIndex(number, inputArray) {
  if (number == 0) {
    return [inputArray[1], inputArray[2]];
  } else if (number == 1) {
    return [inputArray[0], inputArray[2]];
  } else {
    return [inputArray[0], inputArray[1]];
  }
}
