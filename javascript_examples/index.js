// it is possible to use multiple js files in the same page
// console.log('In the console!!');

// alert
// alert('AAAAAA!!!!');

// try to write something in 'Console'

// breakpoints in 'Sources'

// console.log('This is log');
// console.warn('This is warning');
// console.error('This is error');
// we use logs a lot for debugging

// how to clean the console - with a button in the inspector

// let's go to ynet and check the errors in the iinspector

// ---------------------------------------------------------

// Document Element
// document
// document.body
// document.head

// document.body.style.background = 'purple';
// it can be as a reaction to some action or dependened on other iisues

// in the console of chroe
// document.querySelector('#header').style.background = 'red';
// document.querySelector('.footer').style.background = 'blue';
// document.querySelectorAll('.footer')[1].innerHTML = "<h1> Inserted TEXT</h1>";
// document.querySelectorAll('.footer').length;
// document.querySelectorAll('.something').length;

// ASK THEM:
// - what can you do in order to get the specific element?
// document.querySelector('ul').style.background = 'purple';
// document.querySelector('li').style.background = 'red';
// document.querySelectorAll('li')[1].style.background = 'yellow';

// CREATE ELEMENTS
// document.createElement('li');
// erase all other content
// document.body.innerHTML = '<li>New Item</li>';
// document.body.innerHTML = document.createElement('li').outerHTML;

// ----------------------------------------
let li = document.querySelector('li');
let new_li = document.createElement('li');
new_li.innerHTML = 'Something Interesting';
console.log(li);
li;

// ----------------------------------------
li.attributes;
li.hasAttributes();
li.hasAttribute('id');
li.getAttribute('id');
li.getAttribute('class');
li.classList
li.classList.remove('item');
li.classList.add('done');
li.classList.add('done');
li.classList.add('done');
li.classList.add('done');
// still in the list there will be only one class done
li.classList.remove('done');
li.classList.remove('done');
li.classList.remove('done');

// next the toggle - if has - delete - if hasnt - add
li.classList.toggle('done');

// QUESTIONS???

li.className;
// the same as:
li.getAttribute('class');

// How do we get the id elemet of th li?
li.getAttribute('id');
li.setAttribute('id', 'the_first');
// li.removeAttribute('id');
li.id = 'first-first';

// innerHTML
document.body.innerHTML;
// document.body.innerHTML='Hello world';

//innerText
li.innerText = 'Usage of <h1></h1> tag';

// we can use querySelectorAll or querySelector on other elements
const ul2 = document.querySelectorAll('ul')[1];
li = ul2.querySelector('li');

ul2.childElementCount;
ul2.childNodes; // counts also new lines, and inner texts
// show in https://barakpinchovski.github.io/css-dom-visualization/ 
ul2.children; // tags
ul2.contains(li);
// including text Nodes
ul2.firstChild;
ul2.lastChild;
// without Text Nodes
ul2.firstElementChild;
ul2.lastElementChild;

// ------------------------------------
ul2.appendChild(new_li);
ul2.removeChild(new_li);
ul2.replaceChild(new_li, li);
ul2.replaceChild(li, new_li);

// What we have to do in order to add a new hobby?
new_li = document.createElement('li');
new_li.innerHTML = 'Coding';
ul2.appendChild(new_li);

// remove first child?
// ul2.removeChild(ul2.firstElementChild);

// -------------------------------------
li.nextElementSibling
new_li.previousElementSibling
li.parentElement

// document.querySelector('.hidden').style.display = 'block';

// -------------------------------------
const a = "a";
a;
// a = "b";
// cosnt a = "b";
// const pi = 3.14;
let name = "Ariel";
name = "Yosi";
// let name = "eee"
let b;
typeof(b);
b = 3;
typeof(b);
b = 'str';
typeof(b);
b = document.querySelector('h1');
typeof(b);

b++;
// c--;

4%2;
4%3;

b += 10;
b *= 2;

"12" * b;
"12" + b;

// only value -> ==
// value AND type -> ===
1 == "1";
1 === "1";
1 != "1";
1 !== "1";

// ------------------ STRING
// https://www.w3schools.com/jsref/jsref_obj_string.asp
name = 'Bar Koen';
name.toLowerCase()
name.startsWith("bar")
name.toLowerCase().startsWith("bar")
name.split(" ")
name.includes("Ko");
b = 100;
c = 2020
// let my_name = "Arseni";
// let my_name = 'Arseni';
let my_name = `(${c}) Arseni
                Pertzovsky's ${b} dollars 
`;
// Benefits of -> ``
// 1 - multiple lines
// 2 - you can use ' and " signs freely
// 3 - use variables inside the string
console.log(my_name);

// ----------------------------------
// let x = alert('ALERT!!!!');
// console.log(x);
// x = confirm(`Question?`);
// console.log(x);
// x = prompt('Prompt');
// console.log(x);

function sayHello(a, b='Hi', c="World"){
    // console.log(`a is ${a}, b is ${b}, c is ${c}`)
    return `a is ${a}, b is ${b}, c is ${c}`;
}

