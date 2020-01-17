// МИНИМУМ
/*
function min(val1, val2){
	return (val1 < val2) ? val1 : val2;
}
alert(min(8, 15));
*/

//МИНИМУМ ++

let num1 = Number(prompt('введите первое число для сравнения'));
let num2 = Number(prompt('введите второе число для сравнения'));
function min(val1, val2){
	return (val1 < val2) ? val1 : val2;
}
alert(min(num1, num2));


// РЕКУРСИЯ
/*
function isEven(n){
	if(n < 0) n = -n;
	if(n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	} else {
		return isEven(n-2);  
	}
}
console.log(isEven(2));
*/

// ПОДСЧЕТ БУКВ
/*
let countChar = function (str, letter){
	let counter = 0;
	for(let i = 0; i < str.length; i++ ){
		if(str[i] === letter) counter += 1;
	}
	return counter;
}
console.log(countChar('Мой муж лучший муж на свете', 'у'));

function countBs(str){
	return countChar (str, "В"); 
}

console.log(countBs('Вышел Вова Во дВор.'));
*/
