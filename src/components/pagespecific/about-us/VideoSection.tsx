"use client";
import React, { useState, useRef } from "react";

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="w-full h-[65vh] relative z-40">
      {/* Loading Image */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 z-50">
          <img
            src="/images/aboutPlaceholder.png"
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
        <source
          src="https://d299alzxgdp6.cloudfront.net/4208190-uhd_3840_2160_24fps+(1).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
