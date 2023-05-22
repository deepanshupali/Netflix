import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);

    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });
  async function videoPlay(item) {
    const requestKey = `https://api.themoviedb.org/3/movie/+${item}/videos?api_key=20b145afb6480f185b50f1c8f7518972&language=en-US`;
    const res = await axios.get(requestKey);
    let no = Math.floor(Math.random() * (3 - 1 + 0) + 0);
    const key = res.data.results[no].key;
    setKey(key);
    navigate("/video");
  }
  return (
    <AuthContext.Provider
      value={{ videoPlay, signUp, user, logIn, logOut, key }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
