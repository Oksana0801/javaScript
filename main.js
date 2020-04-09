var obj = {
	x : 10,
	foo : function (){
		console.log(run);
	}
}

var newObj = Object.create(obj);    // создаём новый объект на базе старого

newObj.t = ’too’   // добавляем новое свойство к новому объекту

newObj.hasOwnProperty(’t’)  // принадлежит ли свойство t объекту newObj
obj.isPrototypeOf(newObj).  // является ли obj прототипом для newObj

//	Перебор объекта for in   and    for of

//	this - это ссылка на какой-то объект

var person = {
	name : 'Alex',
	family :  'Bobikov',
	showPersons(){
		return `Эту персону зовут ${this.name} ${this.family}.`;
	},
}
console.log(person.showPersons());
//showPersons.bind(person)();

//function showPersons(){
//	console.log(`Эту персону зовут ${this.name} ${this.family}.`);
//}
