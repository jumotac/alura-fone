| :placard: Vitrine.Dev |     |
| ------------- | --- |
| :sparkles: Nome | **Alura Fone** 
| :label: Tecnologias | JAVASCRIPT, HTML, CSS 
| :rocket: URL | https://jumotac.github.io/alura-fone/
| :fire: Desafio | Crie Páginas Dinâmicas com JavaScript

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://raw.githubusercontent.com/jumotac/alura-fone/master/img/alura-fone.png#vitrinedev)



# JavaScript para Web: Crie Páginas Dinâmicas


### DESAFIO: Conhecendo o JavaScript 

**BUSCAR UM ELEMENTO:**
Escreva o código em JavaScript capaz de selecionar o elemento HTML input do tipo telefone.

**SOLUÇÃO:**
Utilização do código _"document.querySelector(‘input[type=tel]’);"_
- document = seleção do documento HTML;
- input = é o elemento;
- [type=tel] = atributo do elemento a ser selecionado.

**DECLARAR UMA REFERËNCIA**
Declare Uma referência que armazene uma lista com todas as teclas e imprima o valor dela na aba console.

**SOLUÇÃO**
Utilização do script _"const' listaDeTeclas = document.querySelectorAll('input[type=button]');"_
- listaDeTeclas = referência para armazenar dentro dela a _NodeList_ com todas as teclas;

**PERCORRER UMA LISTA UTILIZANDO O FOR**
Faça um script que percorra a lista de teclas do AluraFone, e ao clicar em qualquer tecla, imprima o valor no campo Digite seu telefone. 

**SOLUÇÃO**
- const listaDeTeclas = referência para receber a lista com todas as teclas;
- const inputTel = referência para capturar o *input*;
- for = criação do laço de repetição: _contador = 0; contador < listaDeTeclas.length; contador++_;
- onclick - adicione a uma função anônima _função()_;
- inputTel.value = atribuir a soma entre o valor do campo.  

**MODIFICAR ESTILOS COM JAVASCRIPT**
Faça um JavaScript que percorra a lista de teclas, e ao clicar na tecla Enter ou Espaço, adicione a classe ativa no elemento e também resolva o momento de retirar a classe ativa do elemento.

**SOLUÇÃO**
- onkeydown = apertar uma tecla do teclado; 
- evento = parâmetro (crie um função anonima para receber esse parametro);
- Dentro do escopo da função, faça um _if_ com a condição: se _evento.code_ (o código do evento onkeydown) for igual a "Enter" ou for igual a "Space", adicione a classe ativa no elemento tecla: _'tecla.classList.add(‘ativa’);'_
- evento de _onkeyup_ = quando o usuário solta a tecla;
- dentro do escopo desta função, remover a classe ativa: _'tecla.classList.remove(‘ativa’);'_