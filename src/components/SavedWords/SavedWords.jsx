'use client';
import React, { useEffect, useState } from 'react';
import { auth, database } from '../../../firebase/firebaseConfig';
import { ref, onValue, push } from 'firebase/database';

const SavedWords = () => {
  const [savedWords, setSavedWords] = useState([]);

  // Fetch words on component load
  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      const wordsRef = ref(database, `Users/${user.uid}/WordsClicked`);
      onValue(wordsRef, (snapshot) => {
        const data = snapshot.val();
        const words = data ? Object.values(data) : [];
        setSavedWords(words);
      });
    }
  }, []);

  // Save word on button click


  return (
    <div style={{ padding: '20px' }}>
      <h2>Saved Words</h2>

      

      <ul>
        {savedWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavedWords;
