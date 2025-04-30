
// Lista de serviços disponíveis
const servicos = [
  { nome: "Marceneiro", icone: "fa-hammer" },
  { nome: "Eletricista", icone: "fa-bolt" },
  { nome: "Encanador", icone: "fa-sink" },
  { nome: "Diarista", icone: "fa-broom" },
  { nome: "Barbeiro", icone: "fa-scissors" },
  { nome: "Enfermeira", icone: "fa-user-nurse" },
  { nome: "Pintor", icone: "fa-paint-roller" },
  { nome: "Jardineiro", icone: "fa-tree" },
  { nome: "Mecânico", icone: "fa-car" },
  { nome: "Passeador de Cães", icone: "fa-dog" },
  { nome: "Zelador", icone: "fa-house" },
  { nome: "Técnico de Informática", icone: "fa-laptop" },
  { nome: "Babá", icone: "fa-baby" },
  { nome: "Cuidadores de Idosos", icone: "fa-briefcase-medical" },
  { nome: "Pet Sitter", icone: "fa-paw" },
  { nome: "Mudanças", icone: "fa-people-carry-box" },
  { nome: "Dedetizador", icone: "fa-shield-virus" },
  { nome: "Instalação de Painel Solar", icone: "fa-bolt-lightning" },
  { nome: "Técnico de Ar Condicionado", icone: "fa-snowflake" },
  { nome: "Chaveiro", icone: "fa-door-closed" },
  { nome: "Pedreiro", icone: "fa-trowel-bricks" },
  { nome: "Estofador", icone: "fa-couch" },
  { nome: "Piscineiro", icone: "fa-water" },
  { nome: "Professor Particular", icone: "fa-chalkboard-teacher" }
];

