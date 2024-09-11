/*-Cree un bucle for en JS que imprima cada nombre en esta lista.

myList = [“velma”, “scout”, “jane”, “john”, “harry”]*/

const myList = ["velma", "scout", "jane", "john", "harry"];

for (let i = 0; i < myList.length;i++) {
  console.log(myList[i]);
  
}

/*-Cree un bucle while que recorra la misma lista y también imprima los nombres. 
Nota: Recuerda crear un contador para que el ciclo no sea infinito.*/

const myList = ["velma", "scout", "jane", "john", "harry"];
let index = 0;

while (index < myList.length) {
  console.log(myList[index]);
  index++;
}

//-Cree una función de flecha que devuelva "Hola mundo"//

const holaMundo = () => "Hola mundo";

console.log(holaMundo());