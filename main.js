// document.querySelector('input[type=tel]');

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  } else {
    alert('Elemento não encontrado ou seletor inválido');
  }
}


const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);

const inputTel = document.querySelector('input[type=tel]');
console.log(inputTel);

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const idAudio = `#som_tecla_dial`;
    console.log(contador);

    tecla.onclick = function () {
        tocaSom(idAudio);
        inputTel.value = inputTel.value + tecla.value;
    }
    

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }
      }
      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }
    }


