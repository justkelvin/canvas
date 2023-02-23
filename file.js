const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const verticalSpacing = width / 28;
const horizontalSpacing = height / 7;

const middleX = width / 2;
const startX = middleX - (verticalSpacing * 14);

for (let i = 0; i < 28; i++) {
  let x = startX + (i * verticalSpacing);
  let y1 = 0;
  let y2 = height;

  if (i === 4){
    let offset = (i - 5) * (verticalSpacing * 0.1);
    x += offset;
  }

  if (i === 5) {
    let offset = (i - 5) * (verticalSpacing * 0.2);
    x += offset;
  }
  if (i === 6) {
    let offset = (i - 5) * (verticalSpacing * 0.3);
    x += offset;
  }
  if (i === 7) {
    let offset = (i - 5) * (verticalSpacing * 0.4);
    x += offset;
  }
//     if (i === 8) {
//     let offset = (i - 5) * (verticalSpacing * 0.1);
//     x += offset;
//     }
//     if (i === 9) {
//     let offset = (i - 5) * (verticalSpacing * 0.1);
//     x += offset;
//     }
//     if (i === 10) {
//     let offset = (i - 5) * (verticalSpacing * 0.1);
//     x += offset;
//     }
//     if (i === 11) {
//     let offset = (i - 5) * (verticalSpacing * 0.1);
//     x += offset;
//     }
//     if (i === 12) {
//     let offset = (i - 5) * (verticalSpacing * 0.1);
//     x += offset;
//     }
//     if (i === 13) {
//     let offset = (i - 5) * (verticalSpacing * 0.1);
//     x += offset;
//     }
//     if (i === 14) {
//     let offset = (i - 5) * (verticalSpacing * 0.1);
//     x += offset;
//     }
//     if (i === 15) {
//     let offset = (i - 5) * (verticalSpacing * 0.1);
//     x += offset;
//     }
//     if (i === 16) {
//     let offset = (i - 5) * (verticalSpacing * 0.1);
//     x += offset;
//     }

  ctx.beginPath();
  ctx.moveTo(x, y1);
  ctx.lineTo(x, y2);
  ctx.stroke();
}

for (let i = 0; i < 8; i++) {
  let x1 = 0;
  let y = i * horizontalSpacing;
  let x2 = width;

  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}
