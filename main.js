// ПОСТРОЕНИЕ ТРЕУГОЛЬНИКА В ЦИКЛЕ

let triagle = '#';
while(triagle.length <= 7){
	console.log(triagle);
	triagle += '#';	
}

// FizzBuzz

for(let i = 1; i<=100; i++){
	if(i%3==0 && i%5==0){
		console.log('FizzBuzz');
	} else if(i%3==0){
		console.log('Fizz');
	} else if(i%5==0){
		console.log('Buzz');
	} else {console.log(i);
	}
}


//ШАХМАТНАЯ ДОСКА
let size = 5;
let chess;
let result = ' ';
//console.log(chess.length);
for(let i = 0; i < size; i++){
	if (i == 0){
		chess='#';
		while(chess.length < size - 1){
			if(chess.length % 2 !== 0){
				chess += ' ';
			} else {
				chess += '#';
			}
		}
		chess += '\n';
	 result += chess;
	} else if (i % 2 == 0){
		chess=' ';
		while(chess.length < size){
			if(chess.length % 2 !== 0){
				chess += '#';
			} else {
				chess += ' ';
			}
		}
		chess += '\n';
	 result += chess;

	} else {
		chess = '#';
		while(chess.length < size){
			if(chess.length % 2 !== 0){
				chess += ' ';
			} else {
				chess += '#';
			}
		}
		chess += '\n';
	result += chess;
	}
}
console.log(result);

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
