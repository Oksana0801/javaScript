// 20-01-2020 str in - 121
// OBJECTS Borisov   OBJECTS Borisov   OBJECTS Borisov   OBJECTS Borisov   OBJECTS Borisov
//laba 4-1
/*
let book1 = {};
book1.title = 'Веселый молочник';
book1.pubYear = 2019;
book1.price = 125;

let book2 = {title: 'Добрый колбасник', pubYear: 2020, price: 333};

for (let key in book1){
	console.log(key + ':' + book1[key]);
}

for (let key in book2){
	console.log(`${key} : ${book2[key]}`);
}*/

//laba 4-2
/*
book1.show = function(){
	console.log(`назание: ${this.title} \nстоимость: ${this.price} руб. `);
};
//book1.show();
function bookShow(){
	console.log(`назание: ${this.title} \nстоимость: ${this.price} руб. `);
}
book2.show = bookShow;
book2.show();
*/
// OBJECT Haverbeke   OBJECT Haverbeke   OBJECT Haverbeke   OBJECT Haverbeke   OBJECT Haverbeke 
// range sum
/*
function rangeN(start, end, step = 1){
	let arrNumb = [];
	for(let i = start; i <= end; i += step){
		arrNumb.push(i);
	}
	return arrNumb;
}
console.log(rangeN(10, 20, 2));
*/
/*
function amount(arr){
	let sumArr = 0; 
	for(let i=0; i < arr.length; i++){
		sumArr += arr[i];
	}
	return sumArr;
}*/
//console.log(amount(arrNumber));
//Array in reverse order
// create a new array
let array = ['апельсин', 'банан','вишня','голубика','душица'];
/*
function  reverseArray(arr){
	let newArr=[];
	for(let i=0; i<arr.length; i++){
		newArr.unshift(arr[i]);
	}
	return newArr;
}
let newArray = reverseArray(array);
console.log(newArray);
console.log(array);
*/
function  reverseArrayinPlace (arr){
	for(let i = 0; i<arr.length; i++){
		let element = arr[0];
		arr.shift;
		
	}
	return arr;
}
console.log(reverseArrayinPlace(array));
//console.log(array);
