let limitsElements = document.querySelectorAll('.limit');
let challengeField = document.querySelector('.challenge');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let Card = (text) => {
    let el = document.createElement('p');
    el.innerText = text;
    return el;
}

limitsElements.forEach((limit, index)=> {
    
    let wrapper = document.createDocumentFragment();
    limits[index].forEach(element => {
        wrapper.appendChild(Card(element));
    });
    limit.appendChild(wrapper);
});

let submitButton = document.querySelector('button');

submitButton.onclick = (e) => {
    e.preventDefault();
    let challenge = limits.map(limit => limit[getRandomInt(limit.length)]).join(' ');

    challengeField.innerText = challenge;
}