import Image from "next/image";
import WordClicker from "../components/wordclicker/WordClicker"; // Ensure the file exists at this path
import VideoPlayer from "@/components/subtitles/VideoPlayer/VideoPlayer";


export default function Home() {

  return (
    <div>
      <h1
        className="text-3xl font-bold underline text-center mt-10"
      >
        welcome to word clicker
      </h1>
    
      <VideoPlayer />
    </div>
    
  );
}