// Profissionais exemplo (simulados)
const profissionais = {
  "Marceneiro": [
    { nome: "João Madeira", telefone: "(98) 99999-1111", bairro: "Centro", servico: "Marceneiro", endereco: "Rua A, 123", foto: "https://randomuser.me/api/portraits/men/10.jpg" },
    { nome: "Carlos Serrador", telefone: "(98) 98888-2222", bairro: "Vila Nova", servico: "Marceneiro", endereco: "Av. B, 456", foto: "https://randomuser.me/api/portraits/men/11.jpg" }
  ],
  "Eletricista": [
    { nome: "Ana Luz", telefone: "(98) 97777-3333", bairro: "São João", servico: "Eletricista", endereco: "Rua C, 789", foto: "https://randomuser.me/api/portraits/women/12.jpg" },
    { nome: "Pedro Volts", telefone: "(98) 98888-4444", bairro: "Centro", servico: "Eletricista", endereco: "Av. D, 101", foto: "https://randomuser.me/api/portraits/men/13.jpg" }
  ],
  "Encanador": [
    { nome: "Jorge Canos", telefone: "(98) 94444-5555", bairro: "Vila Nova", servico: "Encanador", endereco: "Rua E, 112", foto: "https://randomuser.me/api/portraits/men/14.jpg" },
    { nome: "Luiz Tubos", telefone: "(98) 93333-6666", bairro: "São Lucas", servico: "Encanador", endereco: "Av. F, 130", foto: "https://randomuser.me/api/portraits/men/15.jpg" }
  ],
  "Diarista": [
    { nome: "Maria Limpeza", telefone: "(98) 92222-7777", bairro: "Centro", servico: "Diarista", endereco: "Rua G, 141", foto: "https://randomuser.me/api/portraits/women/16.jpg" },
    { nome: "Julia Brilho", telefone: "(98) 91111-8888", bairro: "Vila Mariana", servico: "Diarista", endereco: "Av. H, 150", foto: "https://randomuser.me/api/portraits/women/17.jpg" }
  ],
  "Barbeiro": [
    { nome: "Carlos Corte", telefone: "(98) 94444-7777", bairro: "Centro", servico: "Barbeiro", endereco: "Rua I, 160", foto: "https://randomuser.me/api/portraits/men/18.jpg" },
    { nome: "Fernando Tesoura", telefone: "(98) 93333-8888", bairro: "Vila Bela", servico: "Barbeiro", endereco: "Av. J, 170", foto: "https://randomuser.me/api/portraits/men/19.jpg" }
  ],
  "Enfermeira": [
    { nome: "Cláudia Saúde", telefone: "(98) 91234-5678", bairro: "Vila Rosa", servico: "Enfermeira", endereco: "Rua K, 180", foto: "https://randomuser.me/api/portraits/women/20.jpg" },
    { nome: "Patrícia Cuidados", telefone: "(98) 92345-6789", bairro: "São Pedro", servico: "Enfermeira", endereco: "Av. L, 190", foto: "https://randomuser.me/api/portraits/women/21.jpg" }
  ],

  "Pintor": [
    { nome: "Roberto Cor", telefone: "(98) 93456-7890", bairro: "Centro", servico: "Pintor", endereco: "Rua M, 200", foto: "" },
    { nome: "Fernando Tinta", telefone: "(98) 94567-8901", bairro: "Vila Nova", servico: "Pintor", endereco: "Av. N, 210", foto: "" }
  ],
  "Jardineiro": [
    { nome: "Carlos Verde", telefone: "(98) 92233-4444", bairro: "Vila Jardim", servico: "Jardineiro", endereco: "Rua O, 220", foto: "" },
    { nome: "Joaquim Flores", telefone: "(98) 93344-5555", bairro: "Jardim do Sol", servico: "Jardineiro", endereco: "Av. P, 230", foto: "" }
  ],
  "Mecânico": [
    { nome: "Marcelo Auto", telefone: "(98) 96677-8888", bairro: "Centro", servico: "Mecânico", endereco: "Rua Q, 240", foto: "" },
    { nome: "Carlos Motor", telefone: "(98) 97788-9999", bairro: "Vila Nova", servico: "Mecânico", endereco: "Av. R, 250", foto: "" }
  ],
  "Passeador de Cães": [
    { nome: "Ana Pets", telefone: "(98) 91999-1111", bairro: "Centro", servico: "Passeador de Cães", endereco: "Rua S, 260", foto: "" },
    { nome: "Paula Cão", telefone: "(98) 92222-3333", bairro: "Vila Bela", servico: "Passeador de Cães", endereco: "Av. T, 270", foto: "" }
  ],
  "Zelador": [
    { nome: "José Zelador", telefone: "(98) 93333-4444", bairro: "Vila Nova", servico: "Zelador", endereco: "Rua U, 280", foto: "" },
    { nome: "Mário Morador", telefone: "(98) 94444-5555", bairro: "Centro", servico: "Zelador", endereco: "Av. V, 290", foto: "" }
  ],
  "Técnico de Informática": [
    { nome: "Renato Byte", telefone: "(98) 95555-6666", bairro: "Centro", servico: "Técnico de Informática", endereco: "Rua W, 300", foto: "" },
    { nome: "Luciana PC", telefone: "(98) 96666-7777", bairro: "Vila do Sol", servico: "Técnico de Informática", endereco: "Av. X, 310", foto: "" }
  ],
  "Babá": [
    { nome: "Mariana Criança", telefone: "(98) 93333-6666", bairro: "Centro", servico: "Babá", endereco: "Rua Y, 320", foto: "" },
    { nome: "Laura Cuidadora", telefone: "(98) 94444-7777", bairro: "Vila Nova", servico: "Babá", endereco: "Av. Z, 330", foto: "" }
  ],
  "Cuidadores de Idosos": [
    { nome: "Janaína Cuidados", telefone: "(98) 91234-5678", bairro: "Vila Mariana", servico: "Cuidadores de Idosos", endereco: "Rua A1, 340", foto: "" },
    { nome: "Carlos Senior", telefone: "(98) 92345-6789", bairro: "Vila Bela", servico: "Cuidadores de Idosos", endereco: "Av. B1, 350", foto: "" }
  ],
  "Pet Sitter": [
    { nome: "Juliana Pets", telefone: "(98) 93456-7890", bairro: "Centro", servico: "Pet Sitter", endereco: "Rua C1, 360", foto: "" },
    { nome: "Paula Pet", telefone: "(98) 94567-8901", bairro: "Vila Nova", servico: "Pet Sitter", endereco: "Av. D1, 370", foto: "" }
  ],
  "Mudanças": [
    { nome: "Ricardo Mudar", telefone: "(98) 96677-8888", bairro: "Centro", servico: "Mudanças", endereco: "Rua E1, 380", foto: "" },
    { nome: "Luiz Móvel", telefone: "(98) 97788-9999", bairro: "Vila Nova", servico: "Mudanças", endereco: "Av. F1, 390", foto: "" }
  ],
  "Dedetizador": [
    { nome: "Carlos Praga", telefone: "(98) 98888-0000", bairro: "Centro", servico: "Dedetizador", endereco: "Rua G1, 400", foto: "" },
    { nome: "Lucas Insetos", telefone: "(98) 99999-1111", bairro: "Vila Nova", servico: "Dedetizador", endereco: "Av. H1, 410", foto: "" }
  ],
  "Instalação de Painel Solar": [
    { nome: "Ricardo Solar", telefone: "(98) 98888-2222", bairro: "Centro", servico: "Instalação de Painel Solar", endereco: "Rua I1, 420", foto: "" },
    { nome: "Fernando Solar", telefone: "(98) 97777-3333", bairro: "Vila Nova", servico: "Instalação de Painel Solar", endereco: "Av. J1, 430", foto: "" }
  ],
  "Técnico de Ar Condicionado": [
    { nome: "Carlos Frio", telefone: "(98) 95555-4444", bairro: "Centro", servico: "Técnico de Ar Condicionado", endereco: "Rua K1, 440", foto: "" },
    { nome: "Luciano Clima", telefone: "(98) 94444-5555", bairro: "Vila Nova", servico: "Técnico de Ar Condicionado", endereco: "Av. L1, 450", foto: "" }
  ],
  "Chaveiro": [
    { nome: "Ricardo Chave", telefone: "(98) 93333-6666", bairro: "Centro", servico: "Chaveiro", endereco: "Rua M1, 460", foto: "" },
    { nome: "Carlos Fechadura", telefone: "(98) 92222-7777", bairro: "Vila Nova", servico: "Chaveiro", endereco: "Av. N1, 470", foto: "" }
  ],
  "Pedreiro": [
    { nome: "Paulo Pedra", telefone: "(98) 96666-7777", bairro: "Centro", servico: "Pedreiro", endereco: "Rua O1, 480", foto: "" },
    { nome: "Lucas Tijolo", telefone: "(98) 97777-8888", bairro: "Vila Nova", servico: "Pedreiro", endereco: "Av. P1, 490", foto: "" }
  ],
  "Estofador": [
    { nome: "Ricardo Estofado", telefone: "(98) 98888-0000", bairro: "Centro", servico: "Estofador", endereco: "Rua Q1, 500", foto: "" },
    { nome: "Luciana Sofá", telefone: "(98) 97777-1111", bairro: "Vila Nova", servico: "Estofador", endereco: "Av. R1, 510", foto: "" }
  ],
  "Piscineiro": [
    { nome: "Carlos Água", telefone: "(98) 92222-3333", bairro: "Centro", servico: "Piscineiro", endereco: "Rua S1, 520", foto: "" },
    { nome: "Joaquim Piscina", telefone: "(98) 93333-4444", bairro: "Vila Nova", servico: "Piscineiro", endereco: "Av. T1, 530", foto: "" }
  ],
  "Professor Particular": [
    { nome: "Renato Aula", telefone: "(98) 96677-8888", bairro: "Centro", servico: "Professor Particular", endereco: "Rua U1, 540", foto: "" },
    { nome: "Luciana Ensino", telefone: "(98) 97788-9999", bairro: "Vila Nova", servico: "Professor Particular", endereco: "Av. V1, 550", foto: "" }
  ]
};

