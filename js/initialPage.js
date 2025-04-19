function mostrarSecao(secaoId) {
    const secoes = document.querySelectorAll("section");
    secoes.forEach(secao => {
      secao.classList.remove("active");
    });
    document.getElementById(secaoId).classList.add("active");
  }

  function filtrarProfissionais() {
const busca = document.getElementById("campoBusca").value.toLowerCase();
const profissaoFiltro = document.getElementById("filtroProfissao").value.toLowerCase();
const bairroFiltro = document.getElementById("filtroBairro").value.toLowerCase();

const cards = document.querySelectorAll("#listaProfissionais .card");

cards.forEach(card => {
  const texto = card.textContent.toLowerCase();
  const visivel =
    texto.includes(busca) &&
    (profissaoFiltro === "" || texto.includes(profissaoFiltro)) &&
    (bairroFiltro === "" || texto.includes(bairroFiltro));

  card.style.display = visivel ? "block" : "none";
});
}
    const busca = document.getElementById("campoBusca").value.toLowerCase();
    const cards = document.querySelectorAll("#listaProfissionais .card");

    cards.forEach(card => {
      const texto = card.textContent.toLowerCase();
      card.style.display = texto.includes(busca) ? "block" : "none";
    });