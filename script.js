let contador = 0;
let array = [];
let tempo = null;
let cardsVirados = null;
let numeroDeCardsVirados = null;
let indice_das_cartas = [];
let imgArray = [];
let img_indice = [1,2,3,4,5,6,7];
let jogadas = null;
let finalizado = 0;
let baralho = document.querySelector(".baralho");

const numeroDeCartas = prompt("Qual o número de cartas?");
if(numeroDeCartas<4 || numeroDeCartas>14 || numeroDeCartas%2 == 1){
    alert("Número inválido.");
    numerodeCartas = prompt("Qual o número de cartas?");
}
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


// Zerando o contador + Criando array com duplas dos números de 1 até numeroDeCartas
contador = 0;
while (contador < numeroDeCartas/2){
    array.push(contador+1);
    array.push(contador+1);
    contador = contador + 1;
}

// Após esta linha, o vetor 'array' estará embaralhado
array.sort(comparador);
// Embaralho o array de indices das Imagens
img_indice.sort(comparador);

// Inserindo as imagens no array de acordo com os índices aleatorizados de 'img_indice'
imgArray[img_indice[0]] = 'bobrossparrot.gif';
imgArray[img_indice[1]] = 'explodyparrot.gif';
imgArray[img_indice[2]] = 'fiestaparrot.gif';
imgArray[img_indice[3]] = 'metalparrot.gif';
imgArray[img_indice[4]] = 'revertitparrot.gif';
imgArray[img_indice[5]] = 'tripletsparrot.gif';
imgArray[img_indice[6]] = 'unicornparrot.gif';


// Atribuindo imagens para o verso das cartas de acordo com a lista de numeros do vetor 'array'
contador = 0;
let versoDaCarta = document.querySelectorAll(".back-face");
console.log(versoDaCarta);
 while(contador < numeroDeCartas){
     versoDaCarta[contador].style.backgroundImage = `url("Imagens/${imgArray[array[contador]]}")`;
     contador = contador+1;
 }



// Função que vira a carta clicada abaixo!
function virarCarta(carta){
    jogadas = jogadas + 1;
    
    if(jogadas === 1){
        iniciarCronometro = cronometro();
    }
    
    
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
        if(indice_das_cartas[0] == indice_das_cartas[1]){
            manterCartas();
            if(finalizado === deck.length){
                setTimeout(fimDeJogo,500);
            }
        }
        else{
            tempo = setTimeout(virarCartas,1000);
        }
        
    }

}
    
 function manterCartas(){
            
    cardsVirados[0].classList.remove("virado");
    cardsVirados[1].classList.remove("virado");
    cardsVirados[0].onclick = null;
    cardsVirados[1].onclick = null;
    indice_das_cartas = [];
    // Verifica se todas as cartas são clicáveis
    
    finalizado = 0;
    for( i=0; i< deck.length ;i++){
        if(deck[i].onclick === null){
                finalizado = finalizado + 1;
        }
    }       
}
        
            
        
function virarCartas(){

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
                
}

function fimDeJogo(){
    alert(`Fim de jogo! Você ganhou em ${jogadas} jogadas e em ${tempoTotal} segundos!`);
    clearInterval(meuIntervalo);
    const resposta = prompt("Jogar de novo? Digite 'Sim' ou 'Não'");
    if(resposta === 'Sim' || resposta === 'sim'){
        window.location.reload(false);
    }
}

let segundosNumeral = 0;
let segundosDecimal = 0;
let minutosNumeral = 0;
let minutosDecimal = 0;
let tempoTotal = 0;
let meuIntervalo = null;

function cronometro(){

    let tempo = document.querySelector(".relogio");
    meuIntervalo = setInterval(adicionar,1000);
    
    function adicionar(){
        tempoTotal++;

        if(segundosNumeral < 9){
            segundosNumeral ++;
        }
        else if(segundosDecimal < 5){
            segundosNumeral = 0;
            segundosDecimal ++
        }
        else if(minutosNumeral <9){
            segundosNumeral = 0;
            segundosDecimal = 0;
            minutosNumeral ++;
        }
        else if(minutosDecimal <9){
            segundosNumeral = 0;
            segundosDecimal = 0;
            minutosNumeral = 0;
            minutosDecimal ++;
        }

        tempo.innerHTML = `<p>${minutosDecimal}${minutosNumeral}:${segundosDecimal}${segundosNumeral}</p>`;
    }
    

}   

