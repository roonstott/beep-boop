Describe: numArray(inputNumber)

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: 
numArray(5);
Expected Output: 
[0, 1, 2, 3, 4, 5]

Test: "It should return an array of numbers from 0 to the user's inputted number, and convert the elements to strings"
Code: 
numArray(5);
Expected Output: 
["0", "1", "2", "3", "4", "5"]


Describe: beepBoop(array)

Test: "For the array ('array') it will replace all elements equal to 1 with the string "Beep!"
Code: 
let array = [0, 1, 2, 3, 4, 5]
beepBoop(array);
Expected Output: 
[0, "Beep!", 2, 3, 4, 5]

Test: "For the array ('array') it will replace all      elements that are numbers and contain the digit 1 with the string "Beep!"
Code: 
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
beepBoop(array);
Expected Output: 
[0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]

