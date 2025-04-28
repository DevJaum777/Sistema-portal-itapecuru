// Função de verificação de login
function verificarLogin(event) {
  event.preventDefault();  // Impede o envio padrão do formulário (recarregar a página)

  // Obtém os valores dos campos de login e senha
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  // Recupera a senha armazenada para o login do usuário
  const senhaSalva = localStorage.getItem("user_" + login);

  // Verifica se o login é admin ou se a senha corresponde ao usuário
  if ((login === "admin" && senha === "admin") || senhaSalva === senha) {
    // Marca o usuário como logado
    localStorage.setItem("logado", "true");

    // Redireciona o usuário para a página inicial
    window.location.href = "paginicial.html";
  } else {
    // Caso o login ou senha estejam incorretos, exibe um alerta
    alert("Usuário ou senha incorretos.");
  }
}

// Adiciona o evento de submissão do formulário
document.getElementById("loginForm").addEventListener("submit", verificarLogin);
