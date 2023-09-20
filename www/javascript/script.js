//div.p*7

let j1 = prompt("Nome do Jogador 1:");
let j2 = prompt("Nome do Jogador 2:");
let vez = 1;
let jogadas = 0;
let posicoes = document.querySelectorAll(".p")
//// console.log(posicoes)
for(let i=0; i<posicoes.length; i++) {
    posicoes[i].addEventListener("click", function () {
        console.log(posicoes[i]      );
        this.value = vez;
        jogadas++;
        if(vez == 1) {
            posicoes[i].classList.add("j1");
            this.classList.add("j1");
            vez = 2;
        }
        else {
            this.classList.add("j2");
            vez = 1;
        }
        console.log(this.value);
    //condições para vitória

        if (jogadas>=5) {
            
            if(posicoes[0].value == posicoes[1].value && posicoes[2].value == posicoes[1].value && posicoes[1].value >= 1) {
                alert("Parabéns " )
                console.log("teste1")
            }
            else if (posicoes[3].value == posicoes[4].value  && posicoes[4].value == posicoes[5].value &&  posicoes[3].value >= 1) {
                alert("Parabéns " )
                console.log("teste2")
            }
            else if (posicoes[6].value == posicoes[7].value  && posicoes[7].value == posicoes[8].value && posicoes[6].value >= 1) {
                alert("Parabéns " )
                console.log("teste3")
            }
            else if (posicoes[0].value == posicoes[3].value && posicoes[3].value == posicoes[6].value && posicoes[0].value >= 1) {
                alert("Parabéns " )
                console.log("teste4")
            }
            else if (posicoes[1].value == posicoes[4].value  && posicoes[4].value == posicoes[7].value && posicoes[1].value >=1) {
                alert("Parabéns ")
                console.log("teste5")
            }
           
            else if (posicoes[2].value == posicoes[5].value && posicoes[5].value == posicoes[8].value && posicoes[5].value>=1) {
                alert("Parabéns");
                console.log("teste6")
            }
            else if (posicoes[0].value == posicoes[4].value && posicoes[4].value == posicoes[8].value  && posicoes[0].value>=1) {
                alert("Parabéns")
                console.log("teste7")
            }
            else if (posicoes[6].value == posicoes[4].value && posicoes[4].value == posicoes[2].value && posicoes[6].value>=1) {
                alert("Parabéns")
                console.log("teste8")
            }
          
            else if (jogadas == 9) {
                alert("Deu Velha!");
            }
        }         
            });
        }

