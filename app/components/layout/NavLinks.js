"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ color = "dark" }) => {
  const pathname = usePathname();

  const baseClass =
    color === "light" ? "nav-link nav-link-light" : "nav-link";

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      <li className="nav-item">
        <Link
          href="/"
          className={`${baseClass} ${isActive("/") ? "active" : ""}`}
          aria-current={isActive("/") ? "page" : undefined}
          title="Khodiyar Oil Mill Home"
        >
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          href="/product"
          className={`${baseClass} ${isActive("/product") ? "active" : ""}`}
          aria-current={isActive("/product") ? "page" : undefined}
          title="Pure Groundnut Oil Products"
        >
          Product
        </Link>
      </li>

      <li className="nav-item">
        <Link
          href="/process"
          className={`${baseClass} ${isActive("/process") ? "active" : ""}`}
          aria-current={isActive("/process") ? "page" : undefined}
          title="Traditional Groundnut Oil Making Process"
        >
          Our Process
        </Link>
      </li>

      <li className="nav-item">
        <Link
          href="/about"
          className={`${baseClass} ${isActive("/about") ? "active" : ""}`}
          aria-current={isActive("/about") ? "page" : undefined}
          title="About Khodiyar Oil Mill"
        >
          About
        </Link>
      </li>

      <li className="nav-item">
        <Link
          href="/contact"
          className={`${baseClass} ${isActive("/contact") ? "active" : ""}`}
          aria-current={isActive("/contact") ? "page" : undefined}
          title="Contact Khodiyar Oil Mill"
        >
          Contact Us
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
