const captFullName = document.getElementById('name');
const captSubmit = document.getElementById('submit');
const form = document.querySelectorAll('input');
const textArea = document.querySelector('textarea')
const reset = document.getElementById('reset');

captSubmit.disabled = true;

captFullName.addEventListener('keyup', () => {
    if(captFullName.value.length > 10){
        captSubmit.disabled = false;
    } else {
        captSubmit.disabled = true;
    }
})

captSubmit.addEventListener('click', (event) => {
event.preventDefault()
})

// reset.addEventListener('click', (event) => {
//     // event.preventDefault()
//     for(let i of form){
    
//     }
// })


console.log(form.childNodes);

// if(fullName.value === 0){
// alert ('foi')
// }