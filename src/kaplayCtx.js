import kaplay from "kaplay";

export const k = kaplay({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  background: [49, 16, 71],
});
