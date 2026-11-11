// ==========================================
// CONECTATECH - JAVASCRIPT DA PÁGINA CURSOS
// ==========================================


// 1. MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const aberto = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(aberto)
        );
    });
}


// 2. SISTEMA DE XP E NÍVEIS

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

const levelElement = document.getElementById(
    "course-player-level"
);

const xpTextElement = document.getElementById(
    "course-xp-text"
);

const xpBarElement = document.getElementById(
    "course-xp-bar"
);

if (levelElement) {
    levelElement.textContent = nivelAtual;
}

if (xpTextElement && xpBarElement) {

    if (xpProximo !== undefined) {

        const xpNaFaixa = xpTotal - xpInicio;
        const xpNecessario = xpProximo - xpInicio;

        const porcentagem = Math.min(
            100,
            (xpNaFaixa / xpNecessario) * 100
        );

        xpTextElement.textContent =
            `${xpNaFaixa} / ${xpNecessario} XP`;

        xpBarElement.style.width =
            `${porcentagem}%`;

    } else {

        xpTextElement.textContent =
            `${xpTotal} XP acumulados`;

        xpBarElement.style.width = "100%";
    }
}


// 3. FILTROS DOS CURSOS

const filtros = document.querySelectorAll(".filter-btn");
const cursos = document.querySelectorAll(".world-card");

const contador = document.getElementById(
    "courses-count"
);

filtros.forEach((botao) => {

    botao.addEventListener("click", () => {

        filtros.forEach((item) => {
            item.classList.remove("active");

            item.setAttribute(
                "aria-pressed",
                "false"
            );
        });

        botao.classList.add("active");

        botao.setAttribute(
            "aria-pressed",
            "true"
        );

        const filtro = botao.dataset.filter;

        let quantidade = 0;

        cursos.forEach((curso) => {

            const mostrar =
                filtro === "todos" ||
                curso.dataset.level === filtro;

            curso.hidden = !mostrar;

            if (mostrar) {
                quantidade++;
            }
        });

        if (contador) {
            contador.textContent =
                `${quantidade} curso${quantidade !== 1 ? "s" : ""}`;
        }
    });
});


// 4. DESBLOQUEIO DOS CURSOS POR NÍVEL

const bloqueados = document.querySelectorAll(
    ".locked-button"
);

const mensagem = document.getElementById(
    "courses-message"
);

bloqueados.forEach((botao) => {

    const nivelNecessario = Number(
        botao.dataset.requiredLevel
    );

    if (nivelAtual >= nivelNecessario) {

        const card = botao.closest(".world-card");

        const nomeCurso = card.querySelector(
            "h3"
        ).textContent;

        const cursoId =
            nomeCurso === "JavaScript"
                ? "javascript"
                : "python";

        const link = document.createElement("a");

        link.href =
            `detalhes-curso.html?curso=${cursoId}`;

        link.className = "world-button";

        link.textContent = "Começar aventura →";

        botao.replaceWith(link);

        card.classList.remove("locked");

        const texto = card.querySelector("small");

        if (texto) {
            texto.textContent = "Mundo desbloqueado!";
        }

    } else {

        botao.addEventListener("click", () => {

            if (mensagem) {
                mensagem.textContent =
                    `🔒 Você precisa alcançar o nível ${nivelNecessario} para desbloquear este mundo.`;
            }
        });
    }
});


// 5. SISTEMA DE ESCOLHA DE PERSONAGEM

const personagens = [
    {
        id: "aventureiro",
        nome: "Aventureiro"
    },
    {
        id: "exploradora",
        nome: "Exploradora"
    },
    {
        id: "programador",
        nome: "Programador"
    },
    {
        id: "mago-tech",
        nome: "Mago Tech"
    },
    {
        id: "guerreiro",
        nome: "Guerreiro"
    },
    {
        id: "ninja",
        nome: "Ninja"
    },
    {
        id: "hacker",
        nome: "Hacker"
    },
    {
        id: "robo-ia",
        nome: "Robô IA"
    }
];

const avatarModal = document.getElementById(
    "avatar-modal"
);

