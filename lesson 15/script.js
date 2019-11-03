'use strict';
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))
let taskNumber = 1;
console.log(`Task # ${taskNumber++}===================================================================================`);
//1) Есть функция, которая может принять неограниченное количество аргументов'-', '65', 'a', 'p', реализуйте ее так, что бы она находила дефиз и возвращала '65-a-p'
function getString(...arr) {
    let hyphen = '-';
    return arr.includes(hyphen) ? arr.filter(curr => curr !== hyphen).join(hyphen) : 'There is no hyphen in given arguments!!!';
}
console.log(getString('-', '65', 'a', 'p')); // 65-a-p
console.log(getString('75', '-', 'ad', 'hg', '543')); // 75-ad-hg-543

console.log(`Task # ${taskNumber++}===================================================================================`);
//2)  Перехватит ли catch здесь ошибку
new Promise((resolve, reject) => {
        resolve('dffsd')
    }).then((vasia) => {
        var df = dfdf; //  ошибка вот она синтаксическая!
        return 3423;
    })
    .catch((e) => console.log('fdsfd', e));

console.log('Yes:)'); //да, перехватит

// или здесь
new Promise((resolve, reject) => {
        resolve('dffsd')
    }).then((vasia) => {
        throw new Error('new errror'); // вот явно бросаем ошибку 
        return 3423;
    })
    .catch((e) => console.log('fdsfd', e));

console.log('Yes:)'); // да перехватит

console.log(`Task # ${taskNumber++}===================================================================================`);
// 3) Взял с проекта код!! Нужно всего лишь переписать на async await :) Запускать не нужно ибо не сработает), просто переписать а я посмотрю!
let uploadedImage = '_.jpg';

async function pickImage() {
    let context = imagepicker.create({
        mode: 'single'
    });
    await context.authorize();
    let selection = await context.present();
    selection.forEach(async(selected) => {
        uploadedImage = selected;
        await cropImage();
    });
}

/**
 * Takes camera photo
 */
async function takePhoto() {
    await camera.requestPermissions();
    let imageAsset = await camera.takePicture();
    uploadedImage = imageAsset;
    await cropImage();
}

/**
 * Crops picture
 */
async function cropImage() {
    let source = new imageSource.ImageSource();
    let fromAssetSourse = await source.fromAsset(this.uploadedImage);
    let args = await this.imageCropper.show(fromAssetSourse, cropOptions);
    if (args.image !== null) {
        savePictureToFile(args.image);
    }
}

/**
 * Crops picture
 */
function savePictureToFile(image) {
    const folder = fs.knownFolders.documents();
    const path = fs.path.join(folder.path, "Temp" + Date.now() + ".png");
    const saved = image.saveToFile(path, "png");
    if (saved) {
        this.currentImage = image;
        this.pictureSelected.emit(path);
    }
}

function cropOptions() {
    return isAndroid ? {
        width: 512,
        height: 512
    } : {
        lockSquare: true
    };
}

pickImage();

console.log(`Task # ${taskNumber++}===================================================================================`);
// 4) И закрепляем промисы  
// https://playwithpromise.herokuapp.com/api/order-review/last -
// вернуть строку https://playwithpromise.herokuapp.com/api/order-review/last через 3 секунды и только тогда сделать запрос по этой строке!
function request(url) {
    return new Promise((res, rej) => {
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();
        req.onload = function() {
            if (!this.responseText) {
                rej('There is some problem in response from server!!!');
            }
            res(JSON.parse(this.responseText));
        }
    });
}

function printUrl(url) {
    return new Promise(res => setTimeout(() => {
        console.log(url);
        res();
    }, 3000));
}

let url = 'https://playwithpromise.herokuapp.com/api/order-review/last';
async function callReq(url) {
    try {
        await printUrl(url);
        let response = await request(url);
        return response;
    } catch (e) {
        console.log('Error: ', e);
    }
}

callReq(url).then(console.log);

console.log(`Task # ${taskNumber++}===================================================================================`);
// 5) Ну и последнее так уже чтобы расслабиться)! Пишем свой собственный push!!
function push(array, ...elements) {
    if (Array.isArray(array)) {
        elements.forEach(curr => array[array.length] = curr);
        return array.length;
    }
    return 'First parameter is not an array!!!';
}
let arr = [1, 2, 3, 4, 5];
console.log(push(arr, 6));
console.log(arr);
console.log(push(arr, 7, 8, 9, 10));
console.log(arr);
console.log(push('arr', 7, 8, 9, 10));