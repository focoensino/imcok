const calcular = document.querySelector("#calcular");

function imc() {
  const nome = document.querySelector("#nome").value;
  const altura = document.querySelector("#altura").value;
  const peso = document.querySelector("#peso").value;
  const resultado = document.querySelector("#resultado");

  if (nome != "" && altura != "" && peso != "") {
    const valorimc = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    if (valorimc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (valorimc < 25) {
      classificacao = 'Com Peso ideal "Parabéns"';
    } else if (valorimc < 30) {
      classificacao = "Levemente acima do Peso...";
    } else if (valorimc < 35) {
      classificacao = "Com Obesidade Grau I";
    } else if (valorimc < 40) {
      classificacao = "Com Obesidade Grau II(Severa)";
    } else {
      classificacao = "Com Obesidade Grau III(Morbida)";
    }

    resultado.textContent = `${nome} seu IMC é: ${valorimc} e você está ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os Campos";
  }
}

calcular.addEventListener("click", imc);