let servicoSelecionado = null;
let profissionaisAtuais = [];

const campoBusca = document.getElementById("campoBusca");
const formBusca = document.getElementById("formBusca");

// Atualiza placeholder conforme contexto
function atualizarPlaceholder() {
  if (!servicoSelecionado) {
    campoBusca.placeholder = "Buscar por serviço...";
  } else {
    campoBusca.placeholder = "Buscar por bairro...";
  }
}

// Monta os cards de serviço
function montarServicos() {
  const grid = document.getElementById("gridServicos");
  servicos.forEach(servico => {
    const card = document.createElement("div");
    card.classList.add("card-servico");
    card.innerHTML = `<i class="fa-solid ${servico.icone}"></i><span class="descricao">${servico.nome}</span>`;
    card.addEventListener("click", () => mostrarProfissionais(servico.nome));
    grid.appendChild(card);
  });
  atualizarPlaceholder();
}

// Exibe profissionais daquele serviço
function mostrarProfissionais(servico) {
  servicoSelecionado = servico;
  profissionaisAtuais = profissionais[servico] || [];
  document.getElementById("secaoServicos").style.display = "none";
  document.getElementById("listaProfissionais").style.display = "block";
  campoBusca.value = "";
  atualizarPlaceholder();
  renderizarProfissionais(profissionaisAtuais);
}

