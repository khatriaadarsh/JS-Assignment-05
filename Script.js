// Chapter 21- 25 -----> String Methods

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter firstName: ");

var lastName = prompt("Enter lastName: ");

var fullName = firstName + " " + lastName;

console.log(`My fullName is: ${fullName}`);

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user
// input in your browser

var favoriteMobile = prompt("Enter your favorite mobile: ");

var lengthOfString = favoriteMobile.length;

console.log(`My favorite mobile phone is: ${favoriteMobile}`);

console.log(`Length: ${lengthOfString}`);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

var str = "Pakistan";

var character = str.indexOf("n");

console.log("Index of n: " + character);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var str = "Hello World";

var index = str.lastIndexOf("l");

console.log("Index of 2nd last l is: " + index);

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var str = "Pakistan";

var index = str.charAt(3);

console.log("Character at 3: " + index);

// 6. Repeat Q1 using string concat() method.

var firstName = prompt("Enter firstName: ");

var lastName = prompt("Enter lastName: ");

var fullName = firstName.concat(" " + lastName);

console.log("My fullname is: " + fullName);

// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var originalString = "Hyderabad";

var changedString = originalString.replace("Hyder", "Islam");

console.log(`Oniginal String: ${originalString}`);

console.log(`Updated String: ${changedString}`);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together";

var updatedMessage = message.replaceAll("and", "&");

console.log(`Original String: ${message}`);

console.log(`Updated String: ${updatedMessage}`);

// 9. Write a program that converts a string "472" to a number 472. Display the values & types in your browser.

var str = "472";

console.log(typeof str);

var num = Number(str);

console.log(typeof num);

// 10. Write a program that takes user input. Convert and show the input in capital letters.

var lower = prompt("Enter lowercase string: ");

console.log(`User Input: ${lower}`);

var newStr = lower.toUpperCase();

console.log(`To uppercase: ${newStr}`);

// 11. Write a program that takes user input. Convert and  show the input in title case.

var userStr = prompt("Enter string: ");

var newStr = userStr[0].toUpperCase() + userStr.slice(1);

console.log("User input string: " + userStr);

console.log("Updated string: " + newStr);

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;

console.log("Number: " + num);

var str = num.toString().replace(".", "");

console.log("String: " + str);

// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@

let username = prompt("Enter a username: ");
let validInput = false;

for (let i = 0; i < username.length; i++) {
  if (["@", ".", ",", "!"].includes(username[i])) {
    console.log(
      "Invalid username. Please avoid using special characters like @, ., , and !."
    );
    validInput = false;
    break;
  }
}

