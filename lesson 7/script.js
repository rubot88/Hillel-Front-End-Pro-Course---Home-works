'use strict';
let taskNumber = 1;
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

//1) Создать обьект car со следующими свойствами model - 'Mercedes', price - '60000', type - 'sedan', year - 2019, quantity - 4 
// Написать функцию которая будет принимать обьект вычитать 2 с поля quantity и возвращать price*quantity !!!
console.log(`Task # ${taskNumber++}===================================================================================`);

const car = {
    model: 'Merssedes',
    price: '6000',
    type: 'sedan',
    year: 2019,
    quantity: 4
}

function getPrice(obj) {
    obj.quantity -= 2;
    return obj.price * obj.quantity;
}

console.log(`Car price: ${getPrice(car)}`);

// 2) Написать функцию которая принимает обьект bicycle с полями model: 'CORSO 26', price: 10000,
// и возвращает новый обьект который содержит свойства обьекта bicycle и свойство bought: true
console.log(`Task # ${taskNumber++}===================================================================================`);

function getBicycle(bicycle) {
    return {
        ...bicycle,
        bougth: true
    }
}

const bicycle = {
    model: 'CORSO 26',
    price: 1000
}

const newBicycle = getBicycle(bicycle);

console.log('New Bicycle Object: ', newBicycle);

//3) Дан обьект! Избавиться от вложености то есть поднять верх поля component children а content убрать!
console.log(`Task # ${taskNumber++}===================================================================================`);

const impScreen = {
    name: "Impressum",
    uuid: "0cc57361-9c7d-4f08-a6d9-c254f3516e7d",
    content: {
        component: "page",
        children: [{
                type: "rich_text",
                data: {
                    _uid: "f6c0525c-7b90-4b64-8166-de0524f53aec",
                    content: "*Hello*, this is the **first** text!\n\nThis is a [link](https://google.com)",
                    customClass: ""
                }
            },
            {
                type: "info_text",
                data: {
                    _uid: "3fb42198-07d4-4820-90f5-08afe01b47c1",
                    content: "Und hier kommt noch ein Absatz für Christian!",
                    customClass: ""
                }
            },
            {
                type: "rich_text",
                data: {
                    _uid: "3fb42198-07d4-4820-90f5-08afe01b47c1",
                    content: "Absatz für Christian!",
                    customClass: ""
                }
            },
            {
                type: "image",
                data: {
                    _uid: "3fb42198-07d4-4820-90f5-08afe01b47c1",
                    content: "Christian!",
                    customClass: ""
                }
            }
        ]
    }
};

// current object modification
function parseContent(obj) {
    obj.component = obj.content.component;
    obj.children = obj.content.children;
    delete obj.content;
}

// new object create using destruction

function parseContentDestr({ name, uuid, content }) {
    return {
        name,
        uuid,
        ...content
    }
}

const newImpScreen = parseContentDestr(impScreen);
parseContent(impScreen);
console.log('Modificated impScreen: ', impScreen);
console.log('Distructed impScreen: ', newImpScreen);


// 4) Есть обьект! засунуть name, content в отдельные переменные с помощью деструктуризации
console.log(`Task # ${taskNumber++}===================================================================================`);

const obj = {
    name: "Impressum",
    uuid: "0cc57361-9c7d-4f08-a6d9-c254f3516e7d",
    content: {
        component: "page"
    }
};

let { name, content } = obj;
console.log(`Name: ${name}`);
console.log('Content: ', content);

// 5)  Используя  обьект который лежит в переменной impScreen выше отфильтровать массив в поле children по полю type
// чтобы остались только те у которых значение rich_text
console.log(`Task # ${taskNumber++}===================================================================================`);

function filterChildren(obj) {
    obj.children = obj.children.filter(el => el.type === 'rich_text');
}
filterChildren(impScreen);
console.log('Filtered impScreen: ', impScreen);

// 6) Записать в новую переменную только те обьекты у которых gender - m и age > 18
console.log(`Task # ${taskNumber++}===================================================================================`);

const dataExample = [{
    name: 'John Doe',
    gender: 'm',
    age: 27,
}, {
    name: 'Harvey Cox',
    gender: 'm',
    age: 16,
}, {
    name: 'Nathan Dixon',
    gender: 'm',
    age: 23,
}, {
    name: 'Lily Wyatt',
    gender: 'f',
    age: 28,
}, {
    name: 'Morgan Lawson',
    gender: 'm',
    age: 50,
}, {
    name: 'Lilly Blackburn',
    gender: 'f',
    age: 41,
}, {
    name: 'Kate Sanderson',
    gender: 'f',
    age: 62,
}, {
    name: 'Reece Howard',
    gender: 'm',
    age: 31,
}, {
    name: 'Adam Doherty',
    gender: 'm',
    age: 52,
}, {
    name: 'Eloise Wallace',
    gender: 'f',
    age: 24,
}, {
    name: 'Luke Nolan',
    gender: 'm',
    age: 69,
}];

const newDataExample = dataExample.filter(el => (el.gender === 'm') && (el.age > 18));

console.log('New filtered object: ' ,newDataExample);

//7 Написать функцию которая принимает только поля gender, age обьекта person!!
console.log(`Task # ${taskNumber++}===================================================================================`);

const person = {
    name: 'Vasia',
    gender: 'male',
    lastName: 'Borisenko',
    age: 23
};

function getPerson({ gender, age }) {
    return {
        isStudent: true,
        gender,
        age
    }
}
const newPerson = getPerson(person);
console.log('New object: ' ,newPerson);

//8 Написать функцию которая принимает только два первых значения массива array (использовать деструктуризацию)
console.log(`Task # ${taskNumber++}===================================================================================`);

function getPersonArr([first, second]) {
    return first > second;
}
const array = [10, 34, 54, 23];
console.log(`Result: ${getPersonArr(array)}`);