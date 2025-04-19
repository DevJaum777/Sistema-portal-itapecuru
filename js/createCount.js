function criarConta() {
    const user = document.getElementById("novoUsuario").value;
    const pass = document.getElementById("novaSenha").value;

    if (!user || !pass) {
      alert("Preencha todos os campos.");
      return;
    }

    localStorage.setItem("user_" + user, pass);
    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
  }