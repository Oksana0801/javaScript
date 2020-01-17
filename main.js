// МИНИМУМ
/*
function min(val1, val2){
	return (val1 < val2) ? val1 : val2;
}

alert(min(-150, 30));
*/

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
console.log(isEven(-20));
*/

// ПОДСЧЕТ БУКВ
let countChar = function (str, letter){
	let counter = 0;
	for(let i = 0; i < str.length; i++ ){
		if(str[i] === letter) counter += 1;
	}
	return counter;
}
//console.log(countChar('ехал грека через реку',));

function countBs(str){
	return countChar (str, "В"); 
}

console.log(countBs('Вышел Вова Во дВор.'));

