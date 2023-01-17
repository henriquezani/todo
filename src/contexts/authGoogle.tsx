import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext, useState, ReactNode } from "react";
import { app } from "../services/firebase";
import { User } from "firebase/auth";

interface AuthContextProps {
  children: ReactNode;
}

interface IAuthContext {
  signInGoogle: () => void;
  signed: boolean;
}

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext<IAuthContext | null>(null);

export const AuthGoogleProvider = ({ children }: AuthContextProps) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({} as User);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;

          setUser(result.user);
          sessionStorage.setItem(
            "@AuthFirebase:tokin",
            JSON.stringify(result.user)
          );

          if (token) {
            sessionStorage.setItem("@AuthFirebase:tokin", token);
          }

          
        }
      })
      .catch((error) => {
        console.log(error);

        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user }}>
      {children}
    </AuthGoogleContext.Provider>
  );
};
