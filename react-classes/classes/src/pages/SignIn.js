import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../components/SignUpForm";
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../utils/firebase";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };
  const signInWithGoogleRedirectFunc = async () => {
    await signInWithGoogleRedirect();
  };

  useEffect(() => {
    const logGoogleUser = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        createUserDocFromAuth(response.user);
      }
    };
    logGoogleUser();
  }, []);

  return (
    <div className="signIn">
      <SignUpForm />
      <button className="btn btn-google " onClick={logGoogleUser}>
        sign in withe google popup
      </button>
      <button className="btn btn-google" onClick={signInWithGoogleRedirectFunc}>
        sign in withe google redirect
      </button>
    </div>
  );
}
