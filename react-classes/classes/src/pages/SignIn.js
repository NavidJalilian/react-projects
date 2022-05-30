import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../utils/firebase";
export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>sign in with google</h1>
      <button onClick={logGoogleUser}>sign in withe google popup</button>
    </div>
  );
}
