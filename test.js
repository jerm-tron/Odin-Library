// "Emma is a Data Scientist. Emma loves programming."

/*function howManyTimesInAString(string, word) {
  let stringArray = string.split(" ");
  let count = 0;
  //console.log(stringArray);
  for (i = 0; i < stringArray.length; i++) {
    stringArray[i];
    //console.log(stringArray[i]);
    if (stringArray[i] == word) {
      count++;
    }
  }
  console.log(count);
}

howManyTimesInAString(
  "Emma is a Data Scientist. Emma loves programming.",
  "Emma"
); */

/* Given a string that is a name
let name = "James"
Return the letters so that the first letter, the middle letter, and the last letter are the only thing combined together as a string:
Jms */

/*function threeLetterJames(james) {
  let newJames = james.split("");
  //console.log(newJames);

  for (i = 0; i < newJames.length; i++) {
    if (i % 2 == 0) {
      console.log(newJames[i]);
    }
  }
}

threeLetterJames("james"); */

/*
function addObject() {
  let nameAge1 = { "Jerm Antron": 31 };
  let nameAge2 = { "Imir Ransom": 26 };

  let total = nameAge1["Jerm Antron"] + nameAge2["Imir Ransom"];
  console.log(total);
}

//addObject();

function printList() {
  let nameAge2 = {
    Imir: [
      "Tennis",
      "Video Games",
      "Cooking",
      "Programming",
      "Mini Golf",
      "Ramen",
      "Drawing",
      "Comics",
    ],
  };
  for (i = 0; i < nameAge2.length; i++) {
    console.log(nameAge2[i]);
  }
}

let fruits = [
  "Apple",
  "Orange",
  "Grapes",
  "Watermelon",
  "Banana",
  "Strawberry",
  "Lemons",
  "Lime",
];

for (let fruit in fruits) {
  console.log(fruits[fruit]);
}
*/
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function largestInArray(large) {
  //or Math.max()
  let maxNum = 0;
  for (let num of large) {
    if (maxNum < num) {
      maxNum = num;
    }
  }
  return maxNum;
}

console.log(largestInArray([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

str1 = "Apple";

//let Object = { A: 1, p: 2, l: 1, e: 1 };

// created an empty object
let newObj = {};

// iterating through the string
for (let letter of str1) {
  // checking to see if the letter of the string is in the object. If the letter is in the object already
  // then I will add a number to the value since that means the letter was seen again
  if (letter in newObj) {
    // adding 1 to the value if the letter is seen again in the string
    newObj[letter] += 1;
  } else {
    // if it is a new letter, then we will create a new key. the new letter will be the key and since this
    // is the first time we see this letter, we will make the value 1
    newObj[letter] = 1;
  }
}
console.log(newObj);

function firstMiddleLastIndex(name) {
  location1 = name[0];
  location2 = name[Math.floor(name.length / 2)];
  location3 = name[name.length - 1];
  console.log(location1 + location2 + location3);
}

console.log(firstMiddleLastIndex("James"));
