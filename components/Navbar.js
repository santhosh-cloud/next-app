import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="nav">
        <ul className="nav-list">
          <Link href="/">
            <a>
              <li className="nav-item">Home</li>
            </a>
          </Link>
          <Link href="/cowin">
            <a>
              <li className="nav-item">Cowin</li>
            </a>
          </Link>
          <Link href="/gradeup">
            <a>
              <li className="nav-item">Gradeup</li>
            </a>
          </Link>
          <Link href="/testbook">
            <a>
              <li className="nav-item">Testbook</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
