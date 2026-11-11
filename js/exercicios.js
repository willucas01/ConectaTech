/* ==========================================
   CONECTATECH - SISTEMA DE EXERCÍCIOS
   10 perguntas por fase
   Nota mínima: 7,0
   ========================================== */

const NOTA_MINIMA = 7;
const TOTAL_PERGUNTAS = 10;

const NOMES = {
  html: "HTML5",
  css: "CSS3",
  js: "JavaScript",
  python: "Python"
};

// Cada questão contém:
// [pergunta, [alternativas], índice da correta]

const BANCO = {
  html: [
    [
      ["O que significa HTML?", ["HyperText Markup Language", "HighText Machine Language", "HyperTool Markup Language", "Home Text Language"], 0],
      ["Qual tag cria um título principal?", ["<p>", "<h1>", "<title>", "<head>"], 1],
      ["Qual tag cria um parágrafo?", ["<div>", "<span>", "<p>", "<br>"], 2],
      ["Qual tag cria um link?", ["<a>", "<link>", "<url>", "<href>"], 0],
      ["Qual tag insere uma imagem?", ["<image>", "<picture>", "<src>", "<img>"], 3],
      ["Qual tag quebra uma linha?", ["<br>", "<hr>", "<break>", "<line>"], 0],
      ["Qual tag cria uma lista não ordenada?", ["<ol>", "<ul>", "<li>", "<dl>"], 1],
      ["Qual tag define um item de lista?", ["<item>", "<list>", "<li>", "<ul>"], 2],
      ["Qual tag destaca texto em negrito sem significado semântico?", ["<i>", "<b>", "<u>", "<small>"], 1],
      ["Qual extensão normalmente identifica um arquivo HTML?", [".css", ".js", ".html", ".py"], 2]
    ],
    [
      ["Qual declaração identifica o HTML5?", ["<html5>", "<!DOCTYPE html>", "<doctype5>", "<head>"], 1],
      ["Onde fica o conteúdo visível da página?", ["<head>", "<meta>", "<body>", "<title>"], 2],
      ["Qual tag contém metadados?", ["<head>", "<footer>", "<main>", "<section>"], 0],
      ["Qual tag define o título da aba?", ["<h1>", "<header>", "<title>", "<label>"], 2],
      ["Qual atributo define o idioma?", ["language", "lang", "locale", "idioma"], 1],
      ["Qual tag representa o cabeçalho?", ["<header>", "<head>", "<top>", "<nav>"], 0],
      ["Qual tag representa o rodapé?", ["<bottom>", "<end>", "<footer>", "<final>"], 2],
      ["Qual tag representa navegação?", ["<menuitem>", "<aside>", "<nav>", "<main>"], 2],
      ["Qual tag representa o conteúdo principal?", ["<content>", "<main>", "<body-main>", "<primary>"], 1],
      ["Qual tag representa uma seção temática?", ["<section>", "<article-only>", "<group>", "<part>"], 0]
    ],
    [
      ["Qual atributo define o destino de um link?", ["src", "href", "alt", "target"], 1],
      ["Qual atributo define a origem de uma imagem?", ["href", "alt", "src", "title"], 2],
      ["Qual atributo descreve uma imagem?", ["alt", "src", "width", "class"], 0],
      ["Qual tag cria uma lista ordenada?", ["<ul>", "<dl>", "<ol>", "<li>"], 2],
      ["Qual tag cria uma tabela?", ["<table>", "<grid>", "<tab>", "<rows>"], 0],
      ["Qual tag representa uma linha da tabela?", ["<td>", "<tr>", "<th>", "<row>"], 1],
      ["Qual tag representa uma célula comum?", ["<th>", "<cell>", "<td>", "<tr>"], 2],
      ["Qual tag representa uma célula de cabeçalho?", ["<td>", "<th>", "<head>", "<caption>"], 1],
      ["Qual tag representa conteúdo independente?", ["<article>", "<span>", "<div>", "<label>"], 0],
      ["Qual tag representa uma divisão genérica em bloco?", ["<span>", "<div>", "<strong>", "<em>"], 1]
    ],
    [
      ["Qual tag cria um formulário?", ["<form>", "<input>", "<fieldset>", "<button>"], 0],
      ["Qual atributo torna um campo obrigatório?", ["checked", "required", "selected", "disabled"], 1],
      ["Qual tipo de input recebe senhas?", ["text", "hidden", "password", "secret"], 2],
      ["Qual tipo de input recebe e-mails?", ["mail", "email", "textmail", "address"], 1],
      ["Qual tag cria uma caixa de seleção suspensa?", ["<select>", "<textarea>", "<optionlist>", "<input>"], 0],
      ["Qual tag cria um campo de texto multilinha?", ["<input>", "<textarea>", "<text>", "<multiline>"], 1],
      ["Qual atributo associa um label ao ID do campo?", ["name", "target", "for", "href"], 2],
      ["Qual tipo de botão envia um formulário?", ["reset", "button", "submit", "send"], 2],
      ["Qual atributo define um identificador único?", ["class", "id", "name", "data"], 1],
      ["Qual atributo sugere um texto de exemplo no campo?", ["placeholder", "value-only", "hint", "example"], 0]
    ]
  ],

  css: [
    [
      ["Qual propriedade muda a cor do texto?", ["background", "color", "font", "border"], 1],
      ["Qual propriedade muda a cor de fundo?", ["background-color", "font-color", "text-color", "border-color"], 0],
      ["Qual seletor identifica uma classe?", ["#nome", ".nome", "nome", "@nome"], 1],
      ["Qual seletor identifica um ID?", [".nome", "*nome", "#nome", "@nome"], 2],
      ["Qual propriedade muda o tamanho da fonte?", ["font-size", "text-size", "font-style", "font-weight"], 0],
      ["Como deixar o texto em negrito?", ["font-weight: bold", "font-size: bold", "text-align: bold", "font-style: bold"], 0],
      ["Qual propriedade centraliza texto?", ["align: center", "text-align: center", "justify: center", "center: true"], 1],
      ["Qual propriedade arredonda bordas?", ["border-style", "border-width", "border-radius", "border-color"], 2],
      ["Qual propriedade define a largura?", ["height", "width", "size", "length"], 1],
      ["Qual propriedade define a altura?", ["height", "width", "length", "scale"], 0]
    ],
    [
      ["Qual propriedade define margem externa?", ["padding", "margin", "border", "gap"], 1],
      ["Qual propriedade define espaçamento interno?", ["padding", "margin", "outline", "space"], 0],
      ["Qual valor oculta um elemento e remove seu espaço no layout?", ["display: hidden", "opacity: 0", "display: none", "visibility: hidden"], 2],
      ["Como ativar Flexbox?", ["display: grid", "display: flex", "display: block", "position: flex"], 1],
      ["Qual propriedade alinha itens no eixo principal do Flexbox?", ["justify-content", "align-items", "text-align", "align-self"], 0],
      ["Qual propriedade alinha itens no eixo transversal do Flexbox?", ["justify-content", "align-items", "float", "margin"], 1],
      ["Qual propriedade define espaço entre itens flex?", ["margin-only", "spacing", "gap", "padding-only"], 2],
      ["Qual propriedade altera a direção do Flexbox?", ["flex-direction", "flex-align", "flex-order", "flex-flow-direction-only"], 0],
      ["Qual valor permite quebrar itens em novas linhas?", ["flex-wrap: wrap", "flex-direction: wrap", "display: wrap", "flex: wrap"], 0],
      ["Qual propriedade define a ordem visual de um item flex?", ["index", "order", "position-index", "sequence"], 1]
    ],
    [
      ["Como ativar CSS Grid?", ["display: flex", "display: grid", "position: grid", "layout: grid"], 1],
      ["Qual propriedade define colunas no Grid?", ["grid-template-columns", "grid-columns-only", "columns-template", "grid-width"], 0],
      ["O que significa 1fr no Grid?", ["Uma fração do espaço disponível", "Um pixel", "Uma linha", "Uma porcentagem fixa"], 0],
      ["Como criar duas colunas iguais?", ["grid-template-columns: 1fr 1fr", "grid: 2", "columns: 2px", "display: 2"], 0],
      ["Qual propriedade define linhas no Grid?", ["grid-template-rows", "grid-template-columns", "row-gap-only", "grid-line"], 0],
      ["Qual propriedade define espaçamento entre linhas e colunas?", ["gap", "space", "padding", "margin-collapse"], 0],
      ["Qual propriedade faz um item ocupar várias colunas?", ["grid-column", "column-span-only", "width-grid", "flex-grow"], 0],
      ["Qual valor posiciona um elemento relativamente ao seu fluxo normal?", ["position: absolute", "position: relative", "position: fixed", "position: static-only"], 1],
      ["Qual propriedade controla sobreposição de elementos posicionados?", ["layer", "z-index", "stack", "depth"], 1],
      ["Qual valor fixa um elemento à janela durante a rolagem?", ["position: fixed", "position: static", "position: relative", "position: initial"], 0]
    ],
    [
      ["Qual regra permite estilos responsivos?", ["@media", "@screen", "@device", "@responsive"], 0],
      ["Qual pseudoclasse reage ao mouse?", [":focus", ":hover", ":checked", ":active-only"], 1],
      ["Qual pseudoclasse indica foco?", [":focus", ":visited", ":hover", ":empty"], 0],
      ["Qual propriedade cria sombra?", ["box-shadow", "shadow-box", "border-shadow", "text-border"], 0],
      ["Qual propriedade cria transições suaves?", ["animation-name", "transition", "transform", "display"], 1],
      ["Qual propriedade permite transformar elementos?", ["transform", "transition", "filter-only", "position"], 0],
      ["Qual regra define quadros de animação?", ["@frames", "@keyframes", "@animate", "@motion"], 1],
      ["Qual função define valores que se adaptam a limites?", ["clamp()", "limit()", "range()", "bound()"], 0],
      ["Qual unidade é relativa à largura da viewport?", ["rem", "em", "vw", "px"], 2],
      ["Qual unidade é relativa ao tamanho da fonte raiz?", ["em", "vh", "rem", "fr"], 2]
    ]
  ],

  js: [
    [
      ["Qual palavra declara variável mutável?", ["const", "let", "fixed", "define"], 1],
      ["Qual palavra declara uma constante?", ["let", "var", "const", "static"], 2],
      ["Qual comando escreve no console?", ["console.log()", "print()", "echo()", "show()"], 0],
      ["Qual tipo representa texto?", ["number", "string", "boolean", "object-only"], 1],
      ["Qual tipo representa verdadeiro ou falso?", ["boolean", "string", "number", "array"], 0],
      ["Qual operador realiza soma?", ["*", "+", "/", "%"], 1],
      ["Quanto é 2 + 3 * 2?", ["10", "12", "8", "7"], 2],
      ["Qual símbolo inicia comentário de uma linha?", ["#", "//", "<!--", "**"], 1],
      ["Qual valor representa ausência intencional de objeto?", ["null", "true", "NaN", "0"], 0],
      ["Qual função converte texto em número inteiro?", ["parseInt()", "toString()", "String()", "join()"], 0]
    ],
    [
      ["Qual operador compara valor e tipo?", ["==", "=", "===", "!="], 2],
      ["Qual operador representa E lógico?", ["&&", "||", "!", "??"], 0],
      ["Qual operador representa OU lógico?", ["&&", "||", "!", "**"], 1],
      ["Qual estrutura executa código condicional?", ["if", "for", "function", "return"], 0],
      ["Qual palavra representa alternativa ao if?", ["else", "other", "otherwise", "case-only"], 0],
      ["Qual estrutura seleciona entre casos?", ["switch", "loop", "array", "try-only"], 0],
      ["Qual valor resulta de 5 > 8?", ["true", "false", "5", "undefined"], 1],
      ["Qual operador calcula resto da divisão?", ["/", "**", "%", "//"], 2],
      ["Qual expressão representa negação lógica?", ["!valor", "&&valor", "||valor", "??valor"], 0],
      ["Qual expressão é verdadeira?", ["3 === '3'", "3 === 3", "0 === false", "null === undefined"], 1]
    ],
    [
      ["Como criar um array vazio?", ["{}", "[]", "()", "<>"], 1],
      ["Qual método adiciona item ao fim de um array?", ["push()", "pop()", "shift()", "slice()"], 0],
      ["Qual método remove o último item?", ["shift()", "push()", "pop()", "map()"], 2],
      ["Qual propriedade informa o tamanho de um array?", ["size", "length", "count", "total"], 1],
      ["Qual laço percorre uma sequência?", ["if", "switch", "for", "try"], 2],
      ["Qual método cria outro array transformando os elementos?", ["map()", "filter()", "find()", "some()"], 0],
      ["Qual método filtra elementos?", ["reduce()", "filter()", "join()", "sort-only"], 1],
      ["Qual método busca o primeiro item que atende uma condição?", ["find()", "every()", "map()", "push()"], 0],
      ["Qual palavra encerra um laço?", ["continue", "break", "return-only", "skip"], 1],
      ["Qual palavra pula para a próxima iteração?", ["continue", "break", "stop", "next"], 0]
    ],
    [
      ["Como declarar uma função?", ["function soma() {}", "def soma():", "func soma() {}", "create soma()"], 0],
      ["Qual palavra retorna um valor?", ["break", "return", "continue", "console"], 1],
      ["Qual sintaxe cria uma arrow function?", ["() => {}", "() -> {}", "function => {}", "def => {}"], 0],
      ["Qual método busca um elemento pelo ID?", ["document.getElementById()", "document.findId()", "window.getId()", "document.getClass()"], 0],
      ["Qual propriedade altera apenas o texto de um elemento?", ["innerHTML", "textContent", "outerHTML", "style"], 1],
      ["Qual método registra um evento?", ["addEventListener()", "addClick()", "onEvent()", "listen()"], 0],
      ["Qual evento ocorre ao clicar?", ["change", "submit", "click", "load-only"], 2],
      ["Qual método impede o comportamento padrão de um evento?", ["preventDefault()", "stopDefault()", "cancel()", "block()"], 0],
      ["Qual propriedade altera o conteúdo HTML interno?", ["textContent", "innerHTML", "outerText", "value-only"], 1],
      ["Qual método seleciona o primeiro elemento por seletor CSS?", ["querySelector()", "getSelector()", "selectFirst()", "findCSS()"], 0]
    ],
    [
      ["Como salvar uma string no armazenamento local?", ["localStorage.setItem()", "session.save()", "document.store()", "window.database()"], 0],
      ["Como recuperar uma string do armazenamento local?", ["localStorage.getItem()", "localStorage.read()", "storage.fetch()", "window.get()"], 0],
      ["Qual método transforma objeto em texto JSON?", ["JSON.parse()", "JSON.stringify()", "JSON.encodeOnly()", "Object.toStringJSON()"], 1],
      ["Qual método transforma JSON válido em valor JavaScript?", ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "parse.JSON()"], 0],
      ["Qual sintaxe espera uma Promise em função async?", ["await promessa", "wait promessa", "pause promessa", "then await promessa"], 0],
      ["Qual método executa uma requisição HTTP?", ["fetch()", "requestHTML()", "httpCall()", "getNetwork()"], 0],
      ["Qual bloco captura erros?", ["try/catch", "if/else", "for/in", "switch/case"], 0],
      ["Qual método cria uma Promise resolvida?", ["Promise.resolve()", "Promise.done()", "Promise.finish()", "Promise.ok()"], 0],
      ["Qual método combina várias Promises e rejeita se alguma rejeitar?", ["Promise.all()", "Promise.one()", "Promise.any()", "Promise.raceAll()"], 0],
      ["Qual estrutura permite exportar uma função de um módulo?", ["export", "publish", "share", "module.send"], 0]
    ]
  ],

  python: [
    [
      ["Qual função exibe uma mensagem?", ["console.log()", "print()", "echo()", "show()"], 1],
      ["Qual símbolo inicia um comentário?", ["//", "#", "<!--", "**"], 1],
      ["Qual tipo representa inteiros?", ["str", "float", "int", "bool"], 2],
      ["Qual tipo representa textos?", ["int", "str", "float", "list"], 1],
      ["Qual tipo representa verdadeiro ou falso?", ["bool", "int", "str", "dict"], 0],
      ["Qual função recebe entrada do usuário?", ["read()", "scan()", "input()", "get()"], 2],
      ["Qual função informa o tipo de um valor?", ["typeof()", "type()", "kind()", "classof()"], 1],
      ["Qual operador realiza potência?", ["^", "**", "//", "%"], 1],
      ["Quanto vale 10 // 3?", ["3.33", "1", "3", "4"], 2],
      ["Qual função converte texto em inteiro?", ["str()", "float()", "int()", "bool()"], 2]
    ],
    [
      ["Qual palavra inicia uma condição?", ["when", "if", "switch", "then"], 1],
      ["Qual palavra representa condição alternativa?", ["elif", "elseif", "else if", "when"], 0],
      ["Qual palavra representa o caso contrário?", ["otherwise", "else", "default", "other"], 1],
      ["Qual operador representa E lógico?", ["&&", "and", "&", "AND()"], 1],
      ["Qual operador representa OU lógico?", ["||", "or", "|", "OR()"], 1],
      ["Qual operador representa negação lógica?", ["!", "not", "~", "no"], 1],
      ["Qual laço percorre sequências?", ["for", "repeat", "loop", "until"], 0],
      ["Qual laço repete enquanto uma condição é verdadeira?", ["for", "while", "repeat", "loop"], 1],
      ["Qual sequência range(3) produz?", ["1,2,3", "0,1,2", "0,1,2,3", "3,3,3"], 1],
      ["Qual palavra interrompe um laço?", ["continue", "stop", "break", "return-only"], 2]
    ],
    [
      ["Como criar uma lista vazia?", ["{}", "[]", "()", "<>"], 1],
      ["Qual método adiciona um item à lista?", ["append()", "push()", "addEnd()", "insertLast()"], 0],
      ["Qual método remove e retorna o último item por padrão?", ["remove()", "delete()", "pop()", "clear()"], 2],
      ["Qual função informa o tamanho da lista?", ["size()", "length()", "len()", "countall()"], 2],
      ["Qual índice acessa o primeiro item?", ["1", "0", "-1", "first"], 1],
      ["Qual índice acessa o último item?", ["-1", "0", "last", "1"], 0],
      ["Qual estrutura armazena pares chave e valor?", ["list", "tuple", "dict", "set"], 2],
      ["Qual estrutura não permite alterar seus itens após criação?", ["list", "tuple", "dict", "set"], 1],
      ["Qual método retorna as chaves de um dicionário?", ["keys()", "values()", "items()", "getAll()"], 0],
      ["Qual expressão cria uma lista de quadrados?", ["[x*x for x in range(3)]", "{x*x in 3}", "list(x*x)", "range(3)**2"], 0]
    ],
    [
      ["Qual palavra declara uma função?", ["function", "def", "func", "create"], 1],
      ["Qual palavra retorna um valor?", ["yield-only", "print", "return", "break"], 2],
      ["Qual palavra define uma classe?", ["class", "object", "struct", "typeclass"], 0],
      ["Qual método inicializa normalmente uma instância?", ["__start__", "__init__", "__newclass__", "__begin__"], 1],
      ["Qual parâmetro costuma representar a própria instância?", ["this", "self", "me", "instanceof"], 1],
      ["Qual palavra permite herdar uma classe na definição?", ["extends", "inherits", "NomeClasse(Base)", "superclass NomeClasse"], 2],
      ["Qual função permite chamar métodos da classe pai?", ["super()", "parent()", "base()", "inherit()"], 0],
      ["Qual palavra importa um módulo?", ["include", "require", "import", "using"], 2],
      ["Qual função anônima usa uma expressão?", ["lambda", "anonymous", "arrow", "function"], 0],
      ["Qual recurso aplica uma função antes de outra definição?", ["decorator", "iterator", "generator", "package"], 0]
    ],
    [
      ["Qual modo abre um arquivo para escrita, substituindo conteúdo?", ['"r"', '"w"', '""a"', '"read"'], 1],
      ["Qual bloco trata exceções?", ["try/except", "if/else", "for/in", "def/return"], 0],
      ["Qual palavra executa código mesmo após uma exceção tratada?", ["finally", "always", "end", "finish"], 0],
      ["Qual comando lança uma exceção?", ["throw", "raise", "error", "except"], 1],
      ["Qual palavra cria um gerador ao produzir valores?", ["return", "yield", "send", "emit"], 1],
      ["Qual sintaxe cria um contexto gerenciado?", ["with open(...) as arquivo:", "using open(...)", "context open(...)", "file open(...)"], 0],
      ["Qual função enumera itens com índices?", ["enumerate()", "indexall()", "countitems()", "indexed()"], 0],
      ["Qual função combina iteráveis em pares?", ["join()", "zip()", "pair()", "merge()"], 1],
      ["Qual método converte texto JSON em objeto Python?", ["json.loads()", "json.dumps()", "json.parse()", "json.reads()"], 0],
      ["Qual sintaxe define uma função assíncrona?", ["async def tarefa():", "await def tarefa():", "function async tarefa():", "def async tarefa():"], 0]
    ]
  ]
};

