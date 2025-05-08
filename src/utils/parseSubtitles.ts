export const parseVTT = async (filePath: string): Promise<any[]> => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to fetch subtitles: ${response.statusText}`);

    const text = await response.text();
    

    const regex = /\d+\s+([\d:.]+) --> ([\d:.]+)\s+([\s\S]*?)(?=\n\d+\s|$)/g;
    const matches = [...text.matchAll(regex)];

    return matches.map((match) => ({
      startTime: convertToSeconds(match[1]),
      endTime: convertToSeconds(match[2]),
      text: match[3].trim(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

const convertToSeconds = (time: string) => {
  const [hours, minutes, seconds] = time.split(":").map(parseFloat);
  return hours * 3600 + minutes * 60 + seconds;
};
