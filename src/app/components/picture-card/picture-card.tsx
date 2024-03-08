'use client'

import { useLayoutEffect, useRef } from 'react'

function PictureCard () {
  const myRef = useRef<HTMLDivElement | null>(null)
  const THRESHOLD = 15

  useLayoutEffect(() => {
    if (myRef.current) {
      myRef.current.addEventListener('mousemove', handleHover)
      myRef.current.addEventListener('mouseleave', resetStyles)
    }

    return () => {
      if (myRef.current) {
        myRef.current.removeEventListener('mousemove', handleHover)
        myRef.current.removeEventListener('mouseleave', resetStyles)
      }
    }
  }, [myRef.current])

  function handleHover (event: MouseEvent) {
    const { clientX, clientY, currentTarget } = event
    if (currentTarget) {
      const { clientHeight, offsetLeft, offsetTop, clientWidth } =
        currentTarget as HTMLDivElement
      const horizontal = (clientX - offsetLeft) / clientWidth
      const vertical = (clientY - offsetTop) / clientHeight

      const rotateX = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2)
      const rotateY = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2)

      if (myRef.current) {
        myRef.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
    }
  }

  function resetStyles (event: MouseEvent) {
    if (myRef.current) {
      myRef.current.style.transform = `perspective(${myRef.current.clientWidth}px) rotateX(0deg) rotateY(0deg)`
    }
  }

  return (
    <div
      data-testid='picture-card'
      ref={myRef}
      className='picture-card p-2 bg-picture bg-cover bg-gradien from-border via-transparent to-transparent rounded-lg w-full h-full'
    >
      <div className='border border-border size-full rounded-md' />
    </div>
  )
}

export default PictureCard
