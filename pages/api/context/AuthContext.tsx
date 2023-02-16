import { signOut } from "firebase/auth";
// import { auth } from "firebase/config";

import { useContext, createContext, useState, ReactNode } from "react";

export const AuthContext = createContext<any | null>(null);

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [userDetail, setUserDetail] = useState<object>({});
  
  // const logOut = () => {
  //   signOut(auth);
  // }

  return (
    <AuthContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
