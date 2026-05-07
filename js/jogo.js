let tentativas = 0;
let acertos = 0;
let jogar = true;

const btnReiniciar = document.getElementById("reiniciar");
const btnJogarNovamente = document.getElementById("joganovamente");

function verifica(obj) {
  if (!jogar) {
    alert("Clique em Jogar novamente");
    return;
  }

  jogar = false;
  tentativas++;

  let sorteado = Math.floor(Math.random() * 6);

  if (parseInt(obj.id) === sorteado) {
    acertou(obj);
    acertos++;
  } else {
    obj.classList.add("errou");

    let certo = document.getElementById(sorteado);
    acertou(certo);
  }

  atualizaPlacar();

  if (tentativas >= 3) {
    btnJogarNovamente.classList.add("invisivel");
    btnReiniciar.classList.remove("invisivel");
  }
}

function acertou(obj) {
  obj.classList.add("acertou");

  const img = new Image(80);
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Oxygen480-emotes-face-smile-big.svg";

  obj.appendChild(img);
}

function atualizaPlacar() {
  let desempenho = tentativas === 0 ? 0 : (acertos / tentativas) * 100;

  document.getElementById("resposta").innerHTML =
    `Acertos: ${acertos} | Tentativas: ${tentativas} | Desempenho: ${Math.round(desempenho)}%`;
}

function jogarNovamente() {
  jogar = true;

  document.querySelectorAll(".carta").forEach(c => {
    c.className = "carta";
    c.innerHTML = `<span>${c.id}</span>`;
  });
}

function reiniciar() {
  tentativas = 0;
  acertos = 0;
  jogar = true;

  jogarNovamente();
  atualizaPlacar();

  btnJogarNovamente.classList.remove("invisivel");
  btnReiniciar.classList.add("invisivel");
}

btnJogarNovamente.addEventListener("click", jogarNovamente);
btnReiniciar.addEventListener("click", reiniciar);