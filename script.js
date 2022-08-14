let people = ['Мама', 'Дима', 'Мама', 'Дима', 'Мама', 'Дима', 'Дима', 'Мама'];
let counterDima = 0;
let counterMom = 0;
function bnt(){
    let sumPeople = Math.round(Math.random() * people.length);
    let resultPeople = people[sumPeople];
    let documentReuslt = document.getElementById('result');
    let documentFunny = document.getElementById('param');
    documentReuslt.innerHTML = resultPeople;
    let btnPlay = document.getElementById('btnPlay');
    btnPlay.getAttribute('disabled');
    btnPlay.disabled = true;
    if(resultPeople == 'Мама'){
        documentFunny.innerHTML = 'Мама програла';
        let myButton = document.createElement('button');
        let myText = document.createTextNode('я не хочу мити посуд');
        myButton.appendChild(myText);
        document.body.appendChild(myButton);
        myButton.addEventListener('click', image);
        myButton.classList.add('active');  
            


    }else if(resultPeople == 'Дима'){
        documentFunny.innerHTML = 'Дима програв';
        let myButton = document.createElement('button');
        let myText = document.createTextNode('я не хочу мити посуд');
        myButton.appendChild(myText);
        document.body.appendChild(myButton);
        myButton.addEventListener('click', image);
        myButton.classList.add('active');
        

    }else if(resultPeople == undefined){
        documentReuslt.innerHTML = 'Обнови сторінку, щось пішло не за планом';
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
    resultFunction.innerHTML = `Шанс мами збыльшено на: ${++counterMom}`
    people.push('Дима');
    console.log(people);
}
function btnDima(){
    let resultFunction = document.getElementById('h5');
    resultFunction.innerHTML = `Шанс Діми збыльшено на: ${++counterDima}`
    people.push('Мама');
    console.log(people);
}
