"use client";
import React, { useState, useRef } from "react";

interface VideoSectionProps {
  cloudfrontUrl: string;
}

const VideoSection = ({ cloudfrontUrl }: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
      <div className="w-full h-[65vh] relative z-40">
        {/* Loading Image - shown until video is loaded */}
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
          loop
          muted
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
        >
          <source
            src={`https://${cloudfrontUrl}/4208190-uhd_3840_2160_24fps+(1).mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button Overlay */}
         <button
          onClick={handleVideoToggle}
          className="absolute inset-0 flex items-center justify-center ml-auto z-50"
        >
          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            {isPlaying ? (
                <span className="text-gray-800 uppercase">
                 Playing
                </span>
            ) : (
                <span className="text-gray-800 uppercase">
                 Play
                </span>
            )}
          </div>
        </button> 
      </div>
  );
};

export default VideoSection;
