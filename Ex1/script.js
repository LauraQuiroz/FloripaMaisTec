// script.js

function atualizarNomeUsuario() {
    var elementoNomeUsuario = document.getElementById("nomeUsuario");
    if (elementoNomeUsuario) {
      elementoNomeUsuario.textContent = "Laura Patricia Quiroz - Desenvolvedora";
    }
  }
  
  function atualizarEmail() {
    var novoEmail = document.getElementById("novoEmail").value;
    var elementoEmailUsuario = document.getElementById("emailUsuario");
  
    // Simples validação de e-mail
    if (validarEmail(novoEmail)) {
      elementoEmailUsuario.textContent = novoEmail;
      alert("Email atualizado com sucesso!");
    } else {
      alert("Por favor, insira um email válido.");
    }
  }
  
  function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  window.onload = function () {
    atualizarNomeUsuario();
  };
  