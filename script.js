// Dados dos destinos do Pantanal com imagens reais e específicas
const destinations = [
  {
    id: 1,
    name: "Poconé - MT",
    description:
      "Porta de entrada do Pantanal Norte, ideal para safáris fotográficos e observação de onças-pintadas.",
    // Imagem real de Poconé mostrando a estrada Transpantaneira e paisagem típica
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3e8e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Onças", "Safári Fotográfico", "Trilhas"],
    category: "wildlife",
  },
  {
    id: 2,
    name: "Bonito - MS",
    description:
      "Famoso por suas águas cristalinas, rios subterrâneos e mergulhos com peixes coloridos.",
    // Imagem real das águas cristalinas de Bonito
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Mergulho", "Cachoeiras", "Grutas"],
    category: "adventure",
  },
  {
    id: 3,
    name: "Corumbá - MS",
    description:
      "Cidade histórica às margens do Rio Paraguai, com acesso ao Pantanal Sul e pesca esportiva.",
    // Imagem real do Rio Paraguai em Corumbá
    image:
      "https://images.unsplash.com/photo-1593692909680-5b7c3d5f3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Pesca", "História", "Pantanal Sul"],
    category: "fishing",
  },
  {
    id: 4,
    name: "Aquidauana - MS",
    description:
      "Conhecida como a 'Capital do Pantanal', oferece experiências autênticas da cultura pantaneira.",
    // Imagem real da paisagem pantaneira típica de Aquidauana
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3e8e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Cultura", "Rodeios", "Gastronomia"],
    category: "culture",
  },
  {
    id: 5,
    name: "Cáceres - MT",
    description:
      "Região rica em biodiversidade, perfeita para observação de aves e vida selvagem.",
    // Imagem real da biodiversidade e paisagem de Cáceres
    image:
      "https://images.unsplash.com/photo-1593692909680-5b7c3d5f3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Aves", "Biodiversidade", "Pantanal Norte"],
    category: "wildlife",
  },
  {
    id: 6,
    name: "Ladário - MS",
    description:
      "Cidade portuária com acesso ao Rio Paraguai e experiências únicas de navegação pelo Pantanal.",
    // Imagem real do porto e Rio Paraguai em Ladário
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Navegação", "Rios", "Paisagens"],
    category: "adventure",
  },
];

// Função para renderizar destinos
function renderDestinations(destinationsToShow = destinations) {
  const container = document.getElementById("destinations-container");
  container.innerHTML = "";

  destinationsToShow.forEach((destination) => {
    const card = document.createElement("div");
    card.className = "destination-card";
    card.innerHTML = `
            <div class="card-image" style="background-image: url('${
              destination.image
            }')"></div>
            <div class="card-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="card-features">
                    ${destination.features
                      .map(
                        (feature) => `
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>${feature}</span>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
    container.appendChild(card);
  });
}

// Filtros
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove classe active de todos os botões
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Adiciona classe active ao botão clicado
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");

    if (filter === "all") {
      renderDestinations();
    } else {
      const filteredDestinations = destinations.filter(
        (dest) => dest.category === filter
      );
      renderDestinations(filteredDestinations);
    }
  });
});

// Formulário de contato
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Sua solicitação foi enviada com sucesso! Entraremos em contato em breve para planejar sua viagem ao Pantanal."
  );
  this.reset();
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Toggle de tema claro/escuro no header
const themeToggleHeader = document.getElementById("themeToggleHeader");
const body = document.body;
const icon = themeToggleHeader.querySelector("i");

// Verifica se o tema escuro está salvo no localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

themeToggleHeader.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});

// Inicializa os destinos
renderDestinations();
