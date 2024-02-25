// script.js

// Função para atualizar o nome do usuário dinamicamente
function atualizarNomeUsuario() {
    // Seleciona o elemento pelo ID
    var elementoNomeUsuario = document.getElementById("nomeUsuario");
  
    // Verifica se o elemento foi encontrado
    if (elementoNomeUsuario) {
      // Atualiza o conteúdo do elemento
      elementoNomeUsuario.textContent = "Laura Patricia Quiroz - Desenvolvedora";
    }
  }
  
  // Chamando a função ao carregar a página
  window.onload = function () {
    // Chama a função para atualizar o nome do usuário
    atualizarNomeUsuario();
  };
function exibirMensagemBoasVindas() {
    alert("Bem-vindo(a), Laura Patricia Quiroz!");
}

// Chamando a função ao carregar a página (opcional)
window.onload = exibirMensagemBoasVindas;
