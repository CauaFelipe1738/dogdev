// menu
let menuOpener = document.querySelector('.menu-opener')
//nav
let nav = document.querySelector('header nav');
//ouvinte para o evento click do menuOpener
menuOpener.addEventListener('click', ()=>{
    if(nav.classList.contains('opened')){
        nav.classList.remove('opened')
        menuOpener.querySelector('.close-icon').style .display='none'
        menuOpener.querySelector('.hamburger-icon') .style .display='flex'
    }else{
        nav.classList.add('opened')
        menuOpener.querySelector('.close-icon').style .display='flex'
        menuOpener.querySelector('.hamburger-icon') .style .display='none'
    }
})

//Testemonials
//vetor que contém as variável com texto
let testemonials = [
    {quote:'"Mais do que nunca, os animais são tratados como membros da família"' ,origin:'cbs.svg' },
    {quote:'"Dogdev é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes 100% reais. Ingredientes que humanos reconheceriam."' ,origin:'forbes.svg' },
    {quote:'Dogdev usa ingredientes simples e limpos em seus produtos.' ,origin:'fox.svg' },
    {quote:'Vejo você Dogdev como um verdadeiro herói' ,origin:'sharktank.svg' }
];
//captura os elementos do html
let testemonialQuote = document.querySelector('.testemonials .quote');
let testemonialIcons = document.querySelector('.testemonial .icons');

//repetição para criar imagens
for(let tindex in testemonials){
    let img = document.createElement('img')
    img.setAttribute('src', './assets/images'+testesmonials[parseInt(tindex)])
    img.style.cursor = 'pointer'
    img.addEventListener('click', ()=>fillTestemonial(parseInt(tindex)));
    testemonialIcons.appendChild(img)
}
//variavel que controla a testemonial atual
let currentTestemonial = 0
let testemonialTimer

//função para preencher o testemunho
const fillTestemonial = (index) =>{
    clearTimeout(testemonialTimer);
    currentTestemonial = index;
    //acessa do testemunho apenas a frase
    testemonialQuote.innerHTML = testemonials[currentTestemonial].quote
    let imgs = testemonialIcons.querySelectorAll('img')

    for(let img of imgs) img.style.opacity='0.2'
    imgs[currentTestemonial].style.opacity='1'
    testemonialTimer = setTimeout(nextTestemonial, 3000)
}

const nextTestemonial = () =>{
    if(testesmonials[currentTestemonial+1]){
        fillTestemonial(currentTestemonial+1)
    }else{
        fillTestemonial(0)
    }
}
//Inicia a exibição de testemunhos
nextTestemonial()