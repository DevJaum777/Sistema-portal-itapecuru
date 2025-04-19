function verificarLogin() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const senhaSalva = localStorage.getItem("user_" + login);
    if ((login === "admin" && senha === "admin") || senhaSalva === senha) {
      localStorage.setItem("logado", "true");
      window.location.href = "paginicial.html";
    } else {
      alert("Usuário ou senha incorretos.");
    }
  }