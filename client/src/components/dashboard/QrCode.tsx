"use client"

import { useEffect, useRef } from "react"

interface QRCodeProps {
  value: string
  size?: number
  bgColor?: string
  fgColor?: string
}

export default function QRCode({ value, size = 200, bgColor = "#ffffff", fgColor = "#000000" }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // This is a simplified QR code renderer
    // In a real application, you would use a library like qrcode.js
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, size, size)

    // Draw a simple QR code-like pattern
    const cellSize = size / 25
    ctx.fillStyle = fgColor

    // Draw position detection patterns (corners)
    // Top-left
    drawPositionDetectionPattern(ctx, 0, 0, cellSize)
    // Top-right
    drawPositionDetectionPattern(ctx, 18, 0, cellSize)
    // Bottom-left
    drawPositionDetectionPattern(ctx, 0, 18, cellSize)

    // Draw some random data cells to make it look like a QR code
    const randomPattern = generateRandomPattern()
    for (let i = 0; i < randomPattern.length; i++) {
      for (let j = 0; j < randomPattern[i].length; j++) {
        if (randomPattern[i][j] === 1) {
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
        }
      }
    }
  }, [value, size, bgColor, fgColor])

  // Helper function to draw position detection patterns
  function drawPositionDetectionPattern(ctx: CanvasRenderingContext2D, x: number, y: number, cellSize: number) {
    // Outer square
    ctx.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize)

    // Inner white square
    ctx.fillStyle = bgColor
    ctx.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize)

    // Inner black square
    ctx.fillStyle = fgColor
    ctx.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize)
  }

  // Generate a random pattern for the QR code
  function generateRandomPattern() {
    const pattern = Array(25)
      .fill(0)
      .map(() => Array(25).fill(0))

    // Skip the position detection patterns
    for (let i = 8; i < 17; i++) {
      for (let j = 8; j < 17; j++) {
        pattern[i][j] = Math.random() > 0.5 ? 1 : 0
      }
    }

    // Add some random data cells
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        // Skip the position detection patterns
        if ((i < 7 && j < 7) || (i < 7 && j > 17) || (i > 17 && j < 7)) {
          continue
        }
        pattern[i][j] = Math.random() > 0.7 ? 1 : 0
      }
    }

    return pattern
  }

  return <canvas ref={canvasRef} width={size} height={size} style={{ width: size, height: size }} />
}
