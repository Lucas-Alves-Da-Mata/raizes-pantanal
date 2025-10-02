// Filtros para os cards de destinos
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove classe active de todos os botões
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Adiciona classe active ao botão clicado
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");
    const cards = document.querySelectorAll(".destination-card");

    if (filter === "all") {
      cards.forEach((card) => {
        card.style.display = "block";
      });
    } else {
      cards.forEach((card) => {
        const cardText = card.textContent.toLowerCase();
        if (
          filter === "wildlife" &&
          (cardText.includes("onças") ||
            cardText.includes("aves") ||
            cardText.includes("vida selvagem"))
        ) {
          card.style.display = "block";
        } else if (
          filter === "fishing" &&
          (cardText.includes("pesca") || cardText.includes("fish"))
        ) {
          card.style.display = "block";
        } else if (
          filter === "culture" &&
          (cardText.includes("cultura") || cardText.includes("tradicional"))
        ) {
          card.style.display = "block";
        } else if (
          filter === "adventure" &&
          (cardText.includes("aventura") ||
            cardText.includes("navegação") ||
            cardText.includes("mergulho"))
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
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
