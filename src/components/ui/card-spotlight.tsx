"use client"
import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface CardSpotlightProps {
  children: React.ReactNode
  className?: string
}

export const CardSpotlight = ({ children, className }: CardSpotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden rounded-xl border dark:border-stone-900 dark:bg-stone-950 p-4 shadow-lg", className)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

