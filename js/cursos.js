/* JAVASCRIPT - PÁGINA CURSOS */

// 1. MENU MOBILE
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const aberto = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(aberto));
    });
}

// 2. SISTEMA DE XP
const xpTotal = Math.max(
    0,
    Number(localStorage.getItem("conectatech_xp")) || 0
);

const niveis = [0, 100, 250, 500, 1000];

let nivelAtual = 1;

for (let i = 0; i < niveis.length; i++) {
    if (xpTotal >= niveis[i]) {
        nivelAtual = i + 1;
    }
}

const xpInicio = niveis[nivelAtual - 1];
const xpProximo = niveis[nivelAtual];

const levelElement = document.getElementById("course-player-level");
const xpTextElement = document.getElementById("course-xp-text");
const xpBarElement = document.getElementById("course-xp-bar");

levelElement.textContent = nivelAtual;

if (xpProximo !== undefined) {
    const xpNaFaixa = xpTotal - xpInicio;
    const xpNecessario = xpProximo - xpInicio;
    const porcentagem = Math.min(100, xpNaFaixa / xpNecessario * 100);

    xpTextElement.textContent = `${xpNaFaixa} / ${xpNecessario} XP`;
    xpBarElement.style.width = `${porcentagem}%`;
} else {
    xpTextElement.textContent = `${xpTotal} XP acumulados`;
    xpBarElement.style.width = "100%";
}

// 3. FILTROS DOS CURSOS
const filtros = document.querySelectorAll(".filter-btn");
const cursos = document.querySelectorAll(".world-card");
const contador = document.getElementById("courses-count");

filtros.forEach((botao) => {
    botao.addEventListener("click", () => {
        filtros.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        botao.classList.add("active");
        botao.setAttribute("aria-pressed", "true");

        const filtro = botao.dataset.filter;
        let quantidade = 0;

        cursos.forEach((curso) => {
            const mostrar = filtro === "todos" ||
                curso.dataset.level === filtro;

            curso.hidden = !mostrar;

            if (mostrar) quantidade++;
        });

        contador.textContent = `${quantidade} curso${quantidade !== 1 ? "s" : ""}`;
    });
});

// 4. DESBLOQUEIO POR NÍVEL
const bloqueados = document.querySelectorAll(".locked-button");
const mensagem = document.getElementById("courses-message");

bloqueados.forEach((botao) => {
    const nivelNecessario = Number(botao.dataset.requiredLevel);

    if (nivelAtual >= nivelNecessario) {
        const card = botao.closest(".world-card");
        const nomeCurso = card.querySelector("h3").textContent;
        const cursoId = nomeCurso === "JavaScript" ? "javascript" : "python";

        const link = document.createElement("a");
        link.href = `detalhes-curso.html?curso=${cursoId}`;
        link.className = "world-button";
        link.textContent = "Começar aventura →";

        botao.replaceWith(link);
        card.classList.remove("locked");

        card.querySelector("small").textContent = "Mundo desbloqueado!";
    } else {
        botao.addEventListener("click", () => {
            mensagem.textContent =
                `🔒 Você precisa alcançar o nível ${nivelNecessario} para desbloquear este mundo.`;
        });
    }
});