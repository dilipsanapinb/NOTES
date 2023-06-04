
// // .map it will return an array
// let newArray = array.map((el,index) => {
//     return el*2
// })
// console.log(newArray)


// return the elements of the array which are even
  
// let newArry = array.filter((el, index) => {
//     return index==index%2
// })
// console.log(newArry)

// var x = 10
// function func() {
//     var x=20
//      console.log(x)
// }
// func()
//  console.log(x)

// let x = 10
 
// function func() {
//     let x=20
//     console.log(x);
// }
// func()

// console.log([]===[])

// console.log({} == {})

// [](8128e1ey172)
//
//
//
//
// [](812y3832u34u293)


// let array = [1, 3, 4, 2, 5, 10];
 
// array.sort(function (a, b) {
//     // ascending
//     if (a > b) {
//         return 1;
//     } else if(b>a) {
//         return -1
//     }
//     // same value
//     return 0;
// })

// console.log(array)
// let total = array.reduce((acc,el) => {
//     return acc+el
// },10)
// console.log(total)

// class Vehicle{
//     constructor(make,model,year,color){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color=color
//     }
// }

// let car = new Vehicle("tata", "ajg", 2010,'red');
// console.log(car)

// function Print() {
//       let x = 10
// function func() {
//        console.log(x)
//     }
//     func();
// }
// Print()

// let newArray = new Array(10).fill(10);
// console.log(newArray)

// let newObj = new Object();

// // console.log(newObj)
//  let arr = [1, 2, 3, 4];
// printNums(arr);



// function printNums(arr) {
//     for (let i = 0; i < arr.length; i++){
//          console.log(arr[i]*2)
//     }
// }

// class Vehicle {
//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// let car = new Vehicle("tata", "ajg", 2010, 'red');

// car.setEngine=(engine)=>{
//     this.engine=e
// }
// console.log(car);

// console.log([] === []);
// // [] adress =71qt7172
// //
// //
// //
// //
// //
// //
// // [] adress=71qt9ut9449

// console.log({} === {});

// let newArray = new Array(10).fill(0);
// console.log(newArray);

// let newObj = new Object({a:"abc",b:"def",c:"nasns"});
// console.log(newObj);

// let newSet=new Set()
// console.log(newSet)


// class Car{
//       constructor(horsePower, name){
//         this.horsePower = horsePower;
//         this.fuel = 100;
//         this.name = name;
//       }

//       consumeFuel(amount){
//         this.fuel -= amount;
//       }
// }

//     class Sedan extends Car{
//       constructor(horsePower, name, numSeats){
//         super(horsePower, name);
//         this.numSeats = numSeats;
//       }
//       printName(){
//         console.log(this.name);
//       }

//       updateHorsePower(input){
//         super.horsePower = input;
//       }
// }
// let car = new Sedan(1000, 'abc', 4);
// console.log(car);
// console.log(car.printName());
// car.updateHorsePower(1500);
// console.log(car)

// let obj={
//   name: "Dilip"
// }
// var obj2=Object.create(obj);
// console.log("obj2:",obj);

//  var family={
//     father:"Barku",
//     myFather(){
//       console.log(this.father)
//     }
//   }

// var son = Object.create(family)
//    console.log(son.father),
//     son.myFather(),
//     console.log('son:',son)

// var arr=[1,2,3,4,5];

// for (var i=0; i<arr.length;i++){
//   setTimeout(()=>console.log(arr[i],i),i*1000)
// }

// for(var i=0;i<arr.length;i++){
//   setTimeout(function(i){
//     return function(){
//       console.log(arr[i],i)
//     }
//   }(i),i*1000)
// }

// function display(i) {
//   setTimeout(()=>console.log(this[i],i),i*1000)
// }
// for (let i = 0; i < arr.length; i++){
//   display.call(arr,i);
// }

// const _setInterval = (callback, delay) => {
//   const timerRef = { id: null };
//   const timeout = () => {
//     timerRef.id = setTimeout(() => {
//       callback();
//       timeout();
//     }, delay);
//   }
//   timeout();
//   return timerRef;
// };

// const timerRef = _setInterval(() => {
//   console.log("Callback");
// }, 1000);

// setTimeout(() => {
//   clearTimeout(timerRef.id);
// },5000);

// let obj={
//   name: "Dilip"
// }
// var obj2=Object.create(obj);
// console.log("obj2:",obj); // all obj will returned
// console.log(obj2)


  
// arr = [0, 0, 0, 0];
// console.log(arr.filter((el) => {
//     return el
// }));

// let arr = [null, 1, 5, undefined];
// let ans = arr.reduce((el) => {
//     return el;
// });
// console.log(ans);

// func1()
// func2()

