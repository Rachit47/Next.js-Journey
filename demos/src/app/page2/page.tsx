"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PageTwo = () => {
  const router = useRouter();
  const navigate = () => {
    router.back();
  };
  return (
    <div>
      <h1>Welcome To Page 2</h1>
      <p>You are now on page 2</p>
      <button onClick={() => navigate()}>Back</button>
    </div>
  );
};

export default PageTwo;
