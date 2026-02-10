import React, { useEffect, useRef, useState } from "react";

function useCoverSizing(containerRef) {
  const [size, setSize] = useState({
    baseW: 0,
    baseH: 0,
    scale: 1,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const AR = 16 / 9;
    const el = containerRef.current;

    const calc = () => {
      const { width: cw, height: ch } = el.getBoundingClientRect();
      if (!cw || !ch) return;

      // 1) Compute TRUE cover dimensions (like object-cover)
      let coverW = cw;
      let coverH = cw / AR;

      if (coverH < ch) {
        coverH = ch;
        coverW = ch * AR;
      }

      // 2) On mobile, cap the BASE width to viewport width, but keep cover via scale
      const vw = window.innerWidth || cw;
      const isMobile = vw < 768;

      const baseW = isMobile ? Math.min(coverW, vw) : coverW;
      const baseH = baseW / AR;

      const scale = coverW / baseW; // >= 1 on tall phones

      // tiny buffer to avoid 1px edges
      setSize({
        baseW: baseW * 1.02,
        baseH: baseH * 1.02,
        scale: scale * 1.02,
      });
    };

    calc();

    const ro = new ResizeObserver(calc);
    ro.observe(el);

    window.addEventListener("resize", calc);
    window.addEventListener("orientationchange", calc);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calc);
      window.removeEventListener("orientationchange", calc);
    };
  }, [containerRef]);

  return size;
}

export default function HeroVideo() {
  const sectionRef = useRef(null);
  const playerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const videoId = "F5xEe8fY9Qc";
  const { baseW, baseH, scale } = useCoverSizing(sectionRef);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const createPlayer = () => {
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player("yt-bg", {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          playsinline: 1,
          loop: 1,
          playlist: videoId, // required for loop
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
          },
        },
      });
    };

    // Load API once
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // If already ready
    if (window.YT?.Player) {
      createPlayer();
      return;
    }

    // Wait for readiness
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      createPlayer();
    };
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background layer */}
      <div className="absolute inset-0">
        {mounted && baseW > 0 && baseH > 0 && (
          <div
            className="pointer-events-none absolute left-1/2 top-1/2"
            style={{
              width: `${baseW}px`,
              height: `${baseH}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transformOrigin: "center",
            }}
          >
            <div id="yt-bg" className="h-full w-full" />
          </div>
        )}

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