// function func1() {
//     console.log('clg1');
// }

// var func2 = function () {
//     console.log('clg2');
// }

// => clg1
// => error of func2

//  var func1= function func2 () {
//   console.log("clg2");
// };

// func1();   // clg2
// func2();   //error undefined


// var arr = [1, 2, 3, 4, 5];

// var newArr = [];
// arr.forEach( function(el, index) {
//     newArr.push(el);
//     if (index === 1) {
//         break;
//     }
// });
// console.log(arr);
// SyntaxError: Illegal break statement;

// var nums = [1, 6, 7, 8, 9];

// var out = nums.map((el, index) => {
//     return index % 2 == 0;
// });

// console.log(out);

// for (let i = 0; i < 10; i++){
    
// }
// console.log(i);

// var arr = [1, 2, 3, 4];
// var newArr = arr.map((el) => {
//     el * 4
// });
// console.log(newArr);

// const obj = {
//     a: 10,
//     b:10,
// }
// obj.c = 20;
// obj.a = 20;
// console.log(obj);

// var arr = [1, 2, 3, 4, 5]
// var newarr = arr.forEach((el) => {
//     return el * 6;
// });

// console.log(newarr);

// var c = 10;
// function sum(a, b) {
//     var c = 10;
//     return a + b + c;
// }

// console.log(sum(5,5));

// function func(params) {
//     console.log('clg1');
//     return function () {
//         console.log('clg2');
//         params();
//         return function() {
//             console.log('clg4');
//             return 'clg5'
//         }
//     }
// }
// func(function () {
//     console.log('clg3');
// })()();

// console.log(a);
// var a = 10;

// console.log(b);
// let b = 10;

// function sum()
// {
//     let a = b = 10;
//     console.log(a);
//     return a
// }
// sum();
// console.log(a);
// console.log(b);

// let a = 10;
// let b = 10;

// if (b === 10) {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);
// SyntaxError: Identifier 'a' has already been declared


// var arr = [1];
// arr.reduce((a, b) => {
//     console.log(a);
//     console.log(b);
// })

// class Car {
//   constructor(horsePower) {
//     this.horsePower = horsePower;
//     this.fuel = 100;
//   }

//   consumeFuel(amount) {
//     this.fuel -= amount;
//   }
// }
// let myCar = new Car(102);
// console.log(myCar);

// class Vehicle{
//     constructor(color,name,fuel) {
//         this.color=color;
//         this.name=name;
//         this.fuel=fuel;
//     }
// }

// class Sedan extends Vehicle{
//     constructor(color,name,fuel) {
//         super(color,name,fuel)
//     }
// }

// let mySedan = new Sedan(150, "Civic", 100);

// console.log(mySedan);

let arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++){
//     setTimeout(()=>console.log(arr[i],i),i*1000)
// }

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(
//     (function (i) {
//       return function () {
//         console.log(arr[i], i);
//       };
//     })(i),
//     i * 1000
//   );
// }

// (function() {
//   var privateVariable = 'I am private';

//   function privateFunction() {
//     console.log('This is a private function');
//   }

  
// })();
// Public API
//   Window.MyModule = {
//     publicMethod: function() {
//       console.log('This is a public method');
//     }
//   };
// // Usage
// MyModule.publicMethod();  // Outputs: This is a public method
// console.log(privateVariable);  // Throws an error, privateVariable is not accessible
// privateFunction();  // Throws an error, privateFunction is not accessible
// let moviesData=[1,2,3,4,5]
// const getMeData = new Promise((resolve, rejecte) => {
//   setTimeout(() => {
//     let data = moviesData;
//     if (data !== null) {
//       resolve(data)
//     } else {
//       rejecte('err:Server culd not find data')
//     }
//   }, 3000)
// });

// getMeData.then((success) => {
//   // display(success)
//   console.log(success);
// })
//   .catch((error)=>{
//   console.log(error.message);
// })

// function printHello(time) {
//   return new Promise((res, rej) => {
//     if (typeof time !== 'number') {
//       rej('assignment of function should be a number')
//       return
//     }
//     setTimeout(() => {
//       res({status:200})
//     },time)
//   })
// }

// printHello(2000)
//   .then(res => console.log('Printed after 2s'))
//   .catch(err=>console.log(err))

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.setCity = function (city) {
//   this.city=city
// }
// Person.prototype.setProffesssion = function (proffession) {
//   this.proffession=proffession
// }

// let p1 = new Person("Dilip", 26);
// p1.setCity("Nashik");
// p1.setProffesssion("Coder");
// console.log(p1);

class Rectangle{
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height*this.width
  }
}

let box = new Rectangle(12, 13);
console.log(box.area());