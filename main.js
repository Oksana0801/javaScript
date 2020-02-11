
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

function SW(){
  let startTime, endTime, running, duration = 0;

  this.star = function(){
    if(running){
      throw new Error ('SW has already started.')}
    running = true;
    startTime = new Date();

  };

  this.end = function(){
    if(!running){
      throw new Error ('SW is not started.')
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime())/1000;
    duration += seconds;

  };

  this.reset = function(){
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;

  };
  Object.defineProperty(this, 'duration', {
    get: function(){
      return duration;
    }
  })
}