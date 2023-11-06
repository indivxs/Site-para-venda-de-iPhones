// Expandir e Fechar Card
const expendCardc4 = document.getElementById('expend-card-card-4')
        
const closeCard4 = document.getElementById('close-card-card-4')
// Fim Expandir e Fechar Card

//Selecionando Atributos DOM

const cardOpen4 = document.getElementById('card4')
const proOpen4 = document.getElementById('version-pro-iphones-card-4')
const addInfo4 = document.getElementById('info-details-card-4')
const priceiPhone4 = document.getElementById('priceiPhone-card-4')
const titlePrice4 = document.getElementById('title-smartphone-card-4')
const imageIphone4 = document.getElementById('imageIphone-card4')

// FIM SELECIONANDO ATRIBUTOS DOM    

// ATRIBUTOS MUDAR APARELHOS

const selectPhone10 = document.getElementById('pro1-card-4')
const selectPhone11 = document.getElementById('pro2-card-4')
const selectPhone12 = document.getElementById('pro3-card-4')

//FIM MUDAR APARELHOS

// Criando Funcoes
function expendC4() {
cardOpen4.style.width = "670px";
expendCardc4.style.display = "none";
closeCard4.style.display = "block";
proOpen4.style.display = "block";
addInfo4.style.display = "block"
}

function closeC4() {
    cardOpen4.style.width = "370px";
    closeCard4.style.display = "none";
    expendCardc4.style.display = "block";
    proOpen4.style.display = "none";
    addInfo4.style.display = "none"
}

function iphone12() {
    priceiPhone4.innerHTML = 'R$ 2.000,00'
    titlePrice4.innerHTML = 'iPhone 12'
    imageIphone4.src = "..//media/images/iphones/iphone12.png";
}

function iphone12p() {
    priceiPhone4.innerHTML = 'R$ 3.500,00'
    titlePrice4.innerHTML = 'iPhone 12 Pro'
    imageIphone4.src = "..//media/images/iphones/12pro.png";
}

function iphone12pm() {
    priceiPhone4.innerHTML = 'R$ 4.200,00'
    titlePrice4.innerHTML = 'iPhone 12 Pro Max'
    imageIphone4.src = "..//media/images/iphones/12promax.png";
}

// FIM FUNCOES

//Criando Eventos

expendCardc4.addEventListener('click', expendC4)
closeCard4.addEventListener('click', closeC4)
selectPhone10.addEventListener('click', iphone12)
selectPhone11.addEventListener('click', iphone12p)
selectPhone12.addEventListener('click', iphone12pm)