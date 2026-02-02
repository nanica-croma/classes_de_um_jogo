/*# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:*/

class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

     attack() {
        let attackMode = "";

        if (this.type === "mago") {
            attackMode = "magia";

        } else if (this.type === "guerreiro") {
            attackMode = "espada";

        } else if (this.type === "monge") {
            attackMode = "artes marciais";

        } else if (this.type === "ninja") {
            attackMode = "shuriken";

        }

        console.log(
            "O " + this.type + " " + this.name + " atacou usando " + attackMode + "!"
        );
    }
    
}

let heroNinja = new Hero("Marcos", 20, "ninja")
let heroMonge = new Hero("Nebula", 12, "monge")
let heroGuerreiro = new Hero("Serene", 34, "guerreiro")
let heroMago = new Hero("Marcos", 9, "mago")


heroGuerreiro.attack();
heroMago.attack();
heroMonge.attack();
heroNinja.attack();
