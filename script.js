let people = ['Мама', 'Мама', 'Мама', 'Мама', 'Мама', 'Мама', 'Дима', 'Дима'];
let sumPeople = Math.floor(Math.random() * people.length);
let resultPeople = people[sumPeople];
function bnt(){
    let documentReuslt = document.getElementById('result');
    let documentFunny = document.getElementById('param');
    documentReuslt.innerHTML = resultPeople;
    if(resultPeople == 'Мама'){
        documentFunny.innerHTML = 'Мама програла';
    }else if(resultPeople == 'Дима'){
        documentFunny.innerHTML = 'Дима програв';
    }
}

