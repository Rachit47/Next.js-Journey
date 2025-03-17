"use client";
import React from "react";
import { useRouter } from "next/navigation";
const PageOne = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push(`${page}`);
  };
  return (
    <div>
      <h1>Welcome to Page 1</h1>
      <button
        onClick={() => {
          navigate("/page2");
        }}
      >
        Go To Page 2
      </button>
    </div>
  );
};

export default PageOne;
