function goto_config(){
    window.location.href = "HTML/config.html";
}

function ajustarPantalla() {
    const altura = window.visualViewport?.height || window.innerHeight;
    document.documentElement.style.setProperty('--real-height', altura + 'px');
}

window.addEventListener('resize', ajustarPantalla);
window.addEventListener('orientationchange', ajustarPantalla);
ajustarPantalla();