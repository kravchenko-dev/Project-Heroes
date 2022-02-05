'use strict'

const wrapper = document.getElementById('wrapper')
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
wrapper.append(canvas)
canvas.width = innerWidth
canvas.height = innerHeight

// drawHex({ side: 100, x: 300, y: 300, lineWidth: 5, color: 'red' })
// drawHex({ side: 100, x: 485, y: 300, lineWidth: 5, color: 'red' })

const arena = drawHexGrid({ side: 100, lineWidth: 5, color: 'red' })
console.log(arena)

function drawHexGrid({ side, lineWidth, color }) {
  const distance = 0.9 * side
  const arena = []
  for (
    let i = 0, y = side + 20;
    y < innerHeight - side - 20;
    i += 2, y += side * 3.2
  ) {
    const row = []
    for (
      let j = 0, x = distance;
      x < innerWidth - distance;
      j++, x += side * 1.85
    ) {
      row.push({ rowIndex: i, colIndex: j, x, y })
      drawHex({ side, x, y, lineWidth, color })
    }
    arena.push(row)
    if (y + side * 1.6 < innerHeight - side - 20) {
      const row = []
      for (
        let j = 0, x = distance * 2 + side * 0.02;
        x < innerWidth - distance;
        j++, x += side * 1.85
      ) {
        row.push({ rowIndex: i + 1, colIndex: j, x, y: y + side * 1.6 })
        drawHex({ side, x, y: y + side * 1.6, lineWidth, color })
      }
      arena.push(row)
    }
  }
  return arena
}

function drawHex({ side, x, y, lineWidth, color }) {
  const distance = side * Math.cos(Math.PI / 6)

  const x1 = x - distance
  const x2 = x
  const x3 = x + distance
  const x4 = x3
  const x5 = x
  const x6 = x1

  const y1 = y - side / 2
  const y2 = y - side
  const y3 = y1
  const y4 = y3 + side
  const y5 = y + side
  const y6 = y4

  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineTo(x3, y3)
  ctx.lineTo(x4, y4)
  ctx.lineTo(x5, y5)
  ctx.lineTo(x6, y6)
  ctx.closePath()
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  ctx.stroke()
}

function drawGrid(cellSize, color) {
  ctx.fillStyle = color

  for (let y = cellSize; y < innerHeight; y += cellSize) {
    ctx.fillRect(0, y, innerWidth, 1)
  }
  for (let x = cellSize; x < innerWidth; x += cellSize) {
    ctx.fillRect(x, 0, 1, innerHeight)
  }
}

// drawGrid(20, 'tomato')

function fillCell(row, column, color) {
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 20, 20)
}

// fillCell(1, 1, 'green')
// fillCell(3, 5, 'green')
