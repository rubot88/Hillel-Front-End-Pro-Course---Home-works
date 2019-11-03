 'use strict';

 console.log('Task outputs:');
 // line with downwards arrows
 let arrows = [];
 for (let i = 0; i <= 30; i++) {
     arrows[arrows.length] = '\u21d3';
 }
 console.log(arrows.join(' '));
 let taskCounter = 1;

 let taskOutputs = [];

 function addTaskToArr(arr, item) {
     item && (arr[arr.length] = item);
 }

 // divider line
 console.log(`Task #${taskCounter++} ====================================================`);
 // Добраться до числа 43 и также добраться до 109
 const first = [4, [5, 4, 6, [5, 1, 109, 3, [2, 10, 43, 22, 32]]]];
 console.log('first [1][3][4][2] = ' + first[1][3][4][2]);
 console.log('first [1][3][2] = ' + first[1][3][2]);
 let firstStr_1 = 'first [1][3][4][2] = ' + first[1][3][4][2];
 let firstStr_2 = 'first [1][3][2] = ' + first[1][3][2];
 let firstTask = [firstStr_1, firstStr_1];
 addTaskToArr(taskOutputs, firstTask);


 console.log(`Task #${taskCounter++} ====================================================`);
 // Пробежаться через цикл for и если значение меньше 5 то перезаписать его на значение 11 
 // то есть результат должен быть [ 11, 10, 17, 11, 11 , 11 , 11 ];
 const zero = [4, 10, 17, 2, 3, 1, 0];
 for (let i = 0; i < zero.length; i++) {
     if (zero[i] < 5) {
         zero[i] = 11;
     }
 }
 console.log('zero = ' + zero);
 addTaskToArr(taskOutputs, 'zero = ' + zero);


 console.log(`Task #${taskCounter++} ====================================================`);
 // Пробежаться через цикл for и четные елементы перемножить и записать результат в odd и вывести
 // то есть перемножить в цикле 4 17 3 10 
 const multiply = [4, 10, 17, 2, 3, 1, 10];
 let odd = 1;
 for (let i = 0; i < multiply.length; i++) {
     odd = (i % 2 === 0) && (odd * multiply[i]) || odd;
 }
 console.log('Multiplied even numbers = ' + odd);
 addTaskToArr(taskOutputs, 'Multiplied even numbers = ' + odd);


 console.log(`Task #${taskCounter++} ====================================================`);
 // Вывести только нечетные числа используя цикл: 
 // - for,
 // - while 
 const second = [1, 5, 10, 4, 2, 3];
 console.log('"FOR" implementation');
 let secondTask = [];
 let secondForImpl = [];
 let secondWhileImpl = [];
 let i = 0;
 for (; i < second.length; i++) {
     if (second[i] % 2 !== 0) {
         addTaskToArr(secondForImpl, second[i])
     }
 }
 addTaskToArr(secondTask, secondForImpl);

 console.log('"WHILE" implementation');

 i = 0;
 while (i < second.length) {
     if (second[i] % 2 !== 0) {
         addTaskToArr(secondWhileImpl, second[i])
     }
     i++;
 }
 addTaskToArr(secondTask, secondWhileImpl);
 addTaskToArr(taskOutputs, secondTask);



 console.log(`Task #${taskCounter++} ====================================================`);
 // Найти минимальное значение и вывести
 const third = [10, 2, 4, 43, 5, 3, 19, 23];
 let min = third[0];
 for (let i = 1; i < third.length; i++) {
     min = min > third[i] ? third[i] : min;
 }
 console.log('Min value = ' + min);
 addTaskToArr(taskOutputs, 'Min value = ' + min);


 console.log(`Task #${taskCounter++} ====================================================`);
 // Вывести все елементы в цикле for в обратном порядке то есть 28 19 14 9 23 43 3 4
 const fourth = [4, 3, 43, 23, 9, 14, 19, 28];
 let halfLength = fourth.length / 2;
 //algorithm of reversing without using middle variable
 for (let i = 0; i < halfLength; i++) {
     fourth[i] += fourth[fourth.length - 1 - i];
     fourth[fourth.length - 1 - i] = fourth[i] - fourth[fourth.length - 1 - i];
     fourth[i] -= fourth[fourth.length - 1 - i];
 }
 console.log('Reversed array \'fourth\' = ' + fourth);
 addTaskToArr(taskOutputs, 'Reversed array \'fourth\' = ' + fourth);


 console.log(`Task #${taskCounter++} ====================================================`);
 // Найти произведение  всех елементов
 const fifth = [9, 14, 19, 28];
 let multiplied = fifth[0];
 for (let i = 1; i < fifth.length; i++) {
     multiplied *= fifth[i];
 }
 console.log('Multiplication result = ' + multiplied);
 addTaskToArr(taskOutputs, 'Multiplication result = ' + multiplied)


 console.log(`Task #${taskCounter++} ====================================================`);
 // Пройтись через цикл for и сложить все числа в массиве и вывести результат!
 const sixth = [9, 4, 19, 18];

 function getSum(arr) {
     let sum = arr[0];
     for (let i = 1; i < arr.length; i++) {
         sum += arr[i];
     }
     return sum;
 }

 console.log('Sum result = ' + getSum(sixth));
 addTaskToArr(taskOutputs, 'Sum result = ' + getSum(sixth));


 console.log(`Task #${taskCounter++} ====================================================`);
 // Пройтись через цикл for и найти среднее арифметическое все елементов
 // среднее арифметическое - это сумма всех елементов, разделенная на их количество!
 const seventh = [2, 0, 3, 29, 23, 19];
 console.log('Average result = ' + (getSum(seventh) / seventh.length).toFixed(2));

 addTaskToArr(taskOutputs, 'Average result = ' + (getSum(seventh) / seventh.length).toFixed(2));


 console.log(`Task #${taskCounter++} ====================================================`);
 // Записать в массив eighth числа от 5 до 17 через цикл:
 // - for,
 // - while 
 const eighth = [];
 console.log('"FOR" implementation');
 let j = 5;
 i = 0;
 for (; j <= 17; i++, j++) {
     eighth[i] = j;
 }
 console.log('Filled array = ' + eighth);
 console.log('"WHILE" implementation');
 j = 5;
 i = 0;
 eighth.length = 0; // reset array eighth
 while (j <= 17) {
     eighth[i++] = j++;
 }
 addTaskToArr(taskOutputs, 'Filled array = ' + eighth);

 