const avatarGrid = document.getElementById(
    "avatar-grid"
);

const avatarImage = document.getElementById(
    "player-avatar-image"
);

const openAvatar = document.getElementById(
    "open-avatar-modal"
);

const closeAvatar = document.getElementById(
    "close-avatar-modal"
);

const cancelAvatar = document.getElementById(
    "cancel-avatar"
);

const confirmAvatar = document.getElementById(
    "confirm-avatar"
);


// 6. RECUPERAR PERSONAGEM SALVO

const avatarSalvo = localStorage.getItem(
    "conectatech_avatar"
);

let avatarAtual = personagens.some(
    personagem => personagem.id === avatarSalvo
)
    ? avatarSalvo
    : "aventureiro";

let avatarSelecionado = avatarAtual;


// 7. CAMINHO DAS IMAGENS

function caminhoAvatar(id) {
    return `assets/images/avatares/${id}.png`;
}


// 8. ATUALIZAR FOTO DE PERFIL

function atualizarFotoPerfil() {

    const personagem = personagens.find(
        item => item.id === avatarAtual
    );

    if (avatarImage && personagem) {

        avatarImage.src = caminhoAvatar(
            personagem.id
        );

        avatarImage.alt =
            `Avatar ${personagem.nome}`;
    }
}


// 9. CRIAR OS BOTÕES DOS PERSONAGENS

function renderizarPersonagens() {

    if (!avatarGrid) {
        return;
    }

    avatarGrid.innerHTML = "";

    personagens.forEach((personagem) => {

        const botao = document.createElement(
            "button"
        );

        botao.type = "button";

        botao.className = "avatar-option";

        const selecionado =
            personagem.id === avatarSelecionado;

        if (selecionado) {
            botao.classList.add("selected");
        }

        botao.setAttribute(
            "aria-pressed",
            String(selecionado)
        );

        const imagem = document.createElement(
            "img"
        );

        imagem.src = caminhoAvatar(
            personagem.id
        );

        imagem.alt = personagem.nome;

        const nome = document.createElement(
            "span"
        );

        nome.textContent = personagem.nome;

        botao.append(imagem, nome);

        botao.addEventListener("click", () => {

            avatarSelecionado = personagem.id;

            renderizarPersonagens();
        });

        avatarGrid.appendChild(botao);
    });
}


// 10. ABRIR JANELA DE PERSONAGENS

function abrirModalAvatar() {

    avatarSelecionado = avatarAtual;

    renderizarPersonagens();

    avatarModal.hidden = false;

    document.body.style.overflow = "hidden";

    closeAvatar.focus();
}


// 11. FECHAR JANELA

function fecharModalAvatar() {

    avatarModal.hidden = true;

    document.body.style.overflow = "";

    openAvatar.focus();
}


// 12. EVENTOS DOS BOTÕES

if (
    avatarModal &&
    avatarGrid &&
    avatarImage &&
    openAvatar &&
    closeAvatar &&
    cancelAvatar &&
    confirmAvatar
) {

    openAvatar.addEventListener(
        "click",
        abrirModalAvatar
    );

    closeAvatar.addEventListener(
        "click",
        fecharModalAvatar
    );

    cancelAvatar.addEventListener(
        "click",
        fecharModalAvatar
    );

    confirmAvatar.addEventListener("click", () => {

        avatarAtual = avatarSelecionado;

        localStorage.setItem(
            "conectatech_avatar",
            avatarAtual
        );

        atualizarFotoPerfil();

        fecharModalAvatar();
    });

    // Fechar clicando fora da janela
    avatarModal.addEventListener(
        "click",
        (evento) => {

            if (evento.target === avatarModal) {
                fecharModalAvatar();
            }
        }
    );

    // Fechar com a tecla ESC
    document.addEventListener(
        "keydown",
        (evento) => {

            if (
                evento.key === "Escape" &&
                !avatarModal.hidden
            ) {
                fecharModalAvatar();
            }
        }
    );
}


// 13. EXIBIR O PERSONAGEM SALVO

atualizarFotoPerfil();