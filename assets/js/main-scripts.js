const cursor = document.querySelectorAll(".cursor");
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.3;
  cursorY += (mouseY - cursorY) * 0.3;

  cursor.forEach((el) => {
    el.style.left = `${cursorX}px`;
    el.style.top = `${cursorY}px`;
  });

  requestAnimationFrame(animateCursor);
}

animateCursor();
