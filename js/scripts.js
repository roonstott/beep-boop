//Business Logic

let testNumber = 5

function numArray(inputNumber) {
  let array = [];
  for (i=0; i<=inputNumber; i++) {
    array.push(i);
  };
  return array;
};

let array = numArray(testNumber);

function beepBoop(array) {
  for (i=0; i<array.length; i++) {
    if (array[i] === 1) {
      array.splice(i, 1, "Beep!")
    }
  };
  return array;
};

console.log(beepBoop(array));