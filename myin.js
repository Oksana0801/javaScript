/*
function multiply(a, b){
  a * b;
}
  
console.log(multiply(2, 3));
*/
//=======================================================================
//let like = []; // must be "no one likes this"
//let like = ["Peter"]; // must be "Peter likes this"
//let like = ["Jacob", "Alex"]; // must be "Jacob and Alex like this"
// let like = ["Max", "John", "Mark"]; // must be "Max, John and Mark like this"
// let like = ["Alex", "Jacob", "Mark", "Max", "Kurt", "Philip"]; // must be "Alex, Jacob and 2 others like this"
/*
function likes(names){
     if(names.length === 0){
      return "no one likes this";
    } else if(names.length === 1){
      return `${names} like this`;
    } else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`;
    } else if (name.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      return  `${names[0]}, ${names[1]} and ${names.length-2} oters like this`;    
    }
}

console.log(likes(like));
*/
//================================================
/*
let array = [1, 2, 3, 4, 5];
let array3 = [1];
let array2 = ["Max", "John", "Mark"];
let arr = ['t','e','s','t']
*/
// for(let i = 0; i < a.length; i++){
//     if(a[i] === x){
//       return true;
//     } 
//   }
//   return false;
/*
let counter = 0;
function check(a, x){
  if(counter < a.length){
    if(a[counter] === x){
      return true;
    } else {
      return check(a, x, ++counter);
    }
  }
  return false;
}

console.log(check(array, 3));
*/
//=============================
/*
let string = "This website is for losers LOL!";
let string2 = "No offense but, \nYour writing is among the worst I\'ve ever read";
let string3 = 'What are you, a communist?'
function disemvowel(str) {
  let vowels = ['a', 'A', 'e', 'E', 'q', 'Q', 'y', 'Y', 'u', 'U', 'o', 'O', 'i', 'I'];
  //console.log(str);
  str = str.split('');
  //console.log(str);
    for(let i = str.length; 0 < i; i--){
      for(let k = 0; k < vowels.length; k++ ){
        if(str[i] === vowels[k]) {
          str.splice(i, 1);
        }
      }
    }
  return str.join('');
}

console.log(disemvowel(string3));
*/
// секундомер

// function SW(){
//   let startTime, endTime, running, duration = 0;

//   this.star = function(){
//     if(running){
//       throw new Error ('SW has already started.')}
//     running = true;
//     startTime = new Date();

//   };

//   this.end = function(){
//     if(!running){
//       throw new Error ('SW is not started.')
//     }
//     running = false;
//     endTime = new Date();
//     const seconds = (endTime.getTime() - startTime.getTime())/1000;
//     duration += seconds;

//   };

//   this.reset = function(){
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;

//   };
//   Object.defineProperty(this, 'duration', {
//     get: function(){
//       return duration;
//     }
//   })
// }
//============================================
// NAVIGATOR
// const walk = ['n','s','n','s','n','s','n','s','n','s'];

// function isValidWalk(walk) {
//   let n = 0, s = 0, w = 0, e = 0;
//   for(let i = 0; i < walk.length; i++){
//     switch (walk[i]){
//       case 'n' : n += 1;
//       break;
//       case 's' : s += 1;
//       break;
//       case 'w' : w += 1;
//       break;
//       case 'e' : e += 1;
//       break;
//     } 
//   }
//   if(walk.length === 10 && n === s && w===e){
//     return true;
//   }
//   return false;
// }

// console.log(isValidWalk(walk));
// ==========================================
// SUMM NUMBER

// function getSum( a, b ){
//   let sum = 0;
//   if (a > b){
//     let x = b;
//     b = a;
//     a = x;
//   }
//   if(a === b) {
//     return a;
//   }
//   for(let i = a; i <= b; i++){
//     sum += i;
//   }
//   return sum;
// }

// console.log(getSum(0, -1));
// ==============================================
// след число дя квадратного корня

// function findNextSquare(sq) {
//   let square = Math.sqrt(sq);
//   if(!Number.isInteger(square)){
//     return -1;
//   }
//   if(square % 2 !== 0 ){
//     square += 1;
//     return Math.pow(square, 2);
//   }
//   return sq;
// }

// console.log(findNextSquare(625));
// =========================================
// Сумма чисел кратная 3/5
// function solution(number){
//   let sum = 0;
//   for(let i = 0; i < number; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log(sum += i);
//     } else if(i % 3 === 0){
//       console.log(sum += i);
//     } else if (i % 5 === 0){
//       console.log(sum += i);
//     }
//   }
//   return sum;
// }

