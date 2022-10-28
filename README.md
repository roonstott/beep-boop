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


Describe: beepBoop(array)

Test: "For the array ('array') it will replace all elements equal to 1 with the string "Beep!"
Code: 
let array = [0, 1, 2, 3, 4, 5];
beepBoop(array);
Expected Output: 
[0, "Beep!", 2, 3, 4, 5];

Test: "It will replace all elements that contain/include the character "1" with the string "Beep!"
Code: 
let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
beepBoop(array);
Expected Output: 
["0", "Beep!", "2", "3", "4", "5", "6", "7", "8", "9", "Beep!"];

Test: "It will replace all elements that contain the character "1" with the string "Beep!" and all elements that contain the character "2" with the string "Boop!" If both characters are present, the rule for character 2 will take priority. 
Code: 
let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
beepBoop(array);
Expected Output: 
["0", "Beep!", "Boop!", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!"];