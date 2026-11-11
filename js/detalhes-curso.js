/* ==========================================
   CONECTATECH - DETALHES DO CURSO
   Mapa original + módulos + exercícios
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  // DADOS DOS CURSOS
  const CURSOS = {
    html: {
      nome: "HTML5",
      dificuldade: "Iniciante",
      descricao: "Aprenda a construir páginas web e desenvolva seus primeiros projetos.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      mundo: "assets/images/mundo-html.png",
      tempo: "2 horas",
      modulos: [
        "Introdução ao HTML",
        "Estrutura da Página",
        "Elementos Principais",
        "Projeto Prático"
      ]
    },

    css: {
      nome: "CSS3",
      dificuldade: "Iniciante",
      descricao: "Aprenda cores, fontes, layouts e estilização de páginas web.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      mundo: "assets/images/mundo-css.png",
      tempo: "3 horas",
      modulos: [
        "Introdução ao CSS",
        "Cores e Fontes",
        "Flexbox e Grid",
        "Projeto Prático"
      ]
    },

    js: {
      nome: "JavaScript",
      dificuldade: "Intermediário",
      descricao: "Aprenda a criar páginas interativas usando JavaScript.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      mundo: "assets/images/mundo-javascript.png",
      tempo: "4 horas",
      modulos: [
        "Introdução ao JavaScript",
        "Variáveis e Tipos",
        "Condicionais e Repetições",
        "Funções e Eventos",
        "Projeto Interativo"
      ]
    },

    python: {
      nome: "Python",
      dificuldade: "Iniciante",
      descricao: "Aprenda lógica, algoritmos e programação com Python.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      mundo: "assets/images/mundo-python.png",
      tempo: "5 horas",
      modulos: [
        "Introdução ao Python",
        "Variáveis e Operadores",
        "Condições e Repetições",
        "Funções",
        "Projeto Final"
      ]
    }
  };

  const $ = id => document.getElementById(id);

  const parametros = new URLSearchParams(window.location.search);

  let cursoId = (parametros.get("curso") || "html").toLowerCase();

  // O exercicios.js original usa "js".
  if (cursoId === "javascript") {
    cursoId = "js";
  }

  if (!CURSOS[cursoId]) {
    cursoId = "html";
  }

  const curso = CURSOS[cursoId];

  const chaveProgresso = `conectatech_progresso_${cursoId}`;

  // IMAGENS REAIS DA PASTA ASSETS
  const IMAGENS = {
    mapaHtml: "assets/images/mapa-fases-html.png",
    castelo: "assets/images/castelo-banner.png"
  };

  // POSIÇÕES DOS BOTÕES SOBRE O MAPA
  // Porcentagens relativas à imagem.
  const POSICOES = [
    { x: 15, y: 77 },
    { x: 36, y: 57 },
    { x: 59, y: 41 },
    { x: 80, y: 24 },
    { x: 50, y: 13 }
  ];

  // ========================================
  // PROGRESSO E XP
  // ========================================

  function lerProgresso() {
    try {
      const dados = JSON.parse(
        localStorage.getItem(chaveProgresso) || "{}"
      );

      const lista = Array.isArray(dados.concluidos)
        ? dados.concluidos
        : [];

      let concluidos = 0;

      // Só considera módulos concluídos em sequência.
      while (
        concluidos < curso.modulos.length &&
        lista.includes(concluidos + 1)
      ) {
        concluidos++;
      }

      return concluidos;
    } catch (erro) {
      return 0;
    }
  }

  function lerXP() {
    return Math.max(
      0,
      Number(localStorage.getItem("conectatech_xp")) || 0
    );
  }

  function recompensa(numero) {
    return 25 + (numero - 1) * 15;
  }

  function linkExercicio(numero) {
    return `exercicios.html?curso=${cursoId}&modulo=${numero}`;
  }

  // ========================================
  // PERFIL DO JOGADOR
  // ========================================

  function atualizarPerfil() {
    const xp = lerXP();

    const nivel = Math.floor(xp / 100) + 1;
    const xpAtual = xp % 100;

    $("ct-level").textContent = `Nível ${nivel}`;

    $("ct-xp-text").textContent = `${xpAtual} / 100 XP`;

    $("ct-xp-fill").style.width = `${xpAtual}%`;

    const avatar = localStorage.getItem("conectatech_avatar");

    if (avatar && /^[a-z0-9-]+$/.test(avatar)) {
      $("ct-avatar").src =
        `assets/images/avatares/${avatar}.png`;
    }
  }

  // ========================================
  // INFORMAÇÕES E IMAGENS DO CURSO
  // ========================================

  function carregarCurso() {
    $("ct-course-title").textContent = curso.nome;

    $("ct-course-description").textContent =
      curso.descricao;

    $("ct-difficulty").textContent =
      curso.dificuldade;

    $("ct-course-logo").src = curso.logo;

    // Castelo original no banner.
    $("ct-world-image").src = IMAGENS.castelo;

    const xpTotal = curso.modulos.reduce(
      (total, _, indice) => total + recompensa(indice + 1),
      0
    );

    $("ct-course-stats").textContent =
      `📖 ${curso.modulos.length} módulos  •  ` +
      `⚡ Até ${xpTotal} XP  •  ` +
      `🕒 ${curso.tempo}`;

    $("ct-exercise-heading").textContent =
      `🎮 Exercícios de ${curso.nome}`;

    // O ZIP contém um mapa completo de HTML.
    // Nos outros cursos, utiliza o mundo original
    // correspondente, sem inventar caminhos de imagens.
    $("ct-map-image").src =
      cursoId === "html"
        ? IMAGENS.mapaHtml
        : curso.mundo;
  }

  // ========================================
  // CRIAÇÃO DE ELEMENTOS
  // ========================================

  function criar(tag, texto = "", classe = "") {
    const elemento = document.createElement(tag);

    elemento.textContent = texto;
    elemento.className = classe;

    return elemento;
  }

  // ========================================
  // MAPA DE FASES
  // ========================================

  function mostrarMapa() {
    const container = $("ct-map-stages");
    const concluidos = lerProgresso();

    container.replaceChildren();

    curso.modulos.forEach((nome, indice) => {
      const numero = indice + 1;

      const concluido = numero <= concluidos;
      const liberado = numero <= concluidos + 1;

      const posicao = POSICOES[indice];

      const botao = document.createElement("button");

      botao.type = "button";

      botao.className = [
        "ct-stage",
        concluido
          ? "done"
          : liberado
            ? "available"
            : "locked"
      ].join(" ");

      botao.style.setProperty("--x", `${posicao.x}%`);
      botao.style.setProperty("--y", `${posicao.y}%`);

      botao.title = `Módulo ${numero}: ${nome}`;

      botao.setAttribute(
        "aria-label",
        `Módulo ${numero}: ${nome} — ${
          concluido
            ? "Concluído"
            : liberado
              ? "Disponível"
              : "Bloqueado"
        }`
      );

      botao.disabled = !liberado;

      const icone = criar(
        "span",
        concluido ? "✓" : liberado ? String(numero) : "🔒"
      );

      const legenda = criar(
        "span",
        `Fase ${numero}`,
        "ct-stage-label"
      );

      botao.append(icone, legenda);

      if (liberado) {
        botao.addEventListener("click", () => {
          window.location.href = linkExercicio(numero);
        });
      }

      container.appendChild(botao);
    });
  }

  // ========================================
  // MÓDULOS DA TRILHA
  // ========================================

  function mostrarTrilha() {
    const container = $("ct-trail-list");
    const concluidos = lerProgresso();

    container.replaceChildren();

    curso.modulos.forEach((nome, indice) => {
      const numero = indice + 1;

      const concluido = numero <= concluidos;
      const liberado = numero <= concluidos + 1;

      const card = criar("article", "", "ct-module");

      const titulo = criar(
        "h3",
        `${concluido ? "✅" : liberado ? "🎮" : "🔒"} ` +
        `Módulo ${numero} — ${nome}`
      );

      const status = criar(
        "p",
        concluido
          ? "Módulo concluído!"
          : liberado
            ? "Disponível para começar."
            : "Conclua o módulo anterior para desbloquear."
      );

      card.append(titulo, status);

      if (liberado) {
        const link = criar(
          "a",
          concluido ? "Refazer desafio →" : "Começar desafio →"
        );

        link.href = linkExercicio(numero);

        card.appendChild(link);
      }

      container.appendChild(card);
    });

    const percentual = Math.round(
      (concluidos / curso.modulos.length) * 100
    );

    $("ct-progress").textContent =
      `${concluidos} de ${curso.modulos.length} módulos concluídos`;

    $("ct-progress-fill").style.width = `${percentual}%`;

    $("ct-progress-percent").textContent = `${percentual}%`;
  }

  // ========================================
  // CONTEÚDO
  // ========================================

  function mostrarConteudo() {
    const container = $("ct-content-list");

    container.replaceChildren();

    curso.modulos.forEach((nome, indice) => {
      const numero = indice + 1;

      const card = criar("article", "", "ct-module");

      const titulo = criar(
        "h3",
        `📚 Módulo ${numero} — ${nome}`
      );

      const descricao = criar(
        "p",
        "Estude os conceitos deste módulo e depois " +
        "resolva as questões para avançar."
      );

      card.append(titulo, descricao);

      container.appendChild(card);
    });
  }

  // ========================================
  // EXERCÍCIOS
  // ========================================

  function mostrarExercicios() {
    const container = $("ct-challenges");

    container.replaceChildren();

    const concluidos = lerProgresso();

    curso.modulos.forEach((nome, indice) => {
      const numero = indice + 1;

      const concluido = numero <= concluidos;
      const liberado = numero <= concluidos + 1;

      const card = criar(
        "article",
        "",
        `ct-challenge ${liberado ? "" : "locked"}`
      );

      const status = criar(
        "small",
        concluido
          ? "✅ CONCLUÍDO"
          : liberado
            ? "🎮 DISPONÍVEL"
            : "🔒 BLOQUEADO"
      );

      const titulo = criar(
        "h3",
        `Módulo ${numero} — ${nome}`
      );

      const descricao = criar(
        "p",
        `📝 10 perguntas • 🎯 7 acertos para passar • ` +
        `⭐ +${recompensa(numero)} XP`
      );

      const botao = document.createElement(
        liberado ? "a" : "span"
      );

      botao.className =
        `ct-action ${liberado ? "" : "disabled"}`;

      botao.textContent = concluido
        ? "↻ Refazer atividade"
        : liberado
          ? "Iniciar atividade →"
          : "🔒 Bloqueado";

      if (liberado) {
        botao.href = linkExercicio(numero);
      }

      card.append(status, titulo, descricao, botao);

      container.appendChild(card);
    });
  }

  // ========================================
  // BOTÃO CONTINUAR
  // ========================================

  function atualizarBotao() {
    const concluidos = lerProgresso();

    const botao = $("ct-continue");

    if (concluidos >= curso.modulos.length) {
      botao.textContent = "🏆 Curso concluído!";
      botao.href =
        `detalhes-curso.html?curso=${cursoId}&aba=exercicios`;
      return;
    }

    const proximo = concluidos + 1;

    botao.textContent = `Continuar módulo ${proximo} →`;

    botao.href = linkExercicio(proximo);
  }

  // ========================================
  // ABAS
  // ========================================

  function abrirAba(nome) {
    const abasValidas = [
      "trilha",
      "conteudo",
      "exercicios",
      "projetos"
    ];

    if (!abasValidas.includes(nome)) {
      nome = "trilha";
    }

    document.querySelectorAll(".ct-tab").forEach(botao => {
      const ativa = botao.dataset.tab === nome;

      botao.classList.toggle("active", ativa);
      botao.setAttribute("aria-selected", String(ativa));
    });

    document.querySelectorAll(".ct-panel").forEach(painel => {
      painel.classList.toggle(
        "active",
        painel.id === `panel-${nome}`
      );
    });
  }

  document.querySelectorAll(".ct-tab").forEach(botao => {
    botao.addEventListener("click", () => {
      abrirAba(botao.dataset.tab);
    });
  });

  $("ct-missions").addEventListener("click", evento => {
    evento.preventDefault();
    abrirAba("exercicios");
  });

  // ========================================
  // ATUALIZAÇÃO GERAL
  // ========================================

  function atualizarTudo() {
    atualizarPerfil();
    mostrarMapa();
    mostrarTrilha();
    mostrarConteudo();
    mostrarExercicios();
    atualizarBotao();
  }

  carregarCurso();
  atualizarTudo();

  // Atualiza o progresso ao voltar dos exercícios.
  window.addEventListener("pageshow", atualizarTudo);
  window.addEventListener("focus", atualizarTudo);

  const abaInicial = parametros.get("aba") || "trilha";

  abrirAba(abaInicial);
});