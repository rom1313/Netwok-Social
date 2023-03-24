function cardeffect(selector) {
  let block = document.querySelector(selector);
  let w = block.clientWidth;
  let h = block.clientHeight;
  let b = block.getBoundingClientRect();

  block.addEventListener("mousemove", (e) => {
    let X = (e.clientX - b.left) / w;
    let Y = (e.clientY - b.top) / h;

    document.documentElement.style.setProperty("--lightpositionX", 100 * X + "%");
    document.documentElement.style.setProperty("--lightpositionY", 100 * Y + "%");
  });
}
setTimeout(() => {
  cardeffect("#blockcard");
}, 50);
