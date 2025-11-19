"use client";

import { useEffect, useRef, useState } from "react";

export default function AvatarFollowEyes() {
  const leftEye = useRef<HTMLDivElement>(null);
  const rightEye = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  function getMovement(eye: HTMLDivElement | null) {
    if (!eye) return {};

    const rect = eye.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    const dx = cursor.x - center.x;
    const dy = cursor.y - center.y;

    const maxDistance = 10; // how far pupils move
    const angle = Math.atan2(dy, dx);

    const moveX = Math.cos(angle) * maxDistance;
    const moveY = Math.sin(angle) * maxDistance;

    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
    };
  }

  return (
    <div className="relative w-[350px] mx-auto">
      <img src="/avatar/avatar.png" className="w-full" />
      <div
        ref={leftEye}
        className="absolute top-[128px] left-[125px] w-[40px] h-[40px]"
      >
        <img src="/avatar/eye-background.png" className="absolute w-full h-full" />
        <img
          src="/avatar/pupil.png"
          className="absolute w-full h-full"
          style={getMovement(leftEye.current)}
        />
      </div>
      <div
        ref={rightEye}
        className="absolute top-[128px] right-[125px] w-[40px] h-[40px]"
      >
        <img src="/avatar/eye-background.png" className="absolute w-full h-full" />
        <img
          src="/avatar/pupil.png"
          className="absolute w-full h-full"
          style={getMovement(rightEye.current)}
        />
      </div>
    </div>
  );
}
