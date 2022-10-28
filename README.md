# _Beep Boop_

#### By _**Robert Onstott**_

#### _Simple site that takes a number input, then counts from zero up to that number, but substituting some of the numbers with fun phrases_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Bootstrap_

## Description

_Using for-loops, an array, some if-then branching, and a variety of JavaScript methods and API methods, this program receives a user inputted whole number and prints out the series of integers from 0 up to that number. However, the program also modifies some of the printed values, instead of printing the integer. based on several simple rules--if the number contains the digit 1 it prints "beep"; if the number contains the digit 2 it prints "boop"; and if the the number contains the digit 3 it prints out "won't you be my neighbor." If multiple rules are triggered, it uses a hierarchy of priorities to decide which one to apply._

## Setup/Installation Requirements

* _Clone the repository to your own machine_
* _Open the index.html folder using a web browser of your choice_
* _Internet connection is required in order to enjoy all styling features_
* _You may also view the site as hosted by gh-pages: https://roonstott.github.io/beep-boop_ 

## Test Driven Development

```
Describe: numArray(inputNumber)

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: 
numArray(5);
Expected Output: 
[0, 1, 2, 3, 4, 5];

Test: "It should return an array of numbers from 0 to the user's inputted number, and convert the elements to strings"
Code: 
numArray(5);
Expected Output: 
["0", "1", "2", "3", "4", "5"];

Test: "It should take a string input, as if passed from a form, and return the appropriate results"
Code: 
numArray("5");
Expected Output: 
["0", "1", "2", "3", "4", "5"];

Describe: whatToPrint(inputNumber)

Test: "It should pass a valid input to the numArray function, then pass that value to the beepBoop function and return"
Code:
whatToPrint("5")=>numArray("5")=>beepBoop(["0", "1", "2", "3", "4", "5"])=>"0, Beep!, Boop!, Won't you be my neighbor?, 4, 5"

Test: "It should return "Please enter a number" if anything other than a whole number is entered, including blank"
Code: 
whatToPrint("gotcha!");
Expected Output: 
"Please enter a number";

Code: 
whatToPrint("");
Expected Output: 
"Please enter a number";

Test: "It should return "Please enter a whole number without any decimal places" if a non-integer is entered
Code: 
whatToPrint(3.14);
Expected Output: 
"Please enter a number without any decimal places";


Describe: beepBoop(array)

Test: "For the array ('array') it will replace all elements equal to 1 with the string "Beep!"
Code: 
let array = [0, 1, 2, 3, 4, 5];
beepBoop(array);
Expected Output: 
[0, "Beep!", 2, 3, 4, 5];

Test: "It should replace all elements that contain/include the character "1" with the string "Beep!"
Code: 
let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
beepBoop(array);
Expected Output: 
["0", "Beep!", "2", "3", "4", "5", "6", "7", "8", "9", "Beep!"];

Test: "It will replace all elements that contain the character "2" with the string "Boop!" If both characters are present, the rule for character "2" will take priority. 
Code: 
let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
beepBoop(array);
Expected Output: 
["0", "Beep!", "Boop!", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!"];

Test: "It will replace all elements that contain the character "3" with the string "Won't you be my neighbor!" The rule for character "3" will take priority the rules for both "1" and "2".
Code: 
let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
beepBoop(array);
Expected Output: 
["0", "Beep!", "Boop!", "Won't you be my neighbor!", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"];

Test: "It will return the transformed array is a single string"
Code: 
let array = ["0", "1", "2", "3", "4", "5"]
beepBoop(array);
Expected Output: 
0, Beep!, Boop!, Won't you be my neighbor?, 4, 5

```


## Known Bugs

* _No Known Bugs_

## License

_GPL_

Copyright (c) _Oct 2022_ _Robert Onstott_







