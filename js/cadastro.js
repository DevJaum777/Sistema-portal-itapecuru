if (localStorage.getItem("logado") !== "true") {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "login.html";
  }

  function irParaServicos(event) {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
    // Você pode redirecionar aqui se quiser, ex: window.location.href = 'menu.html';
}