// console.log(solution(20)); // 
// =====================================
// сумма 1-чек в побитовом числе
// var countBits = function(n) {
//   let sum = 0;
//   if(n < 0){
//     n = -(n);
//   }
//   let bit = (n).toString(2);
//   for(let i = 0; i < bit.length; i++){
//     if(bit[i] === '1'){
//       sum += 1;
//     }
//   }
//   return sum;
// };

// console.log(countBits(384));
// ===================================
// сортировка по убыванию

// function descendingOrder(n){
//   let num = String(n);
//   let arr = [];
//   for(let i = 0; i < num.length; i++){
//     arr.push(num[i]);
//   }
//   arr.sort(function(a, b) { return a - b; }).reverse();
//   let result = Number(arr.join(''));
//   return result
// }
// descendingOrder(12745);
// =================================================
// расстановка предложения по числовому порядку
// const text = '4of Fo1r pe6ople g3ood th5e the2';
// function order(words){
//   let result = [];
//   let arr = words.split(" ");
//   for(let i = 0; i < arr.length; i++){
//     let ward = arr[i];
//     for(let k = 0; k < ward.length; k++){
//       switch (ward[k]){
//         case '1' : result[0] = arr[i];
//         break;
//         case '2' : result[1] = arr[i];
//         break;
//         case '3' : result[2] = arr[i];
//         break;
//         case '4' : result[3] = arr[i];
//         break;
//         case '5' : result[4] = arr[i];
//         break;
//         case '6' : result[5] = arr[i];
//         break;
//       }  
//     }
//   }
//   return result.join(' ');  
// }

// console.log(order(text)); 
// =======================================================
// find simple number

// function isPrime(num) {
//   if(num === 1 || num === 0 || num < 0){
//     return false;
//   }
//   if (num === 2 || num === 3 || num === 5 || num === 7){
//     return true;
//   }
//   if(num % 2 == 0 || num % 3 == 0) {
//     return false;
//   }
//   for(let i = 5, N = Math.sqrt(num); i <= N; i += 2){
//     if(num % i == 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(1004001));
//========================================================
// преобразование строки
// const word = " ( ( )"; // ()()()
// function duplicateEncode(word){
//   let obj = {};
//   let result = word.toLowerCase().split('');
//   result.map(function(val){
//     return obj[val] = !obj[val]? 1 : obj[val]++;
//   })
//   console.log(obj);
//   console.log(result);
//   for(let i = 0; i < result.length; i++){
//     for(let key in obj){
//       //console.log(key)
//       if(result[i] === key) {
//           if(obj[key] = 1){
//           result[i] = '(';
//         } else {
//           result[i] = ')'; 
//         }
//       }
//     }
//   }
//   return result.join('');
// }
// console.log(duplicateEncode(word));    //  РЕШЕНО !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// word = word.toLowerCase().split("");
// 	var key = {}, result = "";
// 	for (var i = 0; i < word.length; i++) {
// 		if (key[word[i]] == undefined) key[word[i]] = 1;
// 		else key[word[i]]++
// 	}
// 	for (var k = 0; k < word.length; k++) {
// 		if (key[word[k]] == 1) result += "(" ;
// 		else result += ")";
// 	}
// 	return result




// ========================================================
//  
// function digPow(n, p){
//   let num = String(n).split("");
//   let result = 0;
//   //console.log(num);
//   //console.log(num.length);
//   for(let i = 0; i < num.length; i++){
//    num[i] = Number(num[i]);
//    //console.log(num[i]);
//    result += Math.pow(num[i], p);
//    p++; 
//   }
//   if(result % n === 0){
//     return result / n;
//   }
//   return -1;
// }

// console.log(digPow(46288, 3));
// ============================================================
// OBJECTis СИМПСОН КАЙЛ
// if(!Object.is || true){
// Object.is = function ObjectIs(v1, v2){
//     //console.log(v1);
//     //console.log(v2);  

//     function negZerro (n){
//       n = Number(n);
//       return (n === 0) && (1/n === -Infinity);
//     }
    
//     let v1NegZ = negZerro(v1);
//     let v2NegZ = negZerro(v2);
    
//     function isNan(v){
//       return v !== v;
//     }
//     let v1IsNaN = isNan(v1);
//     let v2IsNaN = isNan(v2);

//     if (v1NegZ !== v2NegZ) {
//       return false;
//     } else if (v1IsNaN && v2IsNaN) {
//       return true;
//     } else {
//       return v1 === v2;
//     }
//   };
// }

