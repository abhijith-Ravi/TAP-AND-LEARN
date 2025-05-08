"use client";

import React, { useState } from "react";
import axios from "axios";
import { saveClickedWord } from "../../../../firebase/saveUser";
import { useAuth } from "../../../context/authcontext";

const WordTooltip = ({ word, sentence }: { word: string; sentence: string }) => {
  const [meaningai, setMeaningai] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const { uid } = useAuth(); // get UID from context

  const fetchAIWordMeaning = async () => {
    try {
      const video = document.querySelector("video");
      if (video) video.pause();

      const responseai = await axios.post("/api/generatesubtitles", {
        word,
        sentence,
      });

      const fetchedMeaningai = responseai.data.meaning || "Meaning not found.";
      setMeaningai(fetchedMeaningai);
      setShowTooltip(true);
    } catch (error) {
      setMeaningai("Error fetching AI meaning.");
      setShowTooltip(true);
    }
  };

  const fetchDictionaryMeaning = async () => {
    try {
      const video = document.querySelector("video");
      if (video) video.pause();

      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const fetchedMeaning =
        response.data[0]?.meanings[0]?.definitions[0]?.definition || "Meaning not found.";
      setMeaningai(fetchedMeaning);
      setShowTooltip(true);
    } catch (error) {
      setMeaningai("Error fetching dictionary meaning.");
      setShowTooltip(true);
    }
  };

  const handleWordClick = async () => {
    if (!uid) {
      alert("Please log in to save this word.");
      return;
    }

    await saveClickedWord(uid, word,meaningai);
    alert(`Saved word: ${word}`);
  };

  return (
    <span className="relative cursor-pointer text-blue-700" onClick={fetchAIWordMeaning}>
  {word}
  {showTooltip && meaningai && (
    <span className="absolute bg-gray-700 text-white p-2 rounded-lg mt-2 z-50 flex flex-col gap-2">
      <span>{meaningai}</span> {/* ✅ Changed from <div> to <span> */}
      <span className="flex gap-2"> {/* ✅ Changed from <div> to <span> */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleWordClick();
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
        >
          save
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            fetchDictionaryMeaning();
          }}
          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm"
        >
          Dictionary
        </button>
      </span>
    </span>
  )}
</span>

  );
};

export default WordTooltip;
