import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (currentRef) {
            observer.unobserve(currentRef)
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before the element fully enters
        threshold: 0.05,
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-8'
      case 'down': return '-translate-y-8'
      case 'left': return 'translate-x-8'
      case 'right': return '-translate-x-8'
      default: return ''
    }
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 ${getDirectionClass()}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