// ==========================================
// CONFIGURAÇÃO E PROGRESSO
// ==========================================

const parametros = new URLSearchParams(location.search);
const cursoPedido = parametros.get("curso");
const curso = Object.prototype.hasOwnProperty.call(
  BANCO,
  cursoPedido
) ? cursoPedido : "html";

const etapas = BANCO[curso];
const chave = `conectatech_progresso_${curso}`;

const $ = id => document.getElementById(id);

function lerConcluidos() {
  try {
    const dados = JSON.parse(localStorage.getItem(chave) || "{}");
    const lista = Array.isArray(dados.concluidos)
      ? dados.concluidos : [];

    const validos = [...new Set(lista)]
      .filter(n =>
        Number.isInteger(n) &&
        n >= 1 &&
        n <= etapas.length
      );

    const resultado = [];

    for (let i = 1; i <= etapas.length; i++) {
      if (!validos.includes(i)) break;
      resultado.push(i);
    }

    return resultado;
  } catch {
    return [];
  }
}

let concluidos = lerConcluidos();

const fasePedida = Number(parametros.get("modulo")) || 1;

let fase = Math.max(
  1,
  Math.min(
    etapas.length,
    fasePedida,
    concluidos.length + 1
  )
);

let perguntaAtual = 0;
let acertos = 0;
let respostaSelecionada = null;
let tentativaFinalizada = false;

