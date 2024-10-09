let frases = [
    "O rato roeu a roupa do rei de Roma.",
    "A ligeira raposa marrom saltou sobre o cão indolente.",
    "O rápido rapaz marrom saltou sobre a raposa preguiçosa.",
    "Triste tigre, triste tigre, que tristes tigres são os tigres tristes.",
    "Se você for um bom menino, ganhará um doce.",
  ];

  let texto = document.querySelector("textarea")
  let tempo = document.querySelector("span")
  let frase = document.querySelector(".frase")
  let botaoGerar = document.querySelector(".gerarFrase")
  let botaoLimpar = document.querySelector(".limpar")
  let inicioTempo;
  let finalTempo;
  
  function escolherFrase() {
    let index = Math.floor(Math.random()* frases.length)
    frase.textContent = frases[index]
  }
  
  function iniciarContagem() {
    if(! inicioTempo) {
        inicioTempo = new Date().getTime()
    }
  }
  function pararContagem() {
    if(inicioTempo) {
        finalTempo = new Date().getTime()
        let tempoDigitacao = (finalTempo - inicioTempo) / 1000
        tempo.textContent = tempoDigitacao.toFixed(2)
        inicioTempo = null
    }
  }
  function limpar() {
    if (texto != "" && tempo !== 0) {
        texto.value = ""
        tempo.textContent = 0
    }
  }

  escolherFrase()
  texto.addEventListener("keyup", iniciarContagem)
  texto.addEventListener("blur", pararContagem)
  botaoGerar.addEventListener("click", escolherFrase)
  botaoLimpar.addEventListener("click", limpar)