// document.querySelector('input[type=tel]');

const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);

const inputTel = document.querySelector('input[type=tel]');
console.log(inputTel);

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    console.log(contador);

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value
    }
}


