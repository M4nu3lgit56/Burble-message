const phrases = [
  "Eres muy linda",
  "Me gusta el brillo de tus ojos",
  "Tu compañia me hace feliz",
  "Me gustaria estar contigo para siempre",
  "Me gusta tu forma de ser",
  "Eres una persona muy fuerte, te admiro",
  "I LOVE YOUU",
  "MY ONLY LOVEEEE♪♪"
  ]
function createBurble() {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  const burble = document.createElement("div");
  burble.className = "burble";
  burble.textContent = phrase;
  burble.style.position = "fixed";
  burble.style.visibility = "hidden";
  document.body.appendChild(burble);
  const rect = burble.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  burble.style.left = `${x}px`;
  burble.style.top = `${y}px`;
  burble.style.visibility = "visible";
  setTimeout(() => {
    burble.remove();
  }, 1950);
}

setInterval(() => {
    createBurble()
}, 900)