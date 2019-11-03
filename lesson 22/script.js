'use strict';
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

//1) Задача состоит в следующем! Делаем GET запрос https://playwithpromise.herokuapp.com/api/order-system получаем даные в виде массива
// Создаем разметку с помощью createElement и выводим список продуктов, а именно поля productImage, productName, description!(productImage - ссылка на картинку)
let url = 'https://playwithpromise.herokuapp.com/api/order-system';
async function sendRequest(url) {
    try {
        let response = await fetch(url);

        if (response.ok) {
            let object = await response.json();
            console.log(object);

            return object;
        } else {
            throw new Error(`Service is not available right now!`)
        }
    } catch (error) {
        return error;
    }
}

let response = sendRequest(url);

async function renderProducts() {
    loader.className = 'loader';
    wrapper.append(loader);
    let dataCollection = await response;
    wrapper.removeChild(loader);
    buttonHolder.classList.add('hidden');

    if (dataCollection instanceof Error) {
        let error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = dataCollection.message;
        wrapper.appendChild(error);
        return;
    }
    for (const item of dataCollection) {
        let { productDescription: description, productImage, productName: name } = item;
        let li = document.createElement('li'),
            imgContainer = document.createElement('div'),
            productName = document.createElement('div'),
            aName = document.createElement('a'),
            productDescription = document.createElement('div'),
            productWrapper = document.createElement('div'),
            aImg = document.createElement('a'),
            img = document.createElement('img');

        img.src = productImage;
        productWrapper.classList.add('product_wrapper');
        imgContainer.classList.add('img_container');
        aImg.href = '#';
        productName.classList.add('product_name');
        aName.href = '#';
        aName.innerHTML = name;
        productDescription.classList.add('product_description');
        productDescription.innerHTML = description;
        productList.classList.add('active');

        imgContainer.append(aImg);
        aImg.append(img);
        productWrapper.append(productName);
        productName.append(aName);
        productWrapper.append(productDescription);
        li.append(imgContainer);
        li.append(productWrapper);
        productList.append(li);
    }
    productList.classList.remove('hidden');

}



let wrapper = document.createElement('div'),
    h1 = document.createElement('h1'),
    button = document.createElement('button'),
    buttonHolder = document.createElement('div'),
    productList = document.createElement('ul'),
    loader = document.createElement('div');

wrapper.id = ('wrapper');
h1.innerHTML = 'Product list';
button.classList = 'btn';
button.innerHTML = 'Show products';
buttonHolder.className = 'button_holder';
productList.classList = 'product_list hidden';;

document.body.prepend(wrapper);
wrapper.append(h1);
wrapper.append(productList);
buttonHolder.append(button);
wrapper.append(buttonHolder);
button.addEventListener('click', renderProducts);