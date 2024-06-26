"use client";

import Login from "@/components/Login";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useUser } from "@/context/UserContext";

export default function loginPage() {
  const { setUser } = useUser();
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem("token", data.token);
          login(data.token);
          setUser(data.user);
          // console.log(data.user);
          router.replace("/home");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => alert(err.message));
  };
  return <Login onLogin={handleLogin} />;
}
