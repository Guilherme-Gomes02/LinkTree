const container = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    const size = Math.random() * 4 + 1;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.opacity = Math.random() * 0.5 + 0.2;

    particle.style.animationDuration =
        Math.random() * 8 + 6 + "s";

    container.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 14000);
}

setInterval(() => {

    for(let i = 0; i < 2; i++){
        createParticle();
    }

}, 80);