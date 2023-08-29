function login() {
  let elementoNome = document.getElementById("nome").value;
  let elementoIdade = document.getElementById("idade").value;
  let elementoLinguagem = document.getElementById("linguagem").value;
  let elementoOption = document.getElementById("optionLike");

  let nome = elementoNome;
  let idade = parseInt(elementoIdade);
  let linguagem = elementoLinguagem;

  if (nome.length < 3 || isNaN(idade) || idade < 0 || linguagem.length < 2) {
    alert("Por favor verificar os campos, todos devem ser preenchidos!");
  } else {
    retornoFormulário.innerHTML = `<h3> Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</h3>`;
  }
  let pesquisa = prompt(
    `Você gosta de estudar ${linguagem}? Responsa 1 para Sim 2 para Não.`
  );
  if (pesquisa == "1") {
    alert("Muito bom! Continue os estudos e irá longe.");
  } else if (pesquisa == "2") {
    alert(
      "Mas que pensa... Não desista, já pensou em olhar outras linguagens?"
    );
  } else {
    alert("Até logo.");
  }
  event.preventDefault();
}
