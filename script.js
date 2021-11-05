const numeroDeCartas = prompt("Qual o numero de cartas?")
let contador = 0;
let array = [];
let tempo = null;
let cardsVirados = null;
let numeroDeCardsVirados = null;
let indice_das_cartas = [];
let baralho = document.querySelector(".baralho");

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

// Adicionando o número de cartas fornecido pelo usuário
while(contador < numeroDeCartas){
    baralho.innerHTML = baralho.innerHTML + `
    <div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
        </div>
        <div class="back-face face">
        </div>
  </div> `;
    contador = contador + 1;
}

let deck = document.querySelectorAll(".card"); // array com todas as cartas
console.log(deck);

// Se o número de cartas passar de 6, fazer a primeira carta da segunda linha ter marginLeft nula
if(numeroDeCartas > 6){
    let cartas = baralho.querySelectorAll(".card");
    cartas[6].style.marginLeft = "0px";
}

// Zerando o contador + Criando array com duplas dos números de 1 até numeroDeCartas
contador = 0;
while (contador < numeroDeCartas/2){
    array.push(contador+1);
    array.push(contador+1);
    contador = contador + 1;
    // console.log(array);
}

// Após esta linha, o vetor 'array' estará embaralhado
array.sort(comparador);

// Atribuindo imagens para o verso das cartas de acordo com a lista de numeros do vetor 'array'
contador = 0;
let versoDaCarta = document.querySelectorAll(".back-face");
console.log(versoDaCarta);
 while(contador < numeroDeCartas){
     versoDaCarta[contador].style.backgroundImage = `url("Imagens/Sapinho${array[contador]}.jpg")`;
     contador = contador+1;
 }



// Função que vira a carta clicada abaixo!
function virarCarta(carta){
    // Achando o índice da carta selecionada
    
    for(let i=0; i<deck.length;i++ ){
        console.log(i);
        if(carta === deck[i]){
            indice_das_cartas.push(array[i]);
        }
    }

    console.log(indice_das_cartas);

    // console.log(carta);
    let frontface = carta.querySelector(".front-face");
    let backface = carta.querySelector(".back-face");
    console.log(frontface.style.transform);

    if(frontface.style.transform === ""){

        frontface.style.transform = "rotateY(-180deg)"
        backface.style.transform = "rotateY(0deg)"
        carta.classList.add("virado");
    }
    else{
        frontface.style.transform = ""
        backface.style.transform = ""
        carta.classList.remove("virado");
    }
    cardsVirados = document.querySelectorAll(".virado");
    numeroDeCardsVirados = cardsVirados.length;
    if(numeroDeCardsVirados == 2){
        tempo = setTimeout(verificarPar,1000);
    }
}
    
    
    function verificarPar(){
        
        if(indice_das_cartas[0] == indice_das_cartas[1]){
            cardsVirados[0].classList.remove("virado");
            cardsVirados[1].classList.remove("virado");
            indice_das_cartas = [];
        }
        else{

            // console.log(cardsVirados);
            // console.log(numeroDeCardsVirados);
    
        
                cardsVirados[0].querySelector(".back-face").style.transform = "rotateY(180deg)";
                cardsVirados[0].querySelector(".front-face").style.transform = "rotateY(0deg)";
                cardsVirados[1].querySelector(".back-face").style.transform = "rotateY(180deg)";
                cardsVirados[1].querySelector(".front-face").style.transform = "rotateY(0deg)";
                cardsVirados[0].classList.remove("virado");
                cardsVirados[1].classList.remove("virado");
                cardsVirados[0].querySelector(".back-face").style.transform = null;
                cardsVirados[0].querySelector(".front-face").style.transform = null;
                cardsVirados[1].querySelector(".back-face").style.transform = null;
                cardsVirados[1].querySelector(".front-face").style.transform = null;
                indice_das_cartas = [];
                // cardsVirados[0].classList.remove("virado");
        }
            // cardsVirados[1].classList.remove("virado");
    }


