"use client";
import React from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
const Home = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push(`${page}`);
  };
  return (
    <div>
      <Navbar />
      {/* <h1>Welcome to the Home Page</h1>
      <p>This is the landing page of this website.</p>
      <Link href="/dashboard">Go To The Dashboard</Link>
      <Link href="/about" className="bg-blue-400 text-white">
        About
      </Link>
      <Link href="/portfolio" className="bg-blue-400 tetx-white m-4">
        Portofolio
      </Link> */}
      <button onClick={() => navigate("login")}>Go To The Login Page</button>
    </div>
  );
};

export default Home;
