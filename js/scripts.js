
//Business Logic

functionErrorHandling

function numArray(inputNumber) {
  inputNumber = parseFloat(inputNumber);
  if (!inputNumber) {
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

function beepBoop(arrayIn) {
  for (i=0; i<arrayIn.length; i++) {
    if (arrayIn[i].includes("3")) {
      arrayIn.splice(i, 1, "Won't you be my neighbor?")
    } else if (arrayIn[i].includes("2")) {
      arrayIn.splice(i, 1, "Boop!")
    } else if (arrayIn[i].includes("1")) {
      arrayIn.splice(i, 1, "Beep!")
    }
  };
  return arrayIn.join(",  ");
};

//User Interface Logic 

window.addEventListener("load", function() {
  let form = document.getElementById("form");
  form.addEventListener("submit", handleSubmit);
});

function handleSubmit (event) {
  event.preventDefault();
  const inputNumber = document.getElementById("number").value;
  let array = numArray(inputNumber);
  let output = beepBoop(array);
  console.log(output);
  document.getElementById("showResults").innerText = output;

};

