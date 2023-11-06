// Menu side Bar
const MenuItem = document.querySelectorAll('.item-menu')

// Funçao para criar a classe ativo no item clicado
function selectLink() {
    MenuItem.forEach((item) => 
      item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

MenuItem.forEach((item) =>
  item.addEventListener('click', selectLink)
)

// Funçao para expandir a SideBar

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelectorAll('.sidebar');


btnExp.addEventListener('click', function(){
  Array.from(menuSide).forEach(function(item){
    item.classList.toggle('expand');
  });
});
// Fim menu SideBar



// Criando Atribuutoss
const expendCard = document.getElementById('expend-card');
const closeCard = document.getElementById('close-card')
const cardOpen = document.getElementById('card')
const proOpen = document.getElementById('version-pro-iphones')
const selectPhone = document.getElementById('pro1')
const selectPhone2 = document.getElementById('pro2')
const selectPhone3 = document.getElementById('pro3')
const addInfo = document.getElementById('info-details')
const titlePrice = document.getElementById('title-smartphone')
const priceiPhone = document.getElementById('priceiPhone')
const imageIphone = document.getElementById('imageIphone')

//Criando Funções

//CRIANDO FUNCOES PARA ABRIR E FECHAR

function expendC() {  
    cardOpen.style.width = '670px';
    expendCard.style.display = 'none';
    closeCard.style.display = 'block';
    proOpen.style.display = 'block';
    addInfo.style.display = 'block';
}


function closeC() {
    cardOpen.style.width = '370px';
    closeCard.style.display = 'none';
    expendCard.style.display = 'block';
    proOpen.style.display = 'none';
    addInfo.style.display = 'none'
}

//FUNCTION PARA SELECIONAR OS IPHONES

function iphone15() { 
    titlePrice.innerHTML = 'iPhone 15';
    priceiPhone.innerHTML = 'R$ 6.700,00';
    imageIphone.src = "..//media/images/iphones/iphone15.png";
} 
        
function iphone15p() {
    titlePrice.innerHTML = 'iPhone 15 Pro';
    priceiPhone.innerHTML = 'R$ 8.300,00';
    imageIphone.src = "..//media/images/iphones/iphone15pro.png";
}

function iphone15pm() {
    titlePrice.innerHTML = 'iPhone 15 Pro Max';
    priceiPhone.innerHTML = 'R$ 9.200,00';
    imageIphone.src = "..//media/images/iphones/iphone15promax.png"; 
}
     
// CRIANDO FUNCOES RESPONSIVAS


//Criando Eventos
    expendCard.addEventListener('click', expendC);
    closeCard.addEventListener('click', closeC);
    selectPhone.addEventListener('click', iphone15);
    selectPhone2.addEventListener('click', iphone15p);
    selectPhone3.addEventListener('click', iphone15pm);
