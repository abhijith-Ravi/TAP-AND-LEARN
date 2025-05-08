'use client';

import Link from 'next/link';
import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase/firebaseConfig'; // Make sure path is correct
import { useAuth } from '../../context/authcontext'; // Adjust path if needed

const Navbar = () => {
   const { setUid } = useAuth(); // ✅ Move hook call here

  // async function handleLogout() {
  //   try {
  //     await signOut(auth); // Use your already imported `auth` instance
  //     setUid(null);

  //     console.log("Logout successful");
  //   } catch (error) {
  //     console.error("Logout error:", error.message);
  //   }
  // }

  return (
    <div>
      <Link href="/"><button>HOME</button></Link>
      <Link href="/login"><button>Login</button></Link>
      <Link href="/signup"><button>Signup</button></Link>
      <Link href="/allsavedwords"><button>Saved Words</button></Link>
      <button onClick={async () => {
        try {
  
          await signOut(auth);
          setUid(null);
          console.log("Logout successful");
        } catch (error) {
          console.error("Logout error:", error.message);
        }
      }}>Logout</button>
    </div>
  );
};

export default Navbar;
