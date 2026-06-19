const btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", () => {

  const nome = document.getElementById("conteudo1").value;
  const email = document.getElementById("conteudo2").value;
  const senha = document.getElementById("conteudo3").value;
  
  const nascimento = document.getElementById("conteudo4").value;
const generoMasc = document.getElementById("conteudo5").checked ? "Masculino" : "";
const generoFem = document.getElementById("conteudo6").checked ? "Feminino" : "";
  const genero = generoMasc || generoFem || "Não informado";
  const mensagem = document.getElementById("conteudo7").value;

 const textoFinal = `
  Nome: ${nome}
  E-mail: ${email}
  Senha: ${senha}
  Nascimento: ${nascimento}
  Gênero: ${genero}
  ----------------------  
Mensagem adicional:
${mensagem}
`.trim();

  const blob = new Blob([textoFinal], { type: "text/plain" });
  const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "cadastro.txt";
link.click();
});