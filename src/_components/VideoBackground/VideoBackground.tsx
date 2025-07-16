'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type VideoOnViewProps = {
  src: string;
};

const VideoOnView: React.FC<VideoOnViewProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.6 });
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (inView) {
        video.muted = isMuted;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [inView, isMuted]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const newMuteState = !isMuted;
      video.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden rounded-2xl">
      <button
        onClick={toggleMute}
        className="absolute z-10 bottom-4 right-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-md shadow-lg"
      >
        {isMuted ? '🔊 Unmute' : '🔇 Mute'}
      </button>
      <video
        ref={videoRef}
        playsInline
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoOnView;
