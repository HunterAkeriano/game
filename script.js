let people = ['Мама', 'Мама', 'Мама', 'Мама', 'Мама', 'Мама', 'Дима', 'Дима'];
let sumPeople = Math.floor(Math.random() * people.length);
let resultPeople = people[sumPeople];
function bnt(){
    let documentReuslt = document.getElementById('result');
    let documentFunny = document.getElementById('param');
    documentReuslt.innerHTML = resultPeople;
    if(resultPeople == 'Мама'){
        documentFunny.innerHTML = 'Мама програла';
        let myButton = document.createElement('button');
        let myText = document.createTextNode('я не хочу мити посуд');
        myButton.appendChild(myText);
        document.body.appendChild(myButton);
        myButton.addEventListener('click', image);
       


    }else if(resultPeople == 'Дима'){
        documentFunny.innerHTML = 'Дима програв';
        let myButton = document.createElement('button');
        let myText = document.createTextNode('я не хочу мити посуд');
        myButton.appendChild(myText);
        document.body.appendChild(myButton);
        myButton.addEventListener('click', image);
    }
}
function image(){
    let imgFamily = document.createElement('img');
    imgFamily.src = 'image/photo.png';
    document.querySelector('.container').appendChild(imgFamily);
    let fatherTrue = document.getElementById('h3');
    fatherTrue.innerHTML = "А так?";
}
