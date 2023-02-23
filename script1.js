const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const verticalSpacing = width / 30;
const horizontalSpacing = height / 9;

const middleX = width / 2;
const startX = middleX - (verticalSpacing * 14);

for(let i = 0; i < 28; i++) {
  let x = startX + (i * verticalSpacing);
  let y1 = 0;
  let y2 = height;

  // Gradually reduce spacing from line 5 until line 18
  if (i >= 5 && i <= 18) {
    let offset = (i - 5) * (verticalSpacing * 0.1);
    x += offset;
  }

  ctx.beginPath();
  ctx.moveTo(x, y1);
  ctx.lineTo(x, y2);
  ctx.stroke();

  // Resume normal spacing after line 18
  if (i === 18) {
    x += (verticalSpacing * 0.5);
  }
}

for(let i = 0; i < 8; i++) {
  let x1 = 0;
  let y = i * horizontalSpacing;
  let x2 = width;

  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}
