// Expandir e Fechar Card
    const expendCardc3 = document.getElementById('expend-card-card-3')
        
    const closeCard3 = document.getElementById('close-card-card-3')
// Fim Expandir e Fechar Card

//Selecionando Atributos DOM

    const cardOpen3 = document.getElementById('card3')
    const proOpen3 = document.getElementById('version-pro-iphones-card-3')
    const addInfo3 = document.getElementById('info-details-card-3')
    const priceiPhone3 = document.getElementById('priceiPhone-card-3')
    const titlePrice3 = document.getElementById('title-smartphone-card-3')
    const imageIphone3 = document.getElementById('imageIphone-card3')

// FIM SELECIONANDO ATRIBUTOS DOM    

// ATRIBUTOS MUDAR APARELHOS

    const selectPhone7 = document.getElementById('pro1-card-3')
    const selectPhone8 = document.getElementById('pro2-card-3')
    const selectPhone9 = document.getElementById('pro3-card-3')

//FIM MUDAR APARELHOS

// Criando Funcoes
    function expendC3() {
    cardOpen3.style.width = "670px";
    expendCardc3.style.display = "none";
    closeCard3.style.display = "block";
    proOpen3.style.display = "block";
    addInfo3.style.display = "block"
    }
    
    function closeC3() {
        cardOpen3.style.width = "370px";
        closeCard3.style.display = "none";
        expendCardc3.style.display = "block";
        proOpen3.style.display = "none";
        addInfo3.style.display = "none"
    }
   
    function iphone13() {
        priceiPhone3.innerHTML = 'R$ 4.000,00'
        titlePrice3.innerHTML = 'iPhone 13'
        imageIphone3.src = "..//media/images/iphones/iphone13.png";
    }
    
    function iphone13p() {
        priceiPhone3.innerHTML = 'R$ 4.500,00'
        titlePrice3.innerHTML = 'iPhone 13 Pro'
        imageIphone3.src = "..//media/images/iphones/iphone13pro.png";
    }
    
    function iphone13pm() {
        priceiPhone3.innerHTML = 'R$ 5.000,00'
        titlePrice3.innerHTML = 'iPhone 13 Pro Max'
        imageIphone3.src = "..//media/images/iphones/iphone13pm.png";
    }

// FIM FUNCOES

//Criando Eventos

expendCardc3.addEventListener('click', expendC3)
closeCard3.addEventListener('click', closeC3)
selectPhone7.addEventListener('click', iphone13)
selectPhone8.addEventListener('click', iphone13p)
selectPhone9.addEventListener('click', iphone13pm)