import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      {" "}
      <ul>
        <div>
          <h1>Logo</h1>
        </div>
        <div className="m-4">
          <Link href="/">Home</Link>
          <Link className="m-4" href="/about">
            About
          </Link>
          <Link className="m-4" href="/portfolio">
            Porfolio
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
