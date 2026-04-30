"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.1
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }
      requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    animate()

    // Portfolio card hover effect
    const cards = document.querySelectorAll(".pc")
    const handleEnter = () => ringRef.current?.classList.add("show")
    const handleLeave = () => ringRef.current?.classList.remove("show")

    cards.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter)
      el.addEventListener("mouseleave", handleLeave)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      cards.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter)
        el.removeEventListener("mouseleave", handleLeave)
      })
    }
  }, [])

  return (
    <>
      <div id="cur-dot" ref={dotRef}></div>
      <div id="cur-ring" ref={ringRef}>
        View
      </div>
    </>
  )
}
