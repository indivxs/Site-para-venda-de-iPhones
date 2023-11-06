// Expandir e Fechar Card
const expendCardc5 = document.getElementById('expend-card-card-5')
        
const closeCard5 = document.getElementById('close-card-card-5')
// Fim Expandir e Fechar Card

//Selecionando Atributos DOM

const cardOpen5 = document.getElementById('card5')
const proOpen5 = document.getElementById('version-pro-iphones-card-5')
const addInfo5 = document.getElementById('info-details-card-5')
const priceiPhone5 = document.getElementById('priceiPhone-card-5')
const titlePrice5 = document.getElementById('title-smartphone-card-5')
const imageIphone5 = document.getElementById('imageIphone-card5')

// FIM SELECIONANDO ATRIBUTOS DOM    

// ATRIBUTOS MUDAR APARELHOS

const selectPhone13 = document.getElementById('pro1-card-5')
const selectPhone14 = document.getElementById('pro2-card-5')
const selectPhone15 = document.getElementById('pro3-card-5')

//FIM MUDAR APARELHOS

// Criando Funcoes
function expendC5() {
cardOpen5.style.width = "670px";
expendCardc5.style.display = "none";
closeCard5.style.display = "block";
proOpen5.style.display = "block";
addInfo5.style.display = "block"
}

function closeC5() {
    cardOpen5.style.width = "370px";
    closeCard5.style.display = "none";
    expendCardc5.style.display = "block";
    proOpen5.style.display = "none";
    addInfo5.style.display = "none"
}

function iphone11() {
    priceiPhone5.innerHTML = 'R$ 2.280,00'
    titlePrice5.innerHTML = 'iPhone 11'
    imageIphone5.src = "..//media/images/iphones/iphone11.png";
}

function iphone11p() {
    priceiPhone5.innerHTML = 'R$ 2.600,00'
    titlePrice5.innerHTML = 'iPhone 11 Pro'
    imageIphone5.src = "..//media/images/iphones/iphone11pro.png";
}

function iphone11pm() {
    priceiPhone5.innerHTML = 'R$ 3.200,00'
    titlePrice5.innerHTML = 'iPhone 11 Pro max'
    imageIphone5.src = "..//media/images/iphones/iphone11pm.png";
}

// FIM FUNCOES

//Criando Eventos

expendCardc5.addEventListener('click', expendC5)
closeCard5.addEventListener('click', closeC5)
selectPhone13.addEventListener('click', iphone11)
selectPhone14.addEventListener('click', iphone11p)
selectPhone15.addEventListener('click', iphone11pm)