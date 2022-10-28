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