console.log(sayHello('aaa','bbb','ccccc'));

// also runs:
sayHello('yes');

// function whatsPi(){
//     return 3.14;
// }

// const pi = whatsPi;
// what we need to print 3.14 with the help of variable pi?
// console.log(pi());

// const back = function(num){return num}
const back = num => {return num};
console.log(back(20));

const pi = () => `The pi number${3.14}`;
console.log(pi());

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

function printFunc(curr_func){
    console.log(curr_func())
}

printFunc(() => `Hello World`);

// Number / toString
let num = '5';
Number(num);
// boolean
Boolean('true');
Boolean('false');
Boolean(3);
Boolean('');
// if statement uses this function
if (3 > 5){

}else if ('bla'){

}else if (Nan) {

} else {

}

console.log(3 < 5 ? 'true!': 'false!');

// How to rewrite this function?
function fact(n){
    if (n <= 1){
        return 1;
    }
    return n*fact(n-1);
}

// Answer:
const alt_fact = n => n <= 1 ? 1: n*alt_fact(n-1);
console.log(fact(7));
console.log(alt_fact(7));

// Switch case 
let n = 2;
switch (Number(n)){
    case 1:
        console.log('in 1');
        break;
    case 2:
        console.log('in 2');
        break;
    default:
        console.log('in default');
        break;
}

// array
[];
let curr_array = [];
curr_array.length;
curr_array.push('a'); // to the end
curr_array.push(12);
curr_array.unshift(30); // to the beggining
curr_array.unshift(undefined);
curr_array[5] = (str) => console.log(`This is ${str}`);
curr_array[4];
curr_array[5]('Arseni');
let other_array = [1,2,'2',true];

// list of all methods:
Array.prototype;

// ---------------------------------------------
// OBJECTS
const my_obj = {
    firstname: 'Arseni',
    lastname: 'Perchik',
    getName: function() {return `${this.firstname} ${this.lastname}!`;},
    vehicles: {
        cars: [`Toyota`],
        motors: [`123-ABC`]
    }
};
my_obj['age'] = 120;
my_obj['getAge'] = function() {return `my age is ${this.age}`; } 
my_obj['hobbies'] = ['Painting', "Coding"];
//
Object.keys(my_obj);
delete my_obj.hobbies;

// How can I bring the name of the vahicle?
my_obj.vehicles.cars[0];

// ---------------------------------------------
Math.E;
Math.PI;
Math.floor(3.8);
Math.ceil(3.8);
Math.round(3.8);
Math.random();
Math;
Infinity;
NaN;

// ---------------------------------------------
let d = new Date();
d.getDay()
d.getHours();
d.getMinutes();

// lets add Date to a placeholder of clock???
// let w = document.querySelector('#clock');
// w.innerHTML = `You entered at ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

// ---------------------------------------------
function showClock(){
    let w = document.querySelector('#clock');
    const date = new Date();
    w.innerHTML = `You entered at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// const int1 = setInterval(showClock, 1000);

// 
// How to stop the clock after 10 seconds?
//-- OR
// setTimeout(() => clearInterval(int1),10000);
//-- OR
// cli = () => clearInterval(int1);
// setTimeout(cli,10000);

// ---------------------------------------------

const curr_list = document.querySelectorAll('li');
// for(let i = 0; i < curr_list.length; i++){
//     if (i%2 == 0){
//         curr_list[i].classList.add('complete');
//     }
// }

// for(let i in curr_list){
//     if (i%2 == 0){
//         console.log(i);
//         curr_list[i].classList.add('colored');
//     }
// }

// for(let i of curr_list){
//     i.classList.add('colored');
// }

// -----------------------------------------
// EVENTS

// function startClock(){
//     const int1 = setInterval(showClock, 1000);
// }

// How to stop the clock??
let int1 = undefined;

function startClock(){
    int1 = setInterval(showClock, 1000);
}

function stopClock(){
    
    if(int1){
        // console.log('Here');
        int1 = clearInterval(int1);

    }
}

// --------------------------------
let i = 1;
const input  = document.querySelector('input');
const ol = document.querySelector('#todo-list');
function addItem(){
    if(input.value.trim()){
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <input id="item${i}" type="checkbox" onclick = "toggleDone(this)"/>
                <label for="item${i}">
                    <span>${input.value}</span>
                </label>
                <button onclick='deleteItem(this)'>x</button>
            </div>
        `;
        ol.appendChild(li);
        i++;
        // li.onclick = toggleDone;
    }
    input.value = '';

}

function toggleDone(obj){
    console.log(obj.parentElement.querySelector('span'));
    obj.parentElement.querySelector('span').classList.toggle('done');
}

function deleteItem(obj){
    let curr_li = obj.parentElement.parentElement;
    let delete_item = confirm('Delete this item?');
    if (delete_item){
        curr_li.parentElement.removeChild(curr_li);
    }
    // console.log();
}

// insert: <div onclick="document.querySelector('body').innerHTML = '';">click here</div>








