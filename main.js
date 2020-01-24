//let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// My forEach 
/*
function forEAch(arr, foo){
	if(typeof arr !== 'object'){
		return "Вы передали не массив!";
	}
	for(let i = 0; i<arr.length; i++){
		foo(arr[i], i, arr);
	}
}

forEAch(myArray, function(item, index, array){
	console.log(item, index, array);
});
*/
//=================================================
// My filter
/*
function Filter(arr, foo){
	if(typeof arr !== 'object'){
		return "Вы передали не массив!";
	}
	let result = [];
	for(let i=0; i < arr.length; i++){
		
		if (foo(arr[i])){
			result.push(arr[i]);
		}
	}
	return result;
}

let newArray = Filter(myArray, function(value){
	  return value > 5;
});

console.log(newArray);
*/
// ===========================
// MAP
/*
let heroes = ['odysseus', 'perseus', 'tesey'];
	
function myMap(array, foo){
	if(typeof array !== 'object'){
		return "Вы передали не массив!";
	}
	result = [];
	for(let name of array){
		result.push(foo(name));
	}
	return result;
}
	
let bigHerous = myMap(heroes, item => item.toUpperCase());

console.log(bigHerous);
*/
//====================================
// sort

/*
let numberArr = [5, 100, -3, 0, 1, -1, 4, 2, -10];
let stringArr = ['козёл','осёл','косолапый мишка'];

function mySort(arr, foo){
	
	for(let i = 0; i <= arr.length-1; i++){
		
		for(let k = 0; k < arr.length-(1+i); k++){
			if(foo(arr[k], arr[k+1])){
				let spare = arr[k];
				arr[k] = arr[k+1];
				arr[k+1] = spare;
			}
			//console.log(numberArr); 
		}
	}
	return arr;
}

let sortedOut = mySort(stringArr, function(a, b){
	return a > b;
});
console.log(sortedOut);
*/
//====================================
//every/some
/*
let numberArr = [-5, -100, -3, 0, -1, -1, -4, -2, -10];
let stringArr = ['козёл','осёл','косолапый мишка'];

function myEvery(arr, foo){
	for(let i = 0; i < arr.length; i++){
		if(!foo(arr[i])){
			return false;
		}
	}
	return true;
}
let result = myEvery(numberArr, function(value){
	return (value < 4);
});

console.log(result);

function mySome(arr, foo){
	for(let i = 0; i < arr.length; i++){
		if(foo(arr[i])){
			return true;
		}
	}
	return false;
}
let result2 = mySome(numberArr, function(value){
	return (value < 4);
});

console.log(result2);
*/
//==============================================
//reduse/reduseRight

let myArray = [1, 2, 3, 4, 5];
/*
function myReduce(arr, foo, initialValue){
	let summa = 0;
	if(initialValue == undefined){
		summa = arr[0];
		
		for(let i = 1; i < arr.length; i++){
			summa = foo(summa, arr[i]);
		}
	} else {
		summa = initialValue;
		
		for(let i = 0; i < arr.length; i++){
			summa = foo(summa, arr[i]);
		}
	}
	return summa;
}

var result = myReduce(myArray, function(sum, current) {
	return sum + current;
  }, );

  console.log(result);
*/


function myRightReduce(arr, foo, initialValue){
	let summa = 0;
	if(initialValue == undefined){
		summa = arr[arr.length-1];
		
		for(let i = arr.length - 2; i >= 0; i--){
			summa = foo(summa, arr[i]);
		}
	} else {
		summa = initialValue;
		
		for(let i = arr.length - 1; i >= 0; i--){
			summa = foo(summa, arr[i]);
		}
	}
	return summa;
}

var result = myRightReduce(myArray, function(sum, current) {
	return sum + current;
	}, 8);

	console.log(result);	
