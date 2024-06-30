"use client";
import SignUp from "@/components/SignUp";
import { useRouter } from "next/navigation";

export default function registerPage() {
  const router = useRouter();

  const handleSignup = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, confirmPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          router.push("/login");
        } else {
          alert(data.message || "Signup failed");
        }
      })
      .catch((err) => alert(err.message || "Something went wrong"));
  };

  return <SignUp onSignup={handleSignup} />;
}
