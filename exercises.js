//Do not change any of the function names

function getBiggest(x, y) {
  return Math.max(x, y);
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
}

function greeting(language) {
  var lookup = {
    'German':'Guten Tag!',
    'English':'Hello!',
    'Spanish':'Hola!'
  };
  return lookup[language] || 'Hello!';
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  return num === 10 || num === 5;
  //return true if num is 10 or 5
  //otherwise return false
}

function isInRange(num) {
  return num < 50 && num > 20;
  //return true if num is less than 50 and greater than 20
}

function isInteger(num) {
  return num === Math.floor(num);
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  var ret =  '';
  if (num%3 === 0) {
    ret += 'fizz';
  }
  if(num%5 === 0) {
    ret += 'buzz';
  }
  return ret || num;
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
}

function isPrime(num) {
  var ret = true && ([0, 1].indexOf(num) === -1);
  for(var i = 2; i < num; i++) {
    ret = ret && !isInteger(num/i);
  }

  return ret;
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
}

function returnFirst(arr) {
  return arr[0];
  //return the first item from the array
}

function returnLast(arr) {
  return arr[arr.length - 1];
  //return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;
  //return the length of the array
}

function incrementByOne(arr) {
  return arr.map(function(a) {
    return a + 1;
  });
  //arr is an array of integers  
  //increase each integer by one
  //return the array
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
  //add the item to the end of the array
  //return the array
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
}

function wordsToSentence(words) {
  return words.join(' ');
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  return arr.indexOf(item) !== -1;
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
}

function addNumbers(numbers) {
  return numbers.reduce(function(a, b) {
    return a + b;
  });
  //numbers is an array of integers.
  //add all of the integers and return the value
}

function averageTestScore(testScores) {
  var sum = 0;
  var count = testScores.length;

  sum = addNumbers(testScores);

  return sum/count;
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
}

function largestNumber(numbers) {
  return numbers.reduce(function(a, b) {
    if(a>b) {
      return a;
    }
    else {
      return b;
    }
  });
  //numbers is an array of integers
  //return the largest integer
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
