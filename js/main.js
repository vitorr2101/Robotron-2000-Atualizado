

const listaDeRobos = ["img/robotron.png","img/robotron-vermelho.png","img/robotron-amarelo.png","img/robotron-branco.png","img/robotron-rosa.png","img/robotron-preto.png"]
const robo = document.querySelector(".robo")

//Resolvido com ajuda do ChatGPT
//Um contador:
let roboAtual = 0;

function trocaCorRobo() {
  // incrementar o contador para a próxima imagem
    roboAtual++;
  
  // verificar se a contagem é maior do que o número de imagens
    if (roboAtual >= listaDeRobos.length) {
        roboAtual = 0; // voltar para a primeira imagem
    }
  // atualizar o atributo src da imagem
    robo.src = listaDeRobos[roboAtual]; 
}

//Uma forma de contar os clicks 
robo.addEventListener("click",trocaCorRobo);

//Não funciona pois percorre toda a lista e a repetição é encerrada.
// function trocaCorRobo() {
//     for (let i = 0 ; i < listaDeRobos.length; i++) {
//       i++
//       if (i >= listaDeRobos.length) {
//         i = 0; // voltar para a primeira imagem
//         }
//         robo.src = listaDeRobos[i]; 
//     }
// }


function manipulaDados(operacao , controle){

	const peca = controle.querySelector(".controle-contador")
 
	if (operacao === "-") {
		peca.value = parseInt(peca.value) -1
	} else{
		peca.value = parseInt(peca.value) + 1
	}
}

const controle = document.querySelectorAll("[data-controle]")

//.target é útil para descobrir onde o evento foi clicado! útil quando se tem 10 botoes e se quer fazer alguma verificação
//ao criar "evento" é possivel ver as informações(.target,.parentNode,etc) contidas no elemento ao ser clicado

controle.forEach((elemento) => {
	elemento.addEventListener("click", (evento) => {
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
		atualizaEstatisticas(evento.target.dataset.peca)
		// console.log(evento.target.parentNode)
	})
})

//sempre que quiser criar uma nova funcao é preciso primeiro nomear os itens no html! e usar essas nomeaçoes esclusivamente nessa funcao(claro, se ela for auto contida)

const estatistica = document.querySelectorAll("[data-estatistica]")

function atualizaEstatisticas(peca){
	estatistica.forEach((elemento) => {
	elemento.textContent = parseInt(elemento.textContent)+ pecas[peca][elemento.dataset.estatistica]
	})	
}

 const pecas = {
     "bracos": {
         "forca": 29,
         "poder": 35,
         "energia": -21,
         "velocidade": -5
     },

     "blindagem": {
         "forca": 41,
         "poder": 20,
         "energia": 0,
         "velocidade": -20
     },
     "nucleos":{
         "forca": 0,
         "poder": 7,
         "energia": 48,
         "velocidade": -24
     },
     "pernas":{
         "forca": 27,
         "poder": 21,
         "energia": -32,
         "velocidade": 42
     },
     "foguetes":{
         "forca": 0,
         "poder": 28,
         "energia": 0,
         "velocidade": -2
     }
 }