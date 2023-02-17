// import { signOut } from "firebase/auth";
// import { auth } from "firebase/config";

import { useContext, createContext, useState, ReactNode } from "react";

// export const AuthContext = createContext<any | null>(null);

// type Props = {
//   children: ReactNode;
// };

type AuthContextProps = {
  user: any | null;
  setUser: (user: any | null) => void;
};

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
});

export function UseAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  
  // const logOut = () => {
  //   signOut(auth);
  // }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
