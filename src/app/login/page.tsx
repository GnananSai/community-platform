"use client";

import Login from "@/components/Login";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function loginPage() {
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
          localStorage.setItem("token", data.token);
          login(data.token);
          router.replace("/home");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => alert(err.message));
  };
  return <Login onLogin={handleLogin} />;
}
