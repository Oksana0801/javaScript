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
//let array = ['апельсин', 'банан','вишня','голубика','душица'];
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
/*
function  reverseArrayinPlace (arr){
	for(let i = 0; i<Math.floor(arr.length / 2); i++){
		let element = arr[i];
		array[i] = arr[arr.length-i-1];
		arr[arr.length-i-1] = element;
	}
	return arr;
}
console.log(reverseArrayinPlace(array));
console.log(array);
*/
// LIST Сама не справилась
// из массива в объект (список)
/*
function arrayToList(array){
	let list = null;
	for(let i = array.length-1; i >= 0; i--){
		list = {value: array[i], rest: list}
	}
	return list;
}
console.log(arrayToList([10,20,30]));
*/
// из объекта (списка) в массив
/*
function listToArray(data){
	let result = [];
	for(let listArray = data; listArray; listArray = listArray.rest ){
	result.push(listArray.value);
	}
	return result;
}

console.log(listToArray(arrayToList([1, 2, 3])));
*/
/*
// добавление значения и списка в начало
function prepend(val, listVal){
	return {value: val, rest : listVal};
}

console.log(prepend(10, prepend(20, null)));
*/
/*
// местоположение элемента из списка в массиве
function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n - 1);
  }
console.log(nth(arrayToList([10, 20, 30]), 1));
*/
//Сравнение примитивов и глубокое сравнение объектов;
/*
function  deepEqual(val1, val2){
	if(val1 === NaN || val2 === NaN){
		return false;
	} else if(val1 === null && val2 === null || val1 === undefined && val2 === undefined){
		return true;
	} else if (val1 === null || val2 === null ){
		return false;
	} else if(typeof val1 !== typeof val2 || val1.length !== val2.length){
		return false;
	} else if(typeof val1 === 'number'){
		if(val1 === val2) {
			return true;
		} else { 
			 return false;
		}		
	} else if(typeof val1 === 'string'){
		for(let i=0; i < val1.length; i++){
			if (val1[i] !== val2[i]){
				return false;
			}		 
		}
		return true;
	} else if (typeof val1 === 'object'){
		function toSeeList (list1, list2){
			if(list1 === list2){
				return true;
			} else {
				if(Object.keys(list1).length !== Object.keys(list2).length){
				return false;
				} else {
					for(let key in list1){
						if(!Object.keys(list2).includes(key) || !deepEqual(list1[key],list2[key])){
							return false;
						}
					}
				}
			}
			return true;
		}
		return toSeeList (val1, val2);
	}
}
let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, {here: {is: "an"}, object: 3}));
*/
// ЗАДАЧИ НА РЕКУРСИЮ
/*
function foo(a, b){
	if(a==b){
		return b;
	} else if(a<b){
		return 	foo(a, b-1) + ' ' + b;
	} else {
		return foo(a, b+1) + ' ' + b;
	}
	
}

console.log(foo(5, 1));
*/
// Аккерман
/*
function foo(m, n){
	if(m==0){
		return n+1;
	} else if(m > 0 && n==0){
		return foo(m-1, 1);
	} else if (m > 0 && n>0){
		return foo(m-1, foo(m, n-1));
	} else{
		return "Не получилось";
	}
}

console.log(foo(3, 2));
*/
const arrN = [1, 10, 15, 25, 10];
/*
arr.forEach(function(item, index, array){
	console.log(item, index, array);
});
*/
function forEAch(arr, foo){
	if(typeof arr !== 'object'){
		return "Требуется массив";
	}
	for(let i = 0; i < arr.length; i++){
		foo(arr[i], i, arr);
	}

}

forEAch(arrN, function(item, index, array){
	console.log(item, index, array);
});