// ==========================================
// XP E NÍVEIS
// ==========================================

function xpTotal() {
  return Math.max(
    0,
    Number(localStorage.getItem("conectatech_xp")) || 0
  );
}

function calcularNivel(xp) {
  return Math.floor(xp / 100) + 1;
}

function atualizarXP() {
  const xp = xpTotal();

  $("xp-atual").textContent =
    `⭐ ${xp} XP • Nível ${calcularNivel(xp)}`;
}

function salvarConcluidos() {
  localStorage.setItem(
    chave,
    JSON.stringify({ concluidos })
  );
}

// ==========================================
// ELEMENTOS DA INTERFACE
// ==========================================

function criarElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);

  if (classe) elemento.className = classe;

  if (texto !== undefined) {
    elemento.textContent = texto;
  }

  return elemento;
}

function recompensaFase() {
  return 25 + (fase - 1) * 15;
}

function dificuldadeFase() {
  if (fase === 1) return "Iniciante";
  if (fase === 2) return "Básico";
  if (fase === 3) return "Intermediário";
  return "Avançado";
}

function renderizarFases() {
  const menu = $("fases");
  menu.replaceChildren();

  etapas.forEach((_, indice) => {
    const numero = indice + 1;
    const bloqueada = numero > concluidos.length + 1;
    const concluida = concluidos.includes(numero);

    const botao = criarElemento(
      "button",
      "fase" + (numero === fase ? " selecionada" : ""),
      `${concluida ? "✓ " : bloqueada ? "🔒 " : ""}Fase ${numero}`
    );

    botao.disabled = bloqueada;

    botao.onclick = () => {
      fase = numero;
      reiniciarTentativa();
    };

    menu.appendChild(botao);
  });
}

