// 1) есть форма  Нужно отправить ее на сервер которые вы сами напишите! Сервер принимает обьект c полями name, lastName и возвращает строку fullname которую положить в localStorage

let container = document.getElementById('resp_container'),
    button = document.getElementById('btn-send'),
    url = new URL('http://localhost:3000/post');

button.addEventListener('click', (ev) => {
    ev.preventDefault();
    localStorage.clear();
    container.innerHTML = '<p class="title_result">local storage:</p>';
    const getForm = document.getElementById('add-user')
    const form = new FormData(getForm);
    let formData = Object.fromEntries(new Map(form));
    (async function (url, obj) {
        let response = await sendPost(url, obj);
        if (response instanceof Error) {
            renderError(container, response.message);
        }
        setLocalStorage(response);
        renderObject(container, localStorage);
    })(url, formData);
}, false);

async function sendPost(url, obj) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Content-Type': 'text/plain;charset=UTF-8'
            },
            body: JSON.stringify(obj)
        });
        if (response.ok) {
            let object = await response.json();
            return object;
        } else {
            throw new Error(`Error status - ${response.status}, ${response.statusText}`)
        }
    } catch (e) {
        return e;
    }
}

async function setLocalStorage(data) {
    for (const key in data) {
        localStorage.setItem(key, data[key]);
    }
}

function renderObject(where, data) {
    for (const key in data) {
        if (!data.hasOwnProperty(key)) {
            continue;
        }
        let p = document.createElement('p');
        p.innerHTML = `<span class='key'>${key}: </span><span class='value'>${data[key]}</span>`;
        where.append(p);
    }
}

function renderError(where, message) {
    let p = document.createElement('p');
    p.classList.add('error');
    p.innerHTML = message;
    where.append(p);
}




