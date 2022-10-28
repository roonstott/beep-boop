
//For testing purposes:

let testNumber = 12;
console.log("numArray" , numArray(testNumber));

let array = numArray(testNumber);
console.log(beepBoop(array));

//Business Logic

function numArray(inputNumber) {
  let array = [];
  for (i=0; i<=inputNumber; i++) {
    array.push(i.toString());
  };
  return array;
};



function beepBoop(array) {
  for (i=0; i<array.length; i++) {
    if (array[i].includes("2")) {
      array.splice(i, 1, "Boop!")
    } else if (array[i].includes("1")) {
      array.splice(i, 1, "Beep!")
    }
  };
  return array;
};

