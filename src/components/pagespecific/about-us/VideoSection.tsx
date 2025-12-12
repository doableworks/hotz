"use client";
import React, { useState, useRef, useEffect } from "react";

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // required for autoplay
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // fallback if autoplay gets blocked
          video.muted = true;
          video.play();
        });
      }
    }
  }, []);

  return (
    <div className="w-full lg:h-[70vh] relative z-40">
      {!isVideoLoaded && (
        <div className="absolute inset-0 z-50">
          <img
            src="/images/aboutimage.jpg"
            alt="Loading preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        onCanPlay={() => setIsVideoLoaded(true)}
      >
        <source src="/images/hotzvid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
