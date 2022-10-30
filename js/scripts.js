
//Business Logic

function whatToPrint(inputNumber) {
  let parsedNumber = parseFloat(inputNumber);
  if (!parsedNumber) {
    return "Please enter a number";
  } else if (!Number.isInteger(parsedNumber)) {
    return "Please enter a whole number without any decimal places";
  }
  else {
    let array = numArray(parsedNumber);
    return beepBoop(array).join(", ");
  }
};

function numArray(inputNumber) {
    let array = [];
    for (i=0; i<=inputNumber; i++) {
    array.push(i.toString());
    }
    return array;
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
  }
  return array;
};

function flash (array, printLocation) {
  let i = 0;
  setInterval(printIt, 250, array, printLocation);
  function printIt(array, printLocation) {
    if (array[i]) {
    printLocation.innerText = array[i];
    }
    i += 1;
  }
}

//User Interface Logic 

window.addEventListener("load", function() {
  let form = document.getElementById("form");
  form.addEventListener("submit", handleSubmit);
  let resetBtn = document.getElementById("refresh");
  resetBtn.addEventListener("click", function(){
    window.location.reload();
  })
});

function handleSubmit (event) {
  event.preventDefault();
  const inputNumber = document.getElementById("number").value;
  let output = whatToPrint(inputNumber);
  document.getElementById("showResults").innerText = output;
  document.getElementById("hideReset").removeAttribute("class");
  let flashField = document.getElementById("bigShow");
  let flashArray = beepBoop(numArray(inputNumber));
  flash(flashArray, flashField);
};
