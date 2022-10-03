function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// ============================== variáveis globais
const captureUl = document.querySelector('#days');
const captBtn = document.querySelector('.buttons-container');
const captHolyDay = document.querySelector('.holiday');


// =========================== funções
function makeDays(n) {

    for (let i = 0; i < n.length; i += 1) {
        let createLi = document.createElement('li');
        createLi.innerHTML = n[i];
        createLi.className = 'day'
        if (n[i] === 24 || n[i] === 25 || n[i] === 31) {
            createLi.className += ' holiday';
        }
        if(n[i] === 4 || n[i] === 11 || n[i] === 18 || n[i] === 25){
            createLi.className += ' friday';
        }
        captureUl.appendChild(createLi);

    }
}
makeDays([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);


function btn() {
    let createBtn = document.createElement('button');
    createBtn.innerHTML = 'Feriados';
    createBtn.id = 'btn-holiday';
    captBtn.appendChild(createBtn);
}
btn();

const captBtnHolyDay = document.querySelector('#btn-holiday');
captBtnHolyDay.addEventListener('click', sad)

function sad() {
    let l = document.querySelectorAll('.holiday')
    let color = 'red';

    if(l[0].style.backgroundColor === 'red'){
        color = '';
    } else {
        color = 'red';
    }
    for(let i = 0; i < 3; i += 1){
    l[i].style.backgroundColor = color
}
}

function fridayBtn() {
    let createBtnFriday = document.createElement('button');
    createBtnFriday.innerHTML = 'Sexta-feira';
    createBtnFriday.id = 'btn-friday';
    captBtn.appendChild(createBtnFriday);
    
}
fridayBtn()

const captBtnFriday = document.querySelector('#btn-friday');
captBtnFriday.addEventListener('click', fridayColor)

function fridayColor() {
    let friday = document.querySelectorAll('.friday');
    let fri =  ''

    if(friday[0].innerHTML === 'sextou!'){
        fri = [4, 11, 18, 25]
        for(let i = 0; i < friday.length; i += 1){
            friday[i].innerHTML = fri[i]
        }   
    } else{
        fri = 'sextou!'
        for(let i = 0; i < friday.length; i += 1){
            friday[i].innerHTML = fri
        }   
    }
}   


//================================= função chamada






