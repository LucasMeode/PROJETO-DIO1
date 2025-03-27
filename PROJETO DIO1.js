let nomeHeroi = "IronMan"
let xpHeroi = 8574;

let nivelHeroi;

if(xpHeroi <= 1000){nivelHeroi = "Ferro"}
else if(xpHeroi >=1001 && xpHeroi <= 2000) {nivelHeroi="Bronze"}

else if(xpHeroi >= 2001 && xpHeroi <= 5000) {nivelHeroi="Prata Ouro"}

else if(xpHeroi >= 5001 && xpHeroi <= 8000) {nivelHeroi = "Platina Diamante"}

else if(xpHeroi >= 8001 && xpHeroi <= 9000) {nivelHeroi="Ascendente"}

else if(xpHeroi >= 9001 && xpHeroi <= 10000) {nivelHeroi = "Imortal"}

console.log("O nome do meu heroi é: " + nomeHeroi + " e possui o nível: " + nivelHeroi )