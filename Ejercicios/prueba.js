// for(i=1; i<=100; i++){
//   if(i%2!=0){
//     continue;
//   }
//   console.log(i)
// }

// function login() {
//   console.log("Hola Mundo!");
// }
// login()

// function double (num) {
//   console.log(num*2);
// }

// function divide(x,y){
//   return x/y;
// }

// divide(6,3);

// x = 6/3

// console.log(x)

// function letItBe() {
//   let v = 2;
//   if (true) {
//     let v = 4;
//     console.log(v);
//   }
//   console.log(v);
// }
// letItBe();

// const

// for (let ch of "SoloLearning") {
//   console.log(ch)
// }
// const obj1 = {
//   a: 0,
//   b: 2,
//   c: 4
// };
// const obj2 = Object.assign({c: 5, d: 6}, obj1);
// console.log(obj2.c, obj2.d);

// let names = ['John', 'Fred', 'Ann'];
// let [Ann, Fred, John] = names;
// console.log(John);
// const obj = {one: 1, two: 2};
// let {one:first, two:second} = obj;
// console.log(one);

// function magic(...nums) {
//   let sum = 0;
//   nums.filter(n => n % 2 == 0).map(el => sum+= el);
//   return sum;
// }
// console.log(magic(1, 2, 3, 4, 5, 6));

// let nums = [3, 4, 5];
// let all = [1, 2, ...nums, 6];
// console.log(all[3]);

// const map = new Map();
// map.set('one', 1);
// map.set('2', 'two');
// if (map.has('two')) {
//   console.log('two');
// } else {
//   console.log(map.get('one'));
// }

// const arr = ['3', '5', '8'];
// console.log(
//   arr.find(x => x == 8).repeat(2)
// );

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1, 6];
// const func = (...rest) => {
//   console.log(rest.length);
// }
// func(...arr1);
// func(...arr2);

// const square = num => num * num;
// console.log(square(6) + 6);

var hoy = new Date();

console.log(hoy);
