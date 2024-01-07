const EMAIL_CORRETO = "vitoriaalmeeida11@gmail.com";
const SENHA_CORRETA = "12345";
const botao = document.getElementById("btn_enviar");

function valida() {
  const email = document.getElementById("ilogin");
  if (email.value == EMAIL_CORRETO) {
    alert("Esta certo!");
  } else {
    insereErro("Email incorreto!", "csenha");
  }

  const senha = document.getElementById("isenha");
  if (senha.value == SENHA_CORRETA) {
    alert("Esta certa!");
  } else {
    insereErro("Senha incorreta", "btn_enviar");
  }
}

function insereErro(mensagem, elementoReferencia) {
  // criar o elemento HTML para o erro
  const textoErroElemento = document.createElement("h5");
  textoErroElemento.innerText = mensagem;

  const form = document.getElementsByTagName("form")[0];
  console.log(form.children);

  // appendChild -> insere um filho no final dos filhos
  // insertBefore -> insere um elemento antes do elemento de referencia
  // https://www.w3schools.com/jsref/met_node_insertbefore.asp

  form.insertBefore(
    textoErroElemento,
    document.getElementById(elementoReferencia)
  );

  // const campo = document.getElementById("cemail");
  // campo.appendChild(textoErroElemento);
  // inserir o elemento HTML no local que desejamos
}

botao.onclick = valida;

// pegar elementos do Html e salvar no js com o document.get.....
// adicionar eventos para os elementos html
// criar elementos no JS com document.createElement

// aprendemos que elementos tem filhos .children
// aprendemos a inserir elementos antes de um children ou dar appendChild para inserir no final
