
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
function duplicateEncode(word){
  let arr = word.split(" ");
  for(let i = 0; i < word.length; i++){
    for (let j = 1; j  < word.length; j++){
      if(arr[i] === arr[j]){
        
      }
    } 
  }
}
