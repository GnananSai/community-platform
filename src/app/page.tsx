"use client";

import Image from "next/image";
import Navbar1 from "../components/Navbar1";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <main>
      <Navbar1 />
      <Login/>
      <SignUp/>
    </main>
  );
}
