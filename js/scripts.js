//Business Logic

let testNumber = 10

function numArray(inputNumber) {
  let array = [];
  for (i=0; i<=inputNumber; i++) {
    array.push(i.toString());
  };
  return array;
};

console.log(numArray(testNumber));

let array = numArray(testNumber);

function beepBoop(array) {
  for (i=0; i<array.length; i++) {
    if (array[i].includes(1)) {
      array.splice(i, 1, "Beep!")
    }
  };
  return array;
};

console.log(beepBoop(array));