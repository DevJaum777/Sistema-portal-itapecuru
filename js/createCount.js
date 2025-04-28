function criarConta() {
  // Pega os valores dos campos de cadastro
  const user = document.getElementById("novoUsuario").value;
  const pass = document.getElementById("novaSenha").value;

  // Verifica se os campos foram preenchidos
  if (!user || !pass) {
    alert("Preencha todos os campos.");
    return; // Se não preencher, não salva nada
  }

  // Salva o nome de usuário e senha no localStorage
  localStorage.setItem("user_" + user, pass);

  // Exibe uma mensagem de sucesso e redireciona para a página de login
  alert("Conta criada com sucesso!");
  window.location.href = "login.html"; 
}
