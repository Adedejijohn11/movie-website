"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Hide navbar on profile page
  if (pathname === "/profile" || pathname === "/") {
    return null;
  }

  return <Navbar />;
}
