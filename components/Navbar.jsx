// components/Navbar.js
"use client";
import Link from "next/link";
// import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeButton } from "@/components/ThemeButton";
const Navbar = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <nav className="px-4 bg-background/50 sticky top-0 z-10 backdrop-blur text-primary shadow-primary">
      <div className="max-w-7xl border-b border-b-primary mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">Blogger</Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/about" className="hover:scale-105 hover:drop-shadow-md hover:font-semibold transition-transform duration-300">About</Link>
            <Link href="/blog" className="hover:scale-105 hover:drop-shadow-md hover:font-semibold transition-transform duration-300">Blog</Link>
            <Link href="/contact" className="hover:scale-105 hover:drop-shadow-md hover:font-semibold transition-transform duration-300">Contact</Link>
            <ThemeButton />
            <div>
              <Button className="mx-1" variant="outline">
                Login
              </Button>
              <Button className="mx-1" variant="primary">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeButton />
            <Sheet>
              <SheetTrigger>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={"M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </SheetTrigger>
              <SheetContent className="bg-secondary">
                <SheetHeader>
                  <SheetTitle>Blogger</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col items-end gap-3 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <Link href="/about" className="mx-1 hover:scale-105 hover:drop-shadow-md hover:font-semibold transition-transform duration-300">
                        About
                      </Link>
                      <Link href="/contact" className="mx-1 hover:scale-105 hover:drop-shadow-md hover:font-semibold transition-transform duration-300">
                        Contact
                      </Link>
                      <Link href="/blog" className="mx-1 hover:scale-105 hover:drop-shadow-md hover:font-semibold transition-transform duration-300">
                      Blog
                      </Link>
                      <div className="flex gap-3">
                        <Button className="mx-1 text-xs" variant="outline">Login</Button>
                        <Button className="mx-1 text-xs" >
                          Sign Up
                        </Button>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
