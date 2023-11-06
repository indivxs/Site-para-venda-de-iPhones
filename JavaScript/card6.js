// Expandir e Fechar Card
const expendCardc6 = document.getElementById('expend-card-card-6')
        
const closeCard6 = document.getElementById('close-card-card-6')
// Fim Expandir e Fechar Card

//Selecionando Atributos DOM

const cardOpen6 = document.getElementById('card6')
const proOpen6 = document.getElementById('version-pro-iphones-card-6')
const addInfo6 = document.getElementById('info-details-card-6')
const priceiPhone6 = document.getElementById('priceiPhone-card-6')
const titlePrice6 = document.getElementById('title-smartphone-card-6')
const imageIphone6 = document.getElementById('imageIphone-card6')

// FIM SELECIONANDO ATRIBUTOS DOM    

// ATRIBUTOS MUDAR APARELHOS

const selectPhone16 = document.getElementById('pro1-card-6')

//FIM MUDAR APARELHOS

// Criando Funcoes
function expendC6() {
cardOpen6.style.width = "670px";
expendCardc6.style.display = "none";
closeCard6.style.display = "block";
proOpen6.style.display = "block";
addInfo6.style.display = "block"
}

function closeC6() {
    cardOpen6.style.width = "370px";
    closeCard6.style.display = "none";
    expendCardc6.style.display = "block";
    proOpen6.style.display = "none";
    addInfo6.style.display = "none"
}

function iphonexr() {
    priceiPhone6.innerHTML = 'R$ 1.550,00'
    titlePrice6.innerHTML = 'iPhone XR'
    imageIphone6.src = "..//media/images/iphones/iphonexr.png";
}

// FIM FUNCOES

//Criando Eventos

expendCardc6.addEventListener('click', expendC6)
closeCard6.addEventListener('click', closeC6)
selectPhone16.addEventListener('click', iphonexr)