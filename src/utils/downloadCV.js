export function downloadCV() {
  const a = document.createElement("a");
  a.href = "/cv/ganigustio.pdf";
  a.download = "CV-Gani-Gustio.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}