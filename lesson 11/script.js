'use strict';
let taskNumber = 1;

// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))
console.log(`Task # ${taskNumber++}===================================================================================`);

//1) Есть функция a! Пояснить почему при вызове функции b возьмется k из функции b! Ну и предложить решение чтобы брать k которое выше!
function a(arg) {
    let k = 10;

    function b() {
        let k = 20;
        return k;
    }
    const res = b() + arg;
    return res;
}
console.log(`
Интерпритатор пытается найти переменную k в текущем лексическом окружении функции b.
И поскольку переменная k обьявлена и проинициализированна внутри функции b (let k = 20), то
то именно она и возмется.
Для того чтобы брать k которое выше, в функции b, нужно убрать директиву let из выражения let k = 20.
В этом случае, интерпритатор не найдейт переменную k в функции b и 'пойдет' искать ее во внешнем лексическом окружении (в функции a). 
`);


console.log(`Task # ${taskNumber++}===================================================================================`);
//2) Написать функцию которая принимает параметр num и вовращает новую функцию которая тоже принимет один параметр возвращает произведение!
// то num нужно замкнуть! 
function a(num) {
    return function(num1) {
        return num * num1;
    }
}
var res = a(5);
console.log(res(10)); // 50

console.log(`Task # ${taskNumber++}===================================================================================`);
// 3) Есть функция counter!Пояснить почему res, res1 берут разные i с замыкания!
function counter() {
    var i = 1;

    return function() { // (**)
        return i++;
    };
}
var res = counter();
res();
res();
const res1 = counter();
res1();
res1();

console.log(`
При каждом запуске counter(), создается новое лексическое окружение, каждое со своим собственным счетчиком i.
Поэтому res и res1 независимы и берут собственные i из замыкания. 
`);

console.log(`Task # ${taskNumber++}===================================================================================`);
//4) Есть функция с которую мы разбирали! Нужно переопредлить toString f чтобы не обращатся к свойству k, а после нажатия enter выводило результат!
function c(num) {
    f.k = 0;

    function f(num1) {
        f.k += f.k ? num : num + num1;
        return f;
    }
    f.toString = function() {
        return this.k;
    }
    return f;
}
c(5)(6)(1).k; // таким образом мы получали k которое хранит сумму!!
console.log(`${c(5)(6)(5)}`); // нужно чтобы в консоле показало не тело функции а результат то есть ну/но переопределить toString

console.log(`Task # ${taskNumber++}===================================================================================`);
// 5) Разомнем мозги пишем собственный reduce! 
function reduce(array, f, initial) {
    let i = 0,
        acc = initial ? initial : ((i = 1), array[0]);
    for (; i < array.length; i++) {
        acc = f(acc, array[i], i, array);
    };
    return acc;

}
console.log(reduce([5, 2, 5, 1, 6, 3, 6], (prev, curr) => prev + curr));

console.log(`Task # ${taskNumber++}===================================================================================`);
// 6) Взял задачу с нета! Обьяснить почему первая выведет 10, а 2 остальные 0!
/*1)*/
function arrOfFunctions() {

    var functions = [];

    for (var i = 0; i < 10; i++) {
        var f = function() { // функция-стрелок
            console.log(i); // выводит свой номер
        };
        functions.push(f);
    }

    return functions;
}

var res = arrOfFunctions();

res[0](); // стрелок выводит 10, а должен 0

console.log(`
В функции f, отсутствует переменная i, поэтому она берется из внешнего лексического окружения.
В момент вызова функции f (res[0]()), цикл for уже завершился, и значение переменной i уже стало 10,
и именно это значание доступно из замыкания.
Так все вызовы всех сохраненных в масиве функций, будут выводить 10, а не соответствующие номера.
`);

/*2*/
function arrOfFunctions() {

    var functions = [];

    for (var i = 0; i < 10; i++) {
        (function(i) {
            var f = function() {
                console.log(i);
            };
            functions.push(f);
        })(i);
    }

    return functions;
}

var res = arrOfFunctions();
res[0]();



/*3*/
function arrOfFunctions() {

    var functions = [];

    for (let i = 0; i < 10; i++) {
        var f = function() {
            console.log(i);
        };
        functions.push(f);
    }

    return functions;
}

var res = arrOfFunctions();

res[0]();