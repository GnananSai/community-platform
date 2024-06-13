"use client";

import Image from "next/image";
import Navbar1 from "../components/Navbar1";
import Login from "@/components/Login";

export default function Home() {
  return (
    <main>
      <Navbar1 />
      <Login/>
    </main>
  );
}
