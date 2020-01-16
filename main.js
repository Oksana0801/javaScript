//елочка
/*
let pattern = '*'
let count = 0;
let long = 5;
let line = '' ;
let result = '';
while(count < long){
	line += pattern;
	count++;
	result += line + '\n';
}
console.log(result);
*/
// Возведение в степень
/*
let num = prompt('Введите число, которое хотите возвести в степень:', 'число');
let exp = prompt('Введите степень:', 'степень');
let result = 1;
for(let i = 0; i < exp; i++){
	result *= num;
}
alert(result);
*/
//Дразнилка
let question = prompt("Купите СЛОНА!", 'для покупки напишите \'беру\'');
let answer = "беру";
while (question != null && question != answer){
	question = prompt("Все говорят: " + question + '\n' + 'А ты купи слона!', 'для покупки напишите \'беру\'');
}
if(question != null) alert("Поздравляем!!! СЛОН Ваш!!!");

/*
let line = '' ;
let result = '';
let goodBuy = "До встречи в следующий раз!";
let question = confirm("Хотите нарисовать ёлочку?");
if (question == true){

	let pattern = prompt('Введите узор:', 'введите ОДИН любой символ');
	if (pattern == null) {
		alert(goodBuy);
	} else { 
		if (pattern.length != 1){
			while(pattern.length != 1) {
				pattern = prompt('Вы НЕ ввели символ или ввели  БОЛЬШЕ ОДНОГО символа', 'введите ОДИН любой символ');
				if(pattern == null)alert(goodBuy);
			}
			let long = prompt('Укажите высоту елки:', 'введите число от 2 до 15');
			if(long == null) {
				alert(goodBuy);
			} else if (long < 2 || long > 15){
				while(long < 2 || long > 15){
					long = prompt('Вы указали неправильную высоту ёлки: ', 'введите число от 2 до 15');
					if(long == null) alert(goodBuy);
				}
				for(let i = 0; i < long; i++){
					line += pattern;
					result += line + '\n';
				}
				alert(result);
			} else {
				
				for(let i = 0; i < long; i++){
					line += pattern;
					result += line + '\n';
				}
				alert(result);
			}
		} else {
			let long = prompt('Укажите высоту елки:', 'введите число от 2 до 15');
			if(long == null) {
				alert(goodBuy);
			} else if (long < 2 || long > 15){
				while(long < 2 || long > 15){
					long = prompt('Вы указали неправильную высоту ёлки: ', 'введите число от 2 до 15');
					if(long == null) {
						alert(goodBuy);
					}
				}

				for(let i = 0; i < long; i++){
					line += pattern;
					result += line + '\n';
				}
				alert(result);
			} else {
				
				for(let i = 0; i < long; i++){
					line += pattern;
					result += line + '\n';
				}
				alert(result);
			}
		}
	}
		
} else {
	alert(goodBuy);
}
*/