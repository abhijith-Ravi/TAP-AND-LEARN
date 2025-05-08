"use client";

import React, { useEffect, useState } from "react";
import WordTooltip from "../wordtooltip/WordTooltip";
import { parseVTT } from "../../../utils/parseSubtitles";

const VideoPlayer = () => {
  const [subtitles, setSubtitles] = useState<any[]>([]);
  const [currentSubtitle, setCurrentSubtitle] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubtitles = async () => {
      try {
        const data = await parseVTT("/sample-subtitles.vtt");
        setSubtitles(data);
      } catch (error) {
        console.error("Error fetching subtitles:", error);
      }
    };
    fetchSubtitles();
  }, []);

  const onTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const currentTime = video.currentTime;

    const activeSubtitle = subtitles.find(
      (sub) => currentTime >= sub.startTime && currentTime <= sub.endTime
    );

    setCurrentSubtitle(activeSubtitle ? activeSubtitle.text : null);
  };

  const renderSubtitle = (text: string) => {
    return text.split(/\s+/).map((word, index) => (
      <React.Fragment key={index}>
      <WordTooltip word={word} sentence={currentSubtitle || ""} />{" "}
        
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4 bg-gray-900 text-white">
      <video controls width="600" onTimeUpdate={onTimeUpdate} className="rounded-xl shadow-lg">
        <source src="/die.mp4" type="video/mp4" />
        <track src="/sample-subtitles.vtt" kind="subtitles" srcLang="en" label="English" />
      </video>
      <div className="text-center mt-4 w-[90%] bg-black bg-opacity-70 p-2 rounded-md text-sm mb-8">
        {currentSubtitle && <p>{renderSubtitle(currentSubtitle)}</p>}
      </div>
    </div>
  );
};

export default VideoPlayer;
