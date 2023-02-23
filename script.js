// set up canvas and context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// set canvas width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// set line properties
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';

// const spacing = canvas.width / 28;

const middleX = canvas.width / 2;
const spacing = canvas.width / 28;
for (let i = 1; i <= 28; i++) {
    const x = i * spacing;
    const distanceFromMiddle = Math.abs(x - middleX);
    const spacingAdjustment = (distanceFromMiddle / middleX) * spacing * 6.4; // Change the 0.4 to adjust the spacing
    const adjustedX = x + spacingAdjustment;
    ctx.beginPath();
    ctx.moveTo(adjustedX, 0);
    ctx.lineTo(adjustedX, canvas.height);
    ctx.stroke();
  }

// for (let i = 1; i <= 28; i++) {
//     const x = i * spacing;
//     ctx.beginPath();
//     ctx.moveTo(x, 0);
//     ctx.lineTo(x, canvas.height);
//     ctx.stroke();
//   }

// // Draw the vertical lines
// for (let i = 1; i <= 28; i++) {
//     const x = i * 20;
//     ctx.beginPath();
//     ctx.moveTo(x, 0);
//     ctx.lineTo(x, canvas.height);
//     ctx.stroke();
//   }
  
  // Draw the horizontal lines
  for (let i = 1; i <= 7; i++) {
    const y = i * 100;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
