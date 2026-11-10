


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});




const xpText = document.getElementById("xp-text");
const xpBar = document.getElementById("xp-bar");
const xpMessage = document.getElementById("xp-message");
const levelText = document.getElementById("player-level");


const levels = [
    { level: 1, name: "Explorador", xp: 0 },
    { level: 2, name: "Aprendiz", xp: 100 },
    { level: 3, name: "Desenvolvedor", xp: 250 },
    { level: 4, name: "Especialista", xp: 500 },
    { level: 5, name: "Mestre da Tecnologia", xp: 1000 }
];


const xp = Number(localStorage.getItem("conectatech_xp")) || 0;


let currentLevel = levels[0];

for (const level of levels) {
    if (xp >= level.xp) {
        currentLevel = level;
    }
}


const nextLevel = levels.find(
    level => level.xp > xp
);


function updatePlayerPanel() {

    levelText.textContent = `Nível ${currentLevel.level}`;

    const currentLevelXP = currentLevel.xp;

    if (nextLevel) {

        const progress = xp - currentLevelXP;
        const requiredXP = nextLevel.xp - currentLevelXP;

        const percentage = Math.min(
            (progress / requiredXP) * 100,
            100
        );

        xpText.textContent =
            `${progress} / ${requiredXP} XP`;

        xpBar.style.width = `${percentage}%`;

        xpMessage.textContent =
            `Faltam ${requiredXP - progress} XP para o próximo nível!`;

    } else {

        xpText.textContent = `${xp} XP`;
        xpBar.style.width = "100%";

        xpMessage.textContent =
            "Você alcançou o nível máximo! Parabéns!";

    }

}

updatePlayerPanel();
