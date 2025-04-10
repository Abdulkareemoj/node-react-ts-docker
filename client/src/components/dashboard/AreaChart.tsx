"use client"

import { useEffect, useRef } from "react"

interface AreaChartProps {
  data: number[]
  color: string
}

export function AreaChart({ data, color }: AreaChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Find min and max values for scaling
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min

    // Calculate point spacing
    const pointSpacing = rect.width / (data.length - 1)

    // Draw the area
    ctx.beginPath()
    ctx.moveTo(0, rect.height - ((data[0] - min) / range) * rect.height)

    // Draw points and connect them
    for (let i = 1; i < data.length; i++) {
      const x = i * pointSpacing
      const y = rect.height - ((data[i] - min) / range) * rect.height
      ctx.lineTo(x, y)
    }

    // Complete the area by drawing to the bottom right and bottom left
    ctx.lineTo(rect.width, rect.height)
    ctx.lineTo(0, rect.height)
    ctx.closePath()

    // Fill the area
    const gradient = ctx.createLinearGradient(0, 0, 0, rect.height)
    gradient.addColorStop(0, `${color}33`) // 20% opacity
    gradient.addColorStop(1, `${color}05`) // 2% opacity
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw the line
    ctx.beginPath()
    ctx.moveTo(0, rect.height - ((data[0] - min) / range) * rect.height)

    for (let i = 1; i < data.length; i++) {
      const x = i * pointSpacing
      const y = rect.height - ((data[i] - min) / range) * rect.height
      ctx.lineTo(x, y)
    }

    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()
  }, [data, color])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
