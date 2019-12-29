//создаем массив слов
let words = [
	'лошадь',
	'обезьяна',
	'собака',
	'кошка',
	'свинья',
];

// выбираем случайное слово

let word = words[Math.floor(Math.random() * words.length)];

let answer = confirm("Вы готовы начать игру?");

if(answer === true){
	alert(word);
} else {alert("Очент жаль. Возвращайтесь, когда будите готовы!")}


