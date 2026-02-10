import React, { useEffect, useRef, useState } from "react";

function useCoverRect(containerRef) {
    const [rect, setRect] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      if (!containerRef.current) return;
  
      const el = containerRef.current;
      const ro = new ResizeObserver(() => {
        const { width, height } = el.getBoundingClientRect();
        setRect({ width, height });
      });
  
      ro.observe(el);
      return () => ro.disconnect();
    }, [containerRef]);
  
    const videoAR = 16 / 9;
    const { width: cw, height: ch } = rect;
  
    let w = cw;
    let h = cw / videoAR;
  
    if (h < ch) {
      h = ch;
      w = ch * videoAR;
    }
  
    // Detect mobile (or small screens)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  
    // Limit width to viewport width on mobile
    if (isMobile) {
      const vw = window.innerWidth;
      if (w > vw) {
        w = vw;
        h = vw / videoAR;
      }
    }
  
    // small buffer
    w *= 1.02;
    h *= 1.02;
  
    return { w, h };
  }

export default function HeroYouTubeBgCover() {
  const sectionRef = useRef(null);
  const playerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const videoId = "F5xEe8fY9Qc";
  const { w, h } = useCoverRect(sectionRef);

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
          playlist: videoId, // required for looping
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

    if (window.YT?.Player) {
      createPlayer();
      return;
    }

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
      {/* Video layer */}
      <div className="absolute inset-0">
        {mounted && (
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${w}px`,
              height: `${h}px`,
            }}
          >
            <div id="yt-bg" className="h-full w-full" />
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

     
    </section>
  );
}
