import {handleCreateNewTodo} from "./modules/controller/handleCreateTodo.js";
import { toastify } from "./modules/components/toastify.js";


const submitTodoButton = document.getElementById("submit");

submitTodoButton.addEventListener("click", handleCreateNewTodo);

// const arr = ['abc','abc2','abc3'];

// localStorage.setItem('list', JSON.stringify(arr));
// console.log(localStorage.getItem('list'));
// const stringifyData = localStorage.getItem('list');
// const parsedData = JSON.parse(stringifyData);
// console.log(parsedData);

// bigInt , symbol
// const personA = {
//     name : 'ali'
// }
// personA.name = 'mammad';
// const personB = personA;
// personB.name ='reza';
// console.log(personB);
// console.log(personA);
// objects are refrence type :)

// const name = 'ali';
// const name2 = 'ali2';
// const obj = {
//     // name : name,   ❌
//     name // ✅
// };
// const obj2 = {
//     // name : name,   ❌
//     name2 // ✅
// };
// console.log({obj:obj},{obj2});

// Math
// console.log(Math.random());
// console.log(Math.floor(Math.random()*1000000000));
// const date = new Date();
// console.log(date.getTime());
// console.log(Date.now());
// const array = [100,200,300,400,500];
// const copyMap = array.map((item)=> item*2);
// console.log(copyMap);
// const copyEach = array.forEach((item)=> item*2);
// console.log(copyEach);

// const filteredItems = array.filter((item)=> item != 100);
// console.log(filteredItems);