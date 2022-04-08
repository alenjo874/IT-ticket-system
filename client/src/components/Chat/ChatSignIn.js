import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "./firebase.js";

function ChatSignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default ChatSignIn;
