// Verifica se o usuário está logado no sistema
if (localStorage.getItem("logado") !== "true") {
  // Se a chave "logado" não for igual a "true", isso significa que o usuário não está logado

  alert("Você precisa estar logado para acessar esta página.");  // Exibe um alerta para o usuário, informando que ele precisa estar logado

  window.location.href = "login.html";  // Redireciona o usuário para a página de login (login.html)
}

// Função que é chamada, provavelmente, quando o usuário clica em algum botão ou envia um formulário
function irParaServicos(event) {
  event.preventDefault();  // Impede o comportamento padrão do evento (por exemplo, enviar um formulário)

  alert("Cadastro realizado com sucesso!");  // Exibe uma mensagem de sucesso para o usuário

}
