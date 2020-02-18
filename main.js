// function extend(child, parent){ //промежуточная функция наследования
// child.prototype = Object.create(parent.prototype);
// child.prototype.constructor = child;
// }

// function Shape(color){
//    this.color = color
// }

// Shape.prototype.duplicate = function(){
//   console.log('duplicate');
// }

// function Circle(radius, color){
//  Shape.call(color);
//  this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.duplicate = function(){
//   console.log('duplicate circle');
// }

// function Square(){

// }

// extend(Square, Shape);
// Square.prototype.duplicate = function(){
//   console.log('duplicate square');
// }

// const shapes = [
//   new Circle(),
//   new Square
// ];

// for(let shape of shapes){
// shape.duplicate();
// }

//MIXIM консолидация assign
/*
const canEat = {
  eat: function(){
    this.hanger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function(){
    console.log('walking');
  }
};

function Person(){

}
Object.assign(Person.prototype, canEat, canWalk);
const person = new Person;
console.log(person);
*/
//=========================================

// function HtmlElement (){
//   this.click = function(){
//     console.log('clicked');
//   }
// }
// HtmlElement.prototype.focus = function(){
//   console.log('focused');
// }

// function HtmlSelectElement(items = []){
//   this.items = items;
//   this.addItem = function(item){
//     return this.items.push(item);
//   }
//   this.removeItem = function(item){
//    return this.items.splice(this.items.indexOf(item), 1);
//   }
//   //HtmlElement.call(this);
// }

// //HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// //HtmlSelectElement.prototype.constructor = HtmlSelectElement;
// HtmlSelectElement.prototype = new HtmlElement();

// const s = new HtmlSelectElement();

// const e =  new HtmlElement();

//=============================================
// GET SET

// function Circle(radius){
//   this.radius = radius;
//   let defaultLocation = {x:1, y:1};
//   Object.defineProperty(this, 'defaultLocation', {
//     get : function(){
//       return defaultLocation;
//     },
//     set: function (values){
//       if (!values.x || !values.y)
//       throw new Error('Invalid location');

//       defaultLocation = values;

//     }
//   } )

//   this.draw = function(){
//     console.log('draw');
//   };
// }

// const circle = new Circle(10);

//=================================
// STOPWATCH

function StopWatch(){
  let startTime, endTime, running, duration = 0;
  this.start = function(){
    if (running) 
    throw new Error('Уже запущен');
    running = true;
    startTime = new Date();
  };

  this.stop = function(){
    if(!running)
      throw new Error('еще не запущен');
    running = false;
    endTime = new Date();
    let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  Object.defineProperty(this, 'duration', {
    get: function(){
      return duration;
    }
  })

  this.reset = function(){
    startTime = null;
    endTime = null;
    duration = 0;
  }
}

let sw = new StopWatch();
