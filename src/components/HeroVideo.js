import React, { useEffect, useRef, useState } from "react";

function useCoverBox(containerRef) {
  const [rect, setRect] = useState({ cw: 0, ch: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const ro = new ResizeObserver(() => {
      const { width, height } = el.getBoundingClientRect();
      setRect({ cw: width, ch: height });
    });

    ro.observe(el);
    const { width, height } = el.getBoundingClientRect();
    setRect({ cw: width, ch: height });

    return () => ro.disconnect();
  }, [containerRef]);

  const AR = 16 / 9;
  const { cw, ch } = rect;

  // True cover size (may be wider than viewport on tall phones)
  let coverW = cw;
  let coverH = cw / AR;
  if (coverH < ch) {
    coverH = ch;
    coverW = ch * AR;
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const vw = typeof window !== "undefined" ? window.innerWidth : coverW;

  // Cap the *base* width on mobile, BUT keep cover via transform scale.
  const baseW = isMobile ? Math.min(coverW, vw) : coverW;
  const baseH = baseW / AR;

  const scale = coverW / baseW; // >= 1 on tall phones

  // tiny buffer to avoid 1px edges
  return { baseW: baseW * 1.02, baseH: baseH * 1.02, scale: scale * 1.02 };
}

export default function HeroVideo() {
  const sectionRef = useRef(null);
  const playerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const videoId = "F5xEe8fY9Qc";
  const { baseW, baseH, scale } = useCoverBox(sectionRef);

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
          playlist: videoId,
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

    if (!window.YT) {
      const tag = document.createElement("script");
     
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    if (window.YT?.Player) createPlayer();
    else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        createPlayer();
      };
    }
  }, [mounted]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        {mounted && (
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
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

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div className="text-white">
          <h1 className="text-4xl font-bold md:text-6xl">Hero Title</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            No black bars on mobile + capped base width.
          </p>
        </div>
      </div>
    </section>
  );
}
