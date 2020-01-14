//alert("Я джава скрипт");
// проверка существвания свойства в объекте
/*
let someObject = new Object();
someObject.key1 = 'name';
someObject.key2 = 'age';

alert (someObject.key1);
*/
let user = {
	name: 'John',
	age: 30,
	"like birds": true,
	number : function sumNumb('a', 'b') {
		// body...
		a = 2;
		b = 3;
		return(a + b);
	}
};

let key = prompt('Что вы хотите узнать?', 'name');
alert(user[key]);