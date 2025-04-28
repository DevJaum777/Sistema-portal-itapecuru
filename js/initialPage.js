// Função para mostrar uma seção específica da página
function mostrarSecao(secaoId) {
  // Pega todas as seções da página (elementos <section>)
  const secoes = document.querySelectorAll("section");

  // Remove a classe "active" de todas as seções, escondendo todas elas
  secoes.forEach(secao => secao.classList.remove("active"));
  
  // Encontra a seção específica com o ID fornecido (secaoId)
  const secao = document.getElementById(secaoId);

  // Se a seção existir (caso o ID seja válido), adiciona a classe "active" à ela, tornando-a visível
  if (secao) {
    secao.classList.add("active"); // Torna a seção visível
    window.scrollTo(0, 0); // Rola a página para o topo
  }
}

// Função para filtrar profissionais com base na busca e filtros
function filtrarProfissionais() {
  // Pega o valor do campo de busca, profissão e bairro e converte para minúsculas para garantir que a comparação seja case-insensitive
  const busca = document.getElementById("campoBusca").value.toLowerCase(); 
  const profissaoFiltro = document.getElementById("filtroProfissao").value.toLowerCase();
  const bairroFiltro = document.getElementById("filtroBairro").value.toLowerCase();

  // Pega todos os cards de profissionais que estão na lista de profissionais
  const cards = document.querySelectorAll("#listaProfissionais .card");

  // Para cada card de profissional, verifica se ele deve ser visível ou não
  cards.forEach(card => {
    // Pega o conteúdo de texto do card e converte para minúsculas
    const texto = card.textContent.toLowerCase();

    // Verifica se o texto do card contém o que foi digitado no campo de busca, e se ele também contém a profissão e/ou o bairro
    const visivel =
      texto.includes(busca) && 
      (profissaoFiltro === "" || texto.includes(profissaoFiltro)) &&
      (bairroFiltro === "" || texto.includes(bairroFiltro));

    // Se o card atender a todos os critérios, ele será exibido, caso contrário, será escondido
    card.style.display = visivel ? "block" : "none";
  });
}
