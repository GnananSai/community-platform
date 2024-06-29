// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  isAuth: boolean;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      // Only redirect if not authenticated and not on the login page
      router.push("/");
    }
    setLoading(false); // Mark loading as complete
  }, [router]);

  const login = (token: string) => {
    sessionStorage.setItem("token", token);
    setIsAuth(true);
    setLoading(false); // Mark loading as complete
    router.push("/home");
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setIsAuth(false);
    setLoading(false); // Mark loading as complete
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ isAuth, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