if (validInput) {
  console.log("Valid username:", username);
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given
// item is found in the list or not.

var condition;

var sweets = ["Cake", "ApplePie", "Cookie", "Chips", "Pattern"];

var userInput = prompt("Enter a sweet: ");

for (var i = 0; i < sweets.length; i++) {
  if (userInput == sweets[i]) {
    condition = true;
  }
}
if (condition) {
  console.log(userInput + " Found");
} else {
  console.log(userInput + " Not Found");
}

// 15. Write a program to take password as an input fromb user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

function isValidPassword(password) {

    //   Check if the password is at least 6 characters long

    if (password.length < 6) {
        return false;
    }

    //   Check if the first character is a number

    if (!isNaN(password[0])) {
        return false;
    }

    // Check if the password contains both alphabets and numbers

    var hasAlphabet = false;
    var hasNumber = false;

    for (var i = 0; i < password.length; i++) {
        var char = password[i];
        if (/[a-zA-Z]/.test(char)) {
            hasAlphabet = true;
        }
        if (/[0-9]/.test(char)) {
            hasNumber = true;
        }
    }

}
return hasAlphabet && hasNumber;


function promptPassword() {
    var password = prompt("Enter your password:");

    while (!isValidPassword(password)) {
        alert(
            "Invalid password. Please enter a valid password that meets the requirements."
        );
        password = prompt("Enter your password:");
    }

    alert("Password accepted!");
}

promptPassword();

// Write a program to convert the following string to an array using string split method.=
// var university = “University of Karachi”;

var university = "University of Karachi";

for (var i = 0; i < university.length; i++) {
    console.log(university[i]);
}

// Write a program to display the last character of a user input.

var string = "Pakistan";

var char = string.charAt(7);

console.log(char);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";

var word = sentence.toLowerCase().split(" ");

var count = 0;
for (var i = 0; i < word.length; i++) {
    if (word[i] == "the") {
        count++;
    }
}
console.log(`There are ${count} occurrence of word the`);

//---------------> Chapter 26 (Rounding Numbers) <-------------

// 1. Form a statement that rounds a number to the nearest integer.

var num = 4.3;

var roun = Math.round(num);

console.log(roun);

// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

var origNumber = 5.6;

var number = Math.round(origNumber);

console.log(number);

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

var downNumber = 5.4;

var updated = Math.round(downNumber);

console.log(updated);

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.

let originalNumber = 3.7;

let roundedNumber = Math.round(originalNumber);

console.log(roundedNumber); // Output: 4

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.

var num = 0.5;
let rounded = Math.floor(num);
console.log(rounded); //Output: 0

//--------> Chapter 27 (Random Numbers) <-----------------

// 1. Convert a random number generated by JavaScript to a number in the range 1 to 50

var randomNum = Math.round(Math.random() * 50);

console.log(randomNum);

// 2. Generate a random number and assign it to a variable that hasn't been declared beforehand.

var randomNumber = Math.round(Math.random() * 10);

console.log(randomNumber);

// 3. You have to create a dice in JavaScript with the use of pseudorandom number.

var dice = Math.round(Math.random() * 6);

console.log(`Dice roll:  ${dice}`);

// 4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.

var userChoice01 = prompt("Enter head username: ");
var userChoice02 = prompt("Enter tail username: ");

var randomNumber = Math.round(Math.random());

if (randomNumber == 0) {
    console.log(userChoice01 + " won!");
} else {
    console.log(userChoice02 + " Won!");
}

// Chapter 28, 29 (Converting Strings)

// 1. How do you convert a string to an integer in JavaScript?

var str = "Apple";

var num = Number(str);

console.log(typeof num);

// 2. Write a JavaScript function to convert the string "123" to an integer.

var strNum = "123";
var num = Number(strNum);
console.log(typeof num, num);

// 3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?

var strFloat = "23.34";

var floating = parseFloat(strFloat);

console.log(typeof floating, floating);

// 4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

var str = "3423";
var num = Number(str);

if (!isNaN(num)) {
    console.log("The string can be converted in number");
} else {
    console.log("The string cannot be converted in number");
}

// 5. How can you convert a number to a string in JavaScript?

var num = 43;

var str = String(num);

console.log("Both number type and number: ", typeof str, str);

// 6. Write a JavaScript function to convert the number 42 to a string.

function conversion(num) {
    return num.toString();
}

var strNum = console.log(
    typeof conversion(42),
    "The number 42 as a String: " + conversion(42)
);

// 7. Can you convert a string representing a decimal number (e.g. "3.14") to an integer in JavaScript? If so, how?

var float = 3.14;

var integer = Number(float);

console.log(typeof integer, "Integer" + integer);

// =========> Chapter 30 (Controlling the length of decimals) <============

// 1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.

var float = 3.43;

var newNum = String(Math.round(float));

console.log(typeof newNum, newNum);

// 2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.

var num = Math.random().toFixed(2);

console.log(typeof num, num); //Output: string 0.35

var str = String(num);

console.log(typeof str, str); // string 0.35

var backIntoNumber = Number(str);

console.log(typeof backIntoNumber, backIntoNumber); // Output: number 0.35

// 3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.

var num = +prompt("Enter number in float value: ");

if (Math.round(num).toFixed(2).length > 4) {
    console.log("Valid number" + num);
} else {
    console.log("Not Valid number" + num);
}

// 4. Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal places and converted to a string.

var num = 3.14159265359;

var roundedNum = num.toFixed(2);

alert(roundedNum.toString());

//
// ============> Date Methods <===============
//

// 1. Write a program that displays current date and time in your browser.

var todayDate = new Date();

console.log(todayDate);

// 2. Write a program that alerts the current month in words.
// For example December.

var currentMon = new Date();

console.log(currentMon.toLocaleString("en-US", {
    month: "long"
}));

// or this methods

var m_names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

var month = new Date();
console.log(m_names[month.getMonth()]);

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var days = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

var currentMon = new Date();

console.log("Today is: " + days[currentMon.getDay()]);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var current = new Date();

var dayOfWeak = current.getDate();

if (dayOfWeak == 6 || dayOfWeak == 0) {
    console.log("It's Fun Day");
} else {
    console.log("It's weakday");
}

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var dayOfMonth = new Date();

if (dayOfMonth.getDate() <= 15) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.

var date = new Date();

var millisecond = date.getTime();

var minutes = (date.getTime() / 1000) * 60;

console.log(date);

console.log("Milliseconds: " + Math.round(millisecond));

console.log("Minutes: " + Math.round(minutes));

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

const now = new Date();

const hours = now.getHours();

if (hours >= 12) {
    console.log("PM");
} else {
    console.log("AM");
}

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named
// laterDate.

var lastDay = new Date("Thu Dec 31 2020");

console.log(lastDay);

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var currentDate = new Date();

var ramadanDate = new Date("March 1, 2025");

var timeDifference = currentDate - ramadanDate;

var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log(daysPassed);

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the
// beginning of 2024.

var referenceDate = new Date();

var milliSecondsSince2025 = referenceDate - new Date("Jan 1, 2024").getTime();

var secondsSincs2025 = milliSecondsSince2025 / 1000;

document.write(
    `Seconds since biginning of 2025 ${Math.round(secondsSincs2025)}`
);

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var currentTime = new Date().getHours();

var oneHourAgo = new Date(22);

var oneHour = currentTime - oneHourAgo;

console.log(currentTime);

console.log(oneHour + " Hour Ago");

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var userAge = +prompt("Enter your brith year: ");

var currentYear = new Date().getFullYear();

var yearsOld = currentYear - userAge;

console.log(`Your are ${yearsOld} years old`);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

document.write("<h1>K-Electric Bill</h1>");

var customerName = "ABC Customer";

var month = "February";

var numberOfUnits = 410;

var chargesForUnits = 16,
    lateFee = 350;

var totalUnits = numberOfUnits * chargesForUnits;

var forLateCharges = totalUnits + lateFee;

document.write(
    `Customer Name: ${customerName} <br>Month: ${month}<br>Number of Units: ${numberOfUnits}`
);
document.write(`<br>Net Amount Payable (within Due Date): ${totalUnits}`);
document.write(`<br>Late payment charges: ${lateFee}`);
document.write(`<br>Gross Amount Payable (after Due Date): ${forLateCharges}`);

//
//
//
//
//
//
//  ===========> Chapter 21 (Changing Case) <==================

//

// 1. Type the characters that are missing from this code. var allLower =
// userInput.toLowerCase; Note: Correct this statement by yourself.

var userInput = prompt("Enter lowercase character: ");

var allLower = userInput.toLowerCase();

//

// 2. Convert the string represented by x to lower-case and assign the result to the same variable.

var str = "PAKISTAN";

var newStr = str.toLowerCase();

console.log(str);

console.log(newStr);

//

// 3. Convert the string represented by y to upper-case and assign the result to the same variable.

var str = "Pakitan";

var upperStr = str.toUpperCase();

console.log(upperStr);

//
// 4. Convert the string represented by a variable to lower-case and assign the
// result to a second variable that hasn't been declared beforehand.

var fruit = "ApPle";

var lower = fruit.toLowerCase();

console.log(lower);

// 5. Convert the string represented by an array element to lower-case and
// assign it to a variable that hasn&#39;t been declared beforehand.

var cars = ["BMW", "Audi", "Toyota", "Ford"];

for (var i = 0; i < cars.length; i++) {
    console.log("Lowercase: " + cars[i].toLowerCase());
}

//

// 6. Display in an alert the upper-case version of the string represented by a variable.

var str = "random string";

alert(`Now in uppercase ${str.toUpperCase()}`);

//

// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is the writing
// of a word with its first letter in uppercase and the remaining letters in lowercase.

var city = "kaRacHi";

var firstLetter = city.charAt(0).toUpperCase();

var remaningletters = city.slice(1, 7).toLowerCase();

console.log(firstLetter + remaningletters);

//

// ==================> Chapter 22 - 25 (Strings) <==================

// 1. "captain" has been assigned to variable “sameWords”. You want to slice
// "ap" out of it.

var sameWords = "Caption";

var strPart = sameWords.slice(1, 3);

console.log(strPart);

//

// 2. The number of characters in the string will be assigned to the variable.

var characters = "Hello World";

console.log("Number of characters assigned: " + characters.length);

// 3. The string &quot;elephant&quot; has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg,
// which hasn&#39;t been declared beforehand.

var ani = "Animal";

var seg = ani.slice(1, 5);

console.log(seg); //Output: nima

// 4. Find the number of characters in the string represented by a variable and assign the number to a second variable.

var str = "Hello World";

var strLength = str.length;

console.log("Length: " + strLength);

// 5. In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first
// character and last 3 characters of the string and assign it to a second variable that hasn&#39;t been declared beforehand.

var str = "Hello World";

var newStr = str.slice(1, 8);

console.log(newStr); //Output: ello Wo

// 6. var text = "To be or not to be."; var indx = text.indexOf("be"); What is the
// value of indx?

var text = "To be or not to be.";

var index = text.indexOf("be");

console.log(index);

// 7. var text = "To be or not to be."; var indx = text.lastIndexOf("be"); What is
// the value of indx?

var txt = "To be or not to be.";

var lastIndex = txt.lastIndexOf("be");

console.log(lastIndex);


// 8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable
// indx, which hasn't been declared beforehand.


var text = "The quick brown fox jumps over the lazy dog. go go go!";

var index = text.indexOf("go");

console.log("Index of the last occurrence of 'go':", index);

// 

// 9. Code the first line of an if statement that tests whether a segment with an
// index represented by indexNum exists in a string.

var myName = "Aadarsh";

if (myName.indexOf("d") == 2) {
    console.log("Welcome")
} else {
    console.log("Invalid");
}


// 10. In this string "abcde" what character is at index 2? (Use charAt)

var chars = "abcde";

var singleChar = chars.charAt(2);

console.log("At index 2: " + singleChar)

// 
// 11. Find the 10th character in the string represented by text and assign it to
// the variable cha, which hasn't been declared beforehand.


let text = "The quick brown fox jumps over the lazy dog. go go go!";

var cha = text.charAt(10)

console.log("Character at 10 index: " + cha)


// 
// 12. Find the last character in the string represented by str and assign it to x,
// which hasn't been declared beforehand.

var myName = "Aadarsh Kumar";

var lastChar = myName.charAt(myName.length - 1);

console.log(lastChar)


// 13. Find the the 5th character in a string represented by input and assign it
// to cha, which hasn't been declared beforehand.

var str = "Aadarsh";

var fivethChar = str.charAt(5);

console.log("Fiveth character: " + fivethChar)

//

//

//==============> MATH METHODS <===================

//

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var floatNumber = prompt("Enter a positive float number: ");

console.log("Your entered: " + floatNumber)

console.log("Rounded number: " + Math.round(floatNumber));

console.log("Floor number: " + Math.floor(floatNumber));

console.log("Ceil number: " + Math.ceil(floatNumber));



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var NegativeFloatNumber = prompt("Enter a Negative float number: ");

console.log("Your entered: " + NegativeFloatNumber)

console.log("Rounded number: " + Math.round(NegativeFloatNumber));

console.log("Floor number: " + Math.floor(NegativeFloatNumber));

console.log("Ceil number: " + Math.ceil(NegativeFloatNumber));


// 

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = +prompt("Enter a number negative to convert in absolute number: ");

var posi = Math.abs(num);

console.log(posi);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.

var diceValue = Math.round(Math.random() * 6) + 1;

console.log("Random dice value: " + diceValue);


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.

var tossValue = Math.round(Math.random());

if (tossValue == 0) {
    console.log("Head!")
} else {
    console.log("Tail!")
}


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

var oneToHunderd = Math.round(Math.random() * 100);

console.log("Random number b/w 1 to 100: " + oneToHunderd);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var userWeight = +prompt("Enter your weight: ");

console.log("You weight: " + Math.round(userWeight));

//

// 8. Write a program that stores a random secret number from  1 to 10 in a variable.Ask the user to input a number
// between 1 and 10. If the user input equals the secret number, congratulate the user.

var secretNum = Math.round(Math.random() * 10);

var userNum = +prompt("Enter random number b/w 1 to 10: ");

if (secretNum == userNum) {
    console.log("Congratulations")
} else {
    console.log("Better luck for next time");
}