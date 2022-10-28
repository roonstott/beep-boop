
//For testing purposes:

let testNumber = 3.14;
console.log("numArray" , numArray(testNumber));

let array = numArray(testNumber);
//console.log("beepBoop" , beepBoop(array));

//Business Logic

function numArray(inputNumber) {
  if (!Number(inputNumber)) {
    return "Please enter a number";
  }
  else if (!Number.isInteger(inputNumber)) {
    return "Please enter a whole number without any decimal places";
  }
  else {
    let array = [];
    for (i=0; i<=inputNumber; i++) {
    array.push(i.toString());
    };
    return array;
  };
};



function beepBoop(array) {
  for (i=0; i<array.length; i++) {
    if (array[i].includes("3")) {
      array.splice(i, 1, "Won't you be my neighbor?")
    } else if (array[i].includes("2")) {
      array.splice(i, 1, "Boop!")
    } else if (array[i].includes("1")) {
      array.splice(i, 1, "Beep!")
    }
  };
  return array;
};