// ADVANCED ЗАДАНИЯ!!!! ТО ЕСТЬ НЕОБЯЗАТЕЛЬНЫЕ!!!!!!!!

 console.log(`Task #${taskCounter++} ====================================================`);
 // Отсортировать массив по возростанию! и вывести
 const ninth = [1, 2, 18, 3, 38, 41, 0];
 let tmp;
 for (let i = 0; i < ninth.length - 1; i++) {
     for (let j = i + 1; j < ninth.length; j++) {
         if (ninth[i] > ninth[j]) {
             tmp = ninth[i];
             ninth[i] = ninth[j];
             ninth[j] = tmp;
         }
     }
 }
addTaskToArr(taskOutputs, 'Sorted array = ' + ninth);

 console.log(`Task #${taskCounter++} ====================================================`);
 // Есть строкa в переменной tenth!! Нужно пройтись циклом for и записать в переменную res строку со значением 2a1f3c1b
 // так как если обратить внимание то в строке 'aafcccb' символ а идет последовательно 2 раза далее f только один символ, символ с последовательно 3 раза
 // и символ b один раз
 const tenth = 'aafcccb';
 let res = '';
 for (let i = 0; i < tenth.length;) {
     let charCounter = 1;
     for (let j = i; tenth.charAt(j) === tenth.charAt(j + 1); j++) {
         charCounter++;
     }
     res += charCounter + tenth.charAt(i);
     i += charCounter;
 }
 addTaskToArr(taskOutputs, res);

 console.log(`Task #${taskCounter++} ====================================================`);
 // ЗДЕСЬ ЕЩЕ ТЯЖЕЛЕЙ нужно подсчитать количество одинаковых символов в строке и при этом одинаковые символы не идут последовательно!!
 // то есть результат должен быть 4a3f4c
 const eleventh = 'aafcccffbaac';
 let newRes = '';
 for (let i = 0; i < eleventh.length; i++) {
     let charCounter = 1;
     if (newRes.indexOf(eleventh.charAt(i)) !== -1) {
         continue;
     }
     for (let j = i + 1; j < eleventh.length; j++) {
         (eleventh.charAt(i) === eleventh.charAt(j)) ? charCounter++ : charCounter;
     }
     newRes += charCounter + eleventh.charAt(i);

 }
 addTaskToArr(taskOutputs, newRes);


 // render outputs

 function renderOutputs() {
     taskCounter = 1;
     for (let i = 0; i < taskOutputs.length; i++) {
         let li = document.createElement('li');
         let taskNumber = document.createElement('div');
         let taskNode = document.createTextNode(`Task #${taskCounter++}`)
         let p = document.createElement('p');
         let taskResolution = document.createTextNode(taskOutputs[i]);
         taskNumber.appendChild(taskNode);
         p.appendChild(taskResolution);
         taskNumber.classList.add('title');
         li.appendChild(taskNumber);
         li.appendChild(p);
         let ul = document.getElementById('tasks');
         ul.appendChild(li);
     }
 }

 renderOutputs();