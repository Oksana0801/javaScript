/*function power(num, exp) {
	let result = 1;
	for (let i = 0; i < exp; i++) {
		 result *= num;
	}
	return result; 
}
console.log(power(2, 3));
*/
/*
let x = 'X';
let y = 'Y';

function outer(){
	let x = 'x';
	console.log('x: ' + x);
	console.log('y: ' + y);
	y = 'y';
	function inner (z){
		//let y = '_y';
		console.log('x: ' + x);
		console.log('y: ' + y);
		console.log('z: ' + z);
	}
	inner('z');
}

outer();
console.log('x: ' + x);
console.log('y: ' + y);
*/



let y = 'yes';
foo(false);
function foo(x){
	if(x){
		console.log(y);
	} else {
		let y = 2;
		console.log(y);
	}
}