// Renderiza cards de profissionais
function renderizarProfissionais(lista) {
  const container = document.getElementById("cardsProfissionais");
  container.innerHTML = "";
  if (lista.length === 0) {
    container.innerHTML = `<p>Sem profissionais cadastrados para <strong>${servicoSelecionado}</strong>.</p>`;
    return;
  }
  lista.forEach(prof => {
    const card = document.createElement("div");
    card.classList.add("card-profissional");
    card.innerHTML = `
      <img src="${prof.foto || 'https://via.placeholder.com/120'}" alt="Foto de ${prof.nome}" class="foto-profissional">
      <h3>${prof.nome}</h3>
      <p><strong>Bairro:</strong> ${prof.bairro}</p>
    `;
    card.onclick = () => abrirModalProfissional(prof);
    container.appendChild(card);
  });
}

// Funções de modal
function abrirModalProfissional(prof) {
  const modal = document.getElementById("modalProfissional");
  const conteudo = document.getElementById("conteudoModal");
  conteudo.innerHTML = `
    <span class="botao-fechar" onclick="fecharModal()">&times;</span>
    <img src="${prof.foto || 'https://via.placeholder.com/150'}" alt="Foto de ${prof.nome}">
    <h2>${prof.nome}</h2>
    <p><strong>Serviço:</strong> ${prof.servico}</p>
    <p><strong>Endereço:</strong> ${prof.endereco}</p>
    <p><strong>Bairro:</strong> ${prof.bairro}</p>
    <a href="https://wa.me/${prof.telefone.replace(/\D/g,'')}" target="_blank" class="botao-whatsapp">
      <i class="fa-brands fa-whatsapp"></i> Contactar via WhatsApp
    </a>
  `;
  modal.style.display = "flex";
}
function fecharModal() {
  document.getElementById("modalProfissional").style.display = "none";
}

// Volta para lista de serviços
function voltarServicos() {
  servicoSelecionado = null;
  profissionaisAtuais = [];
  document.getElementById("listaProfissionais").style.display = "none";
  document.getElementById("secaoServicos").style.display = "block";
  campoBusca.value = "";
  atualizarPlaceholder();
  // mostra todos os cards de serviço
  document.querySelectorAll('.card-servico').forEach(c => c.style.display = 'flex');
}

// Tratadores de evento
window.addEventListener("DOMContentLoaded", () => {
  montarServicos();

  // Botão Início
  document.getElementById("btnInicio").addEventListener("click", e => {
    e.preventDefault();
    voltarServicos();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Filtro dinâmico
  campoBusca.addEventListener("input", () => {
    const termo = campoBusca.value.toLowerCase();
    if (!servicoSelecionado) {
      document.querySelectorAll('.card-servico').forEach(card => {
        const txt = card.textContent.toLowerCase();
        card.style.display = termo === "" || txt.startsWith(termo) ? 'flex' : 'none';
      });
    } else {
      const filtrados = profissionaisAtuais.filter(p => p.bairro.toLowerCase().includes(termo));
      renderizarProfissionais(filtrados);
    }
  });

  // Submit do form (lupa)
  formBusca.addEventListener("submit", e => {
    e.preventDefault();
    campoBusca.dispatchEvent(new Event('input'));
  });
});

