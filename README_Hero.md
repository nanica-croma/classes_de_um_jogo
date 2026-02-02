## Objetivo

Criar uma classe `Hero` que represente um herói com:

-   Nome\
-   Idade\
-   Tipo

E um método `attack()` que exibe no console uma mensagem informando como
o herói atacou, dependendo do seu tipo.

------------------------------------------------------------------------

## Estrutura do Código

### Classe Hero

A classe recebe três propriedades:

-   `name` → nome do herói\
-   `age` → idade do herói\
-   `type` → tipo do herói (`mago`, `guerreiro`, `monge` ou `ninja`)

------------------------------------------------------------------------

### Método attack()

O método escolhe o tipo de ataque com base no tipo do herói:

  Tipo        Ataque
  ----------- ----------------
  mago        magia
  guerreiro   espada
  monge       artes marciais
  ninja       shuriken