// console.log(Object.is(42, 42) === true);
// console.log(Object.is('foo', 'foo') === true);
// console.log(Object.is(false, false) === true);
// console.log(Object.is(null, null) === true);
// console.log(Object.is(undefined, undefined) === true);
// console.log(Object.is(NaN, NaN) === true);
// console.log(Object.is(-0, -0) === true);
// console.log(Object.is(0, 0) === true);
// console.log(Object.is(-0, 0) === false); //b
// console.log(Object.is(0, -0) === false); //b
// console.log(Object.is(0, NaN) === false);
// console.log(Object.is(NaN, 0) === false);
// console.log(Object.is(42, '42') === false);
// console.log(Object.is('42', 42) === false);
//
// ==============================================================
// # HashTag

//const text = "code" + " ".repeat(140) + "wars";
//const text = " ".repeat(200);
//let arrText = text.split(" ");

// console.log(text);

// function generateHashtag (str) {
//   if (!str) {
//     return false;
//   } else {
//     str = str.split(" ");
//     let result = '#';
//     for(let i = 0; i < str.length; i++){
//       let word = str[i];
//       if(!word){
//         continue;
//       }
//       result += word[0].toUpperCase() + word.slice(1); 
//     }
//     if (result.length > 140 || !result || result == "#") return false;
//     return result;
//   }
// }
// console.log(generateHashtag(text));
// 
// =====================================================================================
// 
// Сумма длин интервалов, исключая повторения;
// arr = [[ 2, 9 ], [ 2, 6 ], [ 2, 4 ], [ 2, 9 ], [ 2, 5 ]];
// function sumIntervals(intervals){
//   let array = [];
//   for(let i = 0; i < intervals.length; i++){
//     let range = intervals[i];
//     let firstNum = range[0];
//     let lastNum = range[range.length - 1];
//     while(firstNum < lastNum){
//       array.push(firstNum);
//       firstNum++;
//     }
//   }
//   let result = [];
//   for (let num of array){
//     if(!result.includes(num)){
//       result.push(num);
//     }
//   }
//   return result.length;
// }

// console.log(sumIntervals(arr));
// 
// ===================================================================
// 
// let array = [];
// var maxSequense = function(arr){
//   if(!arr) return 0;
//   let maxSum = 0;
//   let partialSum = 0;
//     for(let item of arr){
//       partialSum += item;
//       maxSum = Math.max(maxSum, partialSum);
//       if (partialSum < 0) partialSum = 0;
//     }
//   return maxSum;
// }

// console.log(maxSequense(array));
// 
// ================================================================
// 

// function rgb(r,g,b){
//   let arrRGB = [r, g, b];
//   let result = [];
//   for(let item of arrRGB){
//    if(item > 255) item = 255;
//    if(item <= 0) item = 0;
//    if(item >= 10 && item <= 15){
//      item = '0' + item.toString(16);
//    } else {
//     item = item.toString(16);
//     if(item < 10) item = '0' + item;
//    if(item.length < 2) item += item;
//    } 
//    result.push(item);
//   }
  
//   return result.join('').toUpperCase(); 
// }
// console.log(rgb(274,12,180));
// 
// =====================================================================
// 
// function formatDuration (seconds) {
    
//     if (seconds == 0) return 'now';
//     if (seconds < 60 && seconds > 1) return `${seconds} seconds`;
//     if (seconds == 1) return `${seconds} second`;

//     let mins = seconds / 60;
//     seconds = seconds % 60;
//     let hours = mins / 60;
//     mins = Math.floor(mins % 60);
//     let days = hours / 24;
//     hours = Math.floor(hours % 24);
//     let years = Math.floor(days / 365);
//     days = Math.floor(days % 365);

//     let times = [years, days, hours, mins, seconds];
//     let timePeriods = ['year', 'day', 'hour', 'minute', 'second'];

//     for(let i = 0; i < times.length; i++){
//       if (times[i] > 1) {
//         timePeriods[i] += 's';
//       }
//     }
//     let result = [];
    
//     for (let j = 0; j < times.length ; j++){
//       if(times[j] !== 0){
//         result.push(`${times[j]} ${timePeriods[j]}`);
//       }
//     }
//     if(result.length > 1){
//     result[result.length-2] +=  ' and ' + result[result.length-1];
//     result.pop();
//     }
//     result = result.join(", ");
//     return result;

//   }
  
//   console.log(formatDuration(15731080));
// 
// =====================================================================================
// действительный порядок скобок