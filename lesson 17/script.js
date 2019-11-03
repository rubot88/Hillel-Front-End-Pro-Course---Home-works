'use strict';
let taskNumber = 1;

// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))
console.log(`Task # ${taskNumber++}===================================================================================`);
//1) Есть две функции конструктор! Нужно c помощью prototype сделать second родителем first!
function A(name) {
    this.name = name;
}

function B(lastName) {
    this.lastName = lastName;
}
const second = new B('Shakhov');
A.prototype = second;
const first = new A('Sergei');

console.log('Parent of First: ', first.__proto__);

console.log(`Task # ${taskNumber++}===================================================================================`);
//2) Создать класс функция конструктор которого принимает два параметра position, salary, 
// также создать одно private поле positions = ['software developer', 'hr manager', 'project manager'], getter(get функция)!
// которая смотрит на поле positions, и если в position есть одно из перечисленных то возвращает true иначе false
class Employee {
    constructor(position, salary) {
        this.position = position;
        this.salary = salary;
    }
    #positions = ['software developer', 'hr manager', 'project manager'];
    get checkPos() {
        return this.#positions.includes(this.position);
    }

}

const developer = new Employee('software developer', "1500$");
const geocoder = new Employee('geocoder', "400$");
console.log('Positions includes position "developer": ', developer.checkPos);
console.log('Positions includes position "geocoder": ', geocoder.checkPos);

console.log(`Task # ${taskNumber++}===================================================================================`);
//3) Есть класс App! Добавить две функции одна из них устанавливает product(создает поле product обьект с полем name, price), вторая функция получает price 
// и одно статическое свойство yearOfIssue
class App {

    constructor(date) {
        this.date = date;
    };
    set product([name, price]) {
        this._product = {
            name,
            price
        }
    }
    get product() {
        return `${this._product.name}: ${this._product.price}`;
    }
    static yearOfIssue(app) {
        return app.date.getFullYear();
    }
}
const firstApp = new App(new Date(2015, 4, 10));
const secondApp = new App(new Date(2018, 10, 18));
const thirdApp = new App(new Date());

firstApp.product = ['chrome', 1500];
secondApp.product = ['IE', 750];
console.log(`Product price of firstApp - ${firstApp.product}`);
console.log(`Product price of secondApp - ${secondApp.product}`);

console.log('Year of issue firstApp: ', App.yearOfIssue(firstApp));
console.log('Year of issue secondApp: ', App.yearOfIssue(secondApp));
console.log('Year of issue thirdApp: ', App.yearOfIssue(thirdApp));

console.log(`Task # ${taskNumber++}===================================================================================`);
// 4) Пишем свой split и join))!

function split(str, separator, limit = -1) {
    let arr = [],
        tempstr = '';;
    if (!str.includes(separator)) {
        arr.push(str);
        return arr;
    } else if (separator === '') {
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i]);
        }
        return arr;
    }
    for (let i = 0; i < str.length;) {
        if (str.startsWith(separator, i) && tempstr) {
            arr.push(tempstr);
            tempstr = '';
            i += separator.length;
        } else if (i === str.length - 1) {
            tempstr += str[i];
            arr.push(tempstr);
            i++
        } else {
            tempstr += str[i];
            i++;
        }

    }
    limit = limit > arr.length ? arr.length : limit;
    return limit > -1 ? (arr.length = limit, arr) : arr;
}

let strForSplit = 'Any string instead of a number';
console.log(`String for split: "${strForSplit}"`);
console.log('Splited string test 1: ', split(strForSplit));
console.log('Splited string test 2: ', split(strForSplit, ''));
console.log('Splited string test 3: ', split(strForSplit, ' ', 2));
console.log('Splited string test 4: ', split(strForSplit, ' ', 500));
console.log('Splited string test 5: ', split(strForSplit, ' ', -100500));

function join(array, separator = ',') {
    let str = '',
        modArr = array.map(el => el === undefined || el === null ? '' : el);
    separator = String(separator);

    for (let i = 0; i < modArr.length; i++) {
        if (i === modArr.length - 1) {
            str += modArr[i];
        } else {
            str += modArr[i] + separator
        }
    }
    return str;

}

let arrForJoin = [1, 2, 3, 4, 5, null, 'save', undefined, true];
console.log('Array for join:', arrForJoin);
console.log('Joined array test 1: ', join(arrForJoin));
console.log('Joined array test 2: ', join(arrForJoin, []));
console.log('Joined array test 3: ', join(arrForJoin, ' - '));

console.log(`Task # ${taskNumber++}===================================================================================`);
// 5) Ну и на последок перепишем класс в вид самовыз функция которая возвращает функцию-конструктор
// class NewApp {
//     constructor(object) {
//         this.object = object;
//     }
//     getObject() {
//         return object;
//     }
// }

let NewApp = (function () {
    function NewApp(object) {
        this.object = object;
    }
    NewApp.prototype.getObject = function () {
        return this.object;
    }
    return NewApp;
}
)();

const app = new NewApp({ AppName: 'chrome' });
console.log('Get object:', app.getObject());
