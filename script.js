// инициализация массива из Именами
let people = ['Мама', 'Дима', 'Мама', 'Дима', 'Мама', 'Дима', 'Дима', 'Мама'];
// инициализация счётчиков
let counterDima = 0;
let counterMom = 0;
// функция главной Кнопки Узнать Результат
function bnt(){
    let sumPeople = Math.round(Math.random() * people.length); // Рандомный элемент из массива
    let resultPeople = people[sumPeople]; // результат вычесления записывается в переменную
    // получения элементов ДОМа
    let documentReuslt = document.getElementById('result');
    let documentFunny = document.getElementById('param');
    // запись в ДОМ результат случайного вычесления того кто будет мыть посуду
    documentReuslt.innerHTML = resultPeople;
    // Добавления элемента Диссаблед, который больше не позволит дублировать элементы
    let btnPlay = document.getElementById('btnPlay');
    btnPlay.getAttribute('disabled');
    btnPlay.disabled = true;
    //условные операторы если выипало определенное значение
    if(resultPeople == 'Мама'){
        // запись на страницу результата
        documentFunny.innerHTML = 'Мама програла';
        // создание кнопки если человек не хочет мыть посуду
        let myButton = document.createElement('button');
        let myText = document.createTextNode('я не хочу мити посуд');
        myButton.appendChild(myText);
        document.body.appendChild(myButton);
        myButton.addEventListener('click', image); // добавления события Клик и вызов функции добавления картинки
        myButton.classList.add('active');  // добавления класса для изменения стилей
            


    }else if(resultPeople == 'Дима'){
        documentFunny.innerHTML = 'Дима програв';
        let myButton = document.createElement('button');
        let myText = document.createTextNode('я не хочу мити посуд');
        myButton.appendChild(myText);
        document.body.appendChild(myButton);
        myButton.addEventListener('click', image);
        myButton.classList.add('active');
        

    }else if(resultPeople == undefined){
        documentReuslt.innerHTML = 'Сторінка оновиться, вийшов збій';
        location.reload(); // перезагрузка страницы
    }
}
function image(){
    let imgFamily = document.createElement('img');
    imgFamily.src = 'image/photo.png';
    document.querySelector('.container').appendChild(imgFamily);
    let fatherTrue = document.getElementById('h3');
    fatherTrue.innerHTML = "А так?";
}
function btnMother(){
    let resultFunction = document.getElementById('h4');
    let resultFunctionDima = document.getElementById('h5');
    resultFunction.innerHTML = `Шанс мами збільшено на: ${++counterMom}`
    resultFunctionDima.innerHTML = `Шанс Діми збільшено на: ${--counterDima}`
    if(counterDima === -1){
        ++counterDima;
        counterDima = 0;
        resultFunctionDima.innerHTML = `Шанс мами збільшено на: ${counterDima}`
        
    }
    people.push('Дима');
    console.log(people);
}
function btnDima(){
    let resultFunctionMom = document.getElementById('h4');
    let resultFunction = document.getElementById('h5');
    resultFunction.innerHTML = `Шанс Діми збільшено на: ${++counterDima}`
    resultFunctionMom.innerHTML = `Шанс мами збільшено на: ${--counterMom}`
    if(counterMom == -1){
        ++counterMom;
        counterMom = 0;
        resultFunctionMom.innerHTML = `Шанс мами збільшено на: ${counterMom}`
        
    }
    people.push('Мама');
    console.log(people);
}
