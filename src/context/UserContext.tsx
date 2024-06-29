"use client";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  use,
} from "react";
// import { useRouter } from "next/navigation";
import { IUser } from "@/models/User";

interface UserContextType {
  user: IUser;
  setUser: (user: IUser) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //   const router = useRouter();
  const [user, setUser] = useState({} as any);

  useEffect(() => {
    const _user = JSON.parse(sessionStorage.getItem("user") || "{}");
    fetch(`/api/profile/?id=${_user?._id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      setUser(data.user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};
