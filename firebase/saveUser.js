import { ref, push, set } from "firebase/database";
import { database } from "../firebase/firebaseConfig"; // Adjust path as needed

export const saveClickedWord = async (uid, word, meaning) => {
  const wordObj = {
    word: word,
    meaning: meaning
  };

  // Push a new entry with both word and meaning together
  const wordRef = push(ref(database, `Users/${uid}/WordsClicked`));
  await set(wordRef, wordObj);
};
