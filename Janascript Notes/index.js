
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

let obj={
  name: "Dilip"
}
var obj2=Object.create(obj);
console.log("obj2:",obj); // all obj will returned
// console.log(obj2)


  
