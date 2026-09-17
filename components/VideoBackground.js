"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed video background with a poster fallback.
 * - Muted, looping, plays inline (works on iOS Safari).
 * - Respects prefers-reduced-motion by freezing on the poster frame.
 * - Pauses when scrolled out of view to save battery/bandwidth.
 */
export default function VideoBackground({ name, className = "", overlay = true }) {
  const videoRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {reducedMotion ? (
        <img
          src={`/posters/${name}.jpg`}
          alt=""
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={`/posters/${name}.jpg`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={`/videos/${name}.mp4`} type="video/mp4" />
        </video>
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-void/10" />
      )}
    </div>
  );
}