function iniciarPagina() {
  $("titulo-curso").textContent =
    `Exercícios de ${NOMES[curso]}`;

  $("voltar").href =
    `detalhes-curso.html?curso=${curso}`;

  atualizarXP();
  renderizarFases();
  mostrarPergunta();
}

// ==========================================
// EXIBIÇÃO DAS PERGUNTAS
// ==========================================

function mostrarPergunta() {
  const atividade = $("atividade");
  atividade.replaceChildren();

  respostaSelecionada = null;

  const perguntas = etapas[fase - 1];
  const pergunta = perguntas[perguntaAtual];

  const etiqueta = criarElemento(
    "span",
    "etiqueta",
    `${dificuldadeFase()} • +${recompensaFase()} XP`
  );

  atividade.appendChild(etiqueta);

  atividade.appendChild(
    criarElemento(
      "h2",
      "",
      `Fase ${fase} — Desafio ${perguntaAtual + 1}`
    )
  );

  atividade.appendChild(
    criarElemento(
      "p",
      "",
      `Nota mínima para aprovação: ${NOTA_MINIMA},0 de 10,0`
    )
  );

  const barra = criarElemento("div", "barra-progresso");
  const preenchimento = criarElemento(
    "div",
    "barra-preenchida"
  );

  preenchimento.style.width =
    `${(perguntaAtual / TOTAL_PERGUNTAS) * 100}%`;

  barra.appendChild(preenchimento);
  atividade.appendChild(barra);

  atividade.appendChild(
    criarElemento(
      "div",
      "contador",
      `Pergunta ${perguntaAtual + 1} de ${TOTAL_PERGUNTAS} • ${acertos} acertos`
    )
  );

  const campo = document.createElement("fieldset");

  campo.appendChild(
    criarElemento("legend", "", pergunta[0])
  );

  pergunta[1].forEach((alternativa, indice) => {
    const label = criarElemento(
      "label",
      "alternativa"
    );

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "resposta";
    radio.value = indice;

    radio.onchange = () => {
      respostaSelecionada = indice;

      campo.querySelectorAll(".alternativa")
        .forEach(item => item.classList.remove("marcada"));

      label.classList.add("marcada");
      botao.disabled = false;
    };

    label.append(
      radio,
      document.createTextNode(alternativa)
    );

    campo.appendChild(label);
  });

  atividade.appendChild(campo);

  const botao = criarElemento(
    "button",
    "enviar",
    perguntaAtual === TOTAL_PERGUNTAS - 1
      ? "Finalizar tentativa →"
      : "Próxima pergunta →"
  );

  botao.disabled = true;
  botao.onclick = confirmarResposta;

  atividade.appendChild(botao);
}

