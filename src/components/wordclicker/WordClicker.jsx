'use client';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { saveClickedWord } from '../../../firebase/saveUser';
import { useAuth } from '../../context/authcontext'; // Adjust the path as necessary


export default function WordClicker() {
  const { uid } = useAuth(); // now use this uid globally
  const { setUid } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleClick = async (word) => {
    if (!uid) {
      alert("Please log in");
      return;
    }

    await saveClickedWord(uid, word);
    alert(`Saved word: ${word}`);
  };

  return (
    <div>
      <p>
        Click a word:{" "}
        <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => handleClick("apple")}>apple</span>,{" "}
        <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => handleClick("banana")}>banana</span>
      </p>
    </div>
  );
}
