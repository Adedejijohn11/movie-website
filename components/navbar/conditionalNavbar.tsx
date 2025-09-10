"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Hide navbar on profile page
  if (!pathname) return null;

  if (
    pathname === "/profile" ||
    pathname === "/" ||
    pathname === "/auth/login" ||
    pathname === "/auth/register" ||
    pathname === "/mylist" ||
    //  hide only detail pages like /movies/123
    (pathname.startsWith("/movies/") && pathname !== "/movies")
  ) {
    return null;
  }

  return <Navbar />;
}