// ==========================================
// CORREÇÃO DAS RESPOSTAS
// ==========================================

function confirmarResposta() {
  if (respostaSelecionada === null) return;
  if (tentativaFinalizada) return;

  const pergunta = etapas[fase - 1][perguntaAtual];

  if (respostaSelecionada === pergunta[2]) {
    acertos++;
  }

  perguntaAtual++;

  if (perguntaAtual >= TOTAL_PERGUNTAS) {
    finalizarTentativa();
  } else {
    mostrarPergunta();
  }
}

function finalizarTentativa() {
  tentativaFinalizada = true;

  const nota = (acertos / TOTAL_PERGUNTAS) * 10;
  const aprovado = nota >= NOTA_MINIMA;

  const atividade = $("atividade");
  atividade.replaceChildren();

  const resultado = criarElemento(
    "div",
    `resultado ${aprovado ? "sucesso" : "erro"}`
  );

  resultado.appendChild(
    criarElemento(
      "div",
      "icone",
      aprovado ? "🏆" : "😔"
    )
  );

  resultado.appendChild(
    criarElemento(
      "h2",
      "",
      aprovado
        ? "Parabéns! Você passou de fase!"
        : "Você não atingiu a nota mínima!"
    )
  );

  resultado.appendChild(
    criarElemento(
      "div",
      "nota",
      `Nota: ${nota.toFixed(1)} / 10,0`
    )
  );

  resultado.appendChild(
    criarElemento(
      "p",
      "",
      `Você acertou ${acertos} de ${TOTAL_PERGUNTAS} perguntas.`
    )
  );

  if (!aprovado) {
    resultado.appendChild(
      criarElemento(
        "p",
        "",
        "Você precisa acertar pelo menos 7 perguntas. Sua tentativa será reiniciada para você tentar novamente."
      )
    );

    const repetir = criarElemento(
      "button",
      "enviar",
      "🔄 Refazer as 10 perguntas"
    );

    repetir.onclick = reiniciarTentativa;
    resultado.appendChild(repetir);

  } else {
    const primeiraConclusao = !concluidos.includes(fase);

    if (primeiraConclusao) {
      concluidos.push(fase);
      concluidos.sort((a, b) => a - b);

      salvarConcluidos();

      localStorage.setItem(
        "conectatech_xp",
        String(xpTotal() + recompensaFase())
      );
    }

    resultado.appendChild(
      criarElemento(
        "strong",
        "",
        primeiraConclusao
          ? `⭐ +${recompensaFase()} XP conquistados!`
          : "✓ Fase já concluída — XP não duplicado"
      )
    );

    const proxima = criarElemento(
      "button",
      "proxima",
      fase < etapas.length
        ? "Próxima fase →"
        : "Voltar ao curso →"
    );

    proxima.onclick = () => {
      if (fase < etapas.length) {
        fase++;
        reiniciarTentativa();
      } else {
        location.href =
          `detalhes-curso.html?curso=${curso}`;
      }
    };

    resultado.appendChild(proxima);
  }

  atividade.appendChild(resultado);

  atualizarXP();
  renderizarFases();
}

// ==========================================
// REINICIAR TENTATIVA
// ==========================================

function reiniciarTentativa() {
  perguntaAtual = 0;
  acertos = 0;
  respostaSelecionada = null;
  tentativaFinalizada = false;

  renderizarFases();
  mostrarPergunta();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

// Confere se todas as fases têm 10 perguntas
// e se as respostas corretas são válidas.

for (const [nome, fases] of Object.entries(BANCO)) {
  fases.forEach((perguntas, indice) => {
    if (perguntas.length !== TOTAL_PERGUNTAS) {
      throw new Error(
        `${nome}: fase ${indice + 1} não tem 10 perguntas.`
      );
    }

    perguntas.forEach((pergunta, numero) => {
      if (
        !Array.isArray(pergunta[1]) ||
        pergunta[1].length !== 4 ||
        !Number.isInteger(pergunta[2]) ||
        pergunta[2] < 0 ||
        pergunta[2] >= pergunta[1].length
      ) {
        throw new Error(
          `Questão inválida: ${nome}, fase ${indice + 1}, pergunta ${numero + 1}`
        );
      }
    });
  });
}

iniciarPagina();