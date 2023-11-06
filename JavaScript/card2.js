// Expandir e Fechar Card
const expendCardc2 = document.getElementById('expend-card-card-2')
    
const closeCard2 = document.getElementById('close-card-card-2')
// Fim Expandir e Fechar Card

//Selecionando Atributos DOM

const cardOpen2 = document.getElementById('card2')
const proOpen2 = document.getElementById('version-pro-iphones-card-2')
const addInfo2 = document.getElementById('info-details-card-2')
const priceiPhone2 = document.getElementById('priceiPhone-card-2')
const titlePrice2 = document.getElementById('title-smartphone-card-2')
const imageIphone2 = document.getElementById('imageIphone-card2')
// FIM SELECIONANDO ATRIBUTOS DOM    

// ATRIBUTOS MUDAR APARELHOS
const selectPhone4 = document.getElementById('pro1-card-2')
const selectPhone5 = document.getElementById('pro2-card-2')
const selectPhone6 = document.getElementById('pro3-card-2')
//FIM MUDAR APARELHOS

// Criando Funcoes

function expendC2() {
cardOpen2.style.width = "670px";
expendCardc2.style.display = "none";
closeCard2.style.display = "block";
proOpen2.style.display = "block";
addInfo2.style.display = "block"
}

function closeC2() {
cardOpen2.style.width = "370px";
closeCard2.style.display = "none";
expendCardc2.style.display = "block";
proOpen2.style.display = "none";
addInfo2.style.display = "none"
}

function iphone14() {
priceiPhone2.innerHTML = 'R$ 4.615,00'
titlePrice2.innerHTML = 'iPhone 14'
imageIphone2.src = "..//media/images/iphones/iphone14.png";
}

function iphone14p() {
priceiPhone2.innerHTML = 'R$ 5.350,00'
titlePrice2.innerHTML = 'iPhone 14 Pro'
imageIphone2.src = "..//media/images/iphones/iphone14pro.png";
}

function iphone14pm() {
priceiPhone2.innerHTML = 'R$ 6.750,00'
titlePrice2.innerHTML = 'iPhone 14 Pro Max'
imageIphone2.src = "..//media/images/iphones/iphone14pm.png";
}

// FIM FUNCOES

//Criando Eventos
expendCardc2.addEventListener('click', expendC2)
closeCard2.addEventListener('click', closeC2)
selectPhone4.addEventListener('click', iphone14)
selectPhone5.addEventListener('click', iphone14p)
selectPhone6.addEventListener('click', iphone14pm)