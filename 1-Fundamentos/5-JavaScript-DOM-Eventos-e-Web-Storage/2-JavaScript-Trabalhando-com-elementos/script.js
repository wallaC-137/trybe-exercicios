// document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'blue'

// document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = 'Escrevi pelo vscode'

// document.getElementById('pai').firstElementChild

// document.getElementById('elementoOndeVoceEsta').previousElementSibling

// document.getElementById('elementoOndeVoceEsta').nextSibling

// document.getElementById('elementoOndeVoceEsta').nextElementSibling

// document.getElementById('pai').children


// ==================================================
// function criarSec() {
//     let conteudoSec = 'Este é o filho criado'

//     let aPartirDeOndeVaiSerCriado = document.getElementById('elementoOndeVoceEsta').parentElement;

//     let CriaATag = document.createElement('section');

//     CriaATag.innerText = conteudoSec;

//     aPartirDeOndeVaiSerCriado.appendChild(CriaATag)
// }
// criarSec()

// function filhoDoFilho() {
//     let n2 = 'este conteudo é do filho do filho';
//     let n1 = document.getElementById('elementoOndeVoceEsta');
//     let n3 = document.createElement('section');

//     n3.innerHTML = n2;
//     n1.appendChild(n3);

// }
// filhoDoFilho()

// function primeiroFilhoDoFilho() {
//     let cont = 'Esse é o conteudo do primeiroFilhoDoFilho';
//     let capt = document.getElementById('primeiroFilhoDoFilho');
//     let creat = document.createElement('section');

//     creat.innerHTML = cont;
//     capt.appendChild(creat)
// }
// // primeiroFilhoDoFilho()

// let teste = document.getElementById('primeiroFilhoDoFilho').parentElement
// .parentElement
// .nextElementSibling

// teste.innerHTML = 'tomara que tenha ido'









// document.getElementById('paiDoPai').innerHTML = 'este é o pai do pai'

// let paiDoPai = document.getElementById('pai');
// let pai = document.getElementById('primeiroFilho');

// paiDoPai.removeChild(paiDoPai.firstElementChild);

let cap = document.querySelector('#paiDoPai #pai');

for(let index = 2; index < cap.length; index += 1){
    cap.removeChild(cap.firstElementChild)
}