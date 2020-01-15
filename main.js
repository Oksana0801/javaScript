// ПОСТРОЕНИЕ ТРЕУГОЛЬНИКА В ЦИКЛЕ

let triagle = '#';
while(triagle.length <= 7){
	console.log(triagle);
	triagle += '#';	
}

//FizzBuzz

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