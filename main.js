// Генератор дразнилок
/*
let partsFace = ["глаза", "нос", "уши", "рот"];
let adjective = ["тухлая", "вонючий", "жирная", "кривая"];
let teaser = ['рыба','носок','корова','обезьяна'];

let firstTeaser = partsFace[Math.floor(Math.random() * partsFace.length)];
let secondTeaser = adjective[Math.floor(Math.random() * adjective.length)];
let thirdTeaser = teaser[Math.floor(Math.random() * teaser.length)];

alert('Твои ' + firstTeaser + ' похожи на ' + secondTeaser + ' ' + thirdTeaser +'!!!');
*/

// перевод массива в строку
/*
let array = [3,2,1];
alert(array.join(' больше, чем '));
*/

//добавить элемент в массив массив

let array = [];
array.push('велосипед');
array.push('скутер');
array.push('мопед');
array.push('мотоцикл');
array.unshift('самокат');
//array.pop();
//array.shift();

//alert (array.join(" "));

//alert(array.length);
//alert(array[0]);
alert(array.indexOf("самокат"));