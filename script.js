const numeroDeCartas = prompt("Qual o numero de cartas?")
let contador = 0;
let array = [];

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

let baralho = document.querySelector(".baralho");
console.log(baralho);

// Adicionando o número de cartas fornecido pelo usuário
while(contador < numeroDeCartas){
    baralho.innerHTML = baralho.innerHTML + `
    <div class="card">
        <div class="front-face face">
        </div>
        <div class="back-face face">
        </div>
  </div> `;
    contador = contador + 1;
}

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
    console.log(array);
}

array.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


