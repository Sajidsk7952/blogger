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

const Navbar = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <nav className="px-4 bg-secondary sticky backdrop-blur">
      <div className="max-w-7xl border-b border-b-black mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">Blogger</Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <div>
              <Button className="mx-1" variant="outline">
                Login
              </Button>
              <Button className="mx-1" variant="outline">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="flex items-center md:hidden">
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
                      <Link href="/about" className="mx-1">
                        About
                      </Link>
                      <Link href="/contact" className="mx-1">
                        Contact
                      </Link>
                      <div className="flex gap-3">
                        <Button className="mx-1 text-xs" variant="outline">Login</Button>
                        <Button className="mx-1 text-xs" variant="outline">
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
