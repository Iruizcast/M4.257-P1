// Configura las fechas de Navidad
const globalChristmas = new Date(2024, 11, 25, 0, 0, 0);
const vigoChristmas = new Date(2024, 10, 16, 20, 0, 0);

function updateCountdown() {
    const now = new Date();
    const countdownText = document.querySelector(".countdown-text");
    const postChristmasText = document.querySelector(".post-christmas-text");

    const globalDiff = globalChristmas - now;
    const vigoDiff = vigoChristmas - now;

    function formatTime(diff) {
        if (diff <= 0) return null;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        return `${days} días y ${hours} horas `;
    }

    // Formatea los tiempos o muestra "ha empezado hace"
    const globalTime = formatTime(globalDiff) || `${formatTime(-globalDiff)}`;
    const vigoTime = formatTime(vigoDiff) || `ha empezado hace ${formatTime(-vigoDiff)}`;

    // Actualiza el DOM
    document.querySelector('.global-time').textContent = globalTime;
    document.querySelector('.vigo-time').textContent = vigoTime;
    if (now > globalChristmas) {
        countdownText.style.display = "none";
        postChristmasText.style.display = "block";
    }
}

// Inicializa y actualiza cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);


