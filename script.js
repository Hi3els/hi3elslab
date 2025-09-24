const text = ["হ্যালো Anees!", "Welcome to Hi3els Lab!"];
let i = 0, j = 0;
function type() {
  if (j < text[i].length) {
    document.getElementById("typewriter").innerHTML += text[i][j];
    j++;
    setTimeout(type, 100);
  }
}
type();

setInterval(() => {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}, 1000);
