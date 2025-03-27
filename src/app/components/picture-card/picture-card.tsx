"use client";

import { useRef } from "react";

function PictureCard() {
  const MAX_ROTATION = 10; // graus máximos de rotação
  const myRef = useRef<HTMLDivElement | null>(null);

  function handleHover(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = event;
    if (!currentTarget) return;

    const element = currentTarget as HTMLDivElement;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = element;

    // Coordenadas relativas ao centro do elemento
    const centerX = offsetLeft + clientWidth / 2;
    const centerY = offsetTop + clientHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const rotateY = (-deltaX / (clientWidth / 2)) * MAX_ROTATION;
    const rotateX = (deltaY / (clientHeight / 2)) * MAX_ROTATION;

    // Limita a rotação máxima
    const clampedX = Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, rotateX));
    const clampedY = Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, rotateY));

    if (myRef.current) {
      requestAnimationFrame(() => {
        myRef.current!.style.transform = `
        perspective(600px)
        rotateX(${clampedX.toFixed(2)}deg)
        rotateY(${clampedY.toFixed(2)}deg)
      `;
      });
    }
  }

  function handleMouseLeave() {
    if (myRef.current) {
      myRef.current.style.transform =
        "perspective(600px) rotateX(0deg) rotateY(0deg)";
    }
  }

  return (
    <div
      data-testid="picture-card"
      ref={myRef}
      className="picture-card p-2 bg-picture bg-cover bg-gradien from-border via-transparent to-transparent rounded-lg w-full h-full"
      onMouseMove={handleHover}
      onMouseOut={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
    >
      <div className="border border-border size-full rounded-md" />
    </div>
  );
}

export default PictureCard;
