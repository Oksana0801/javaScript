/* 
let anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
let dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
let kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };
let friends = [anna, dave, kate];
console.log(friends);
*/

// подсчет очков
/*
let score = {
	Артур: 0,
	Максим: 0,
	Юрий: 0,
}

score.Артур += 3;
score.Максим += 6;
score.Юрий += 10;

console.log(score);
*/

//Вглубь объектов и массивов

var myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};

console.log(myCrazyObject['some array'][2].number); 