"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-8">
      <div className="max-w-12xl mx-auto px-10 grid items-center gap-6 grid-cols-[250px_1fr_260px] md:grid-cols-[250px_1fr_250px] sm:grid-cols-1">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wider">
          <Image src="/logo.webp" alt="Logo" width={150} height={80}></Image>
        </div>

        {/* Hero text */}
        <div className="flex justify-center">
          <h1
            id="heroTitle"
            className="font-light leading-[1.2] text-[clamp(22px,2.2vw,40px)] w-[35vw]"
          >
            Premium Ceramic tiles & <br/> bathware in Sharjah
          </h1>
        </div>

        {/* Nav */}
        <nav className="flex justify-end items-center w-full space-x-3">
          <button
            id="talkBtn"
            className="bg-[#1f2937] text-white rounded-full px-6 py-3 font-semibold shadow-md min-w-[190px] flex items-center justify-center gap-3"
          >
            LET&apos;S TALK
            <span className="w-2 h-2 bg-white rounded-full opacity-90" />
          </button>

          <button
            id="menuBtn"
            className="rounded-full px-4 py-2 bg-white flex items-center gap-2"
            onClick={() => setIsMenuOpen(true)}
          >
            MENU <span className="text-sm">••</span>
          </button>
        </nav>
      </div>

      {/* Mega menu overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsMenuOpen(false)}
        />

        <div className="relative w-full">
          <div className={`absolute top-30 right-4 md:right-4 lg:right-4 w-full max-w-sm md:max-w-[380px] mx-auto md:mx-0 px-4 transition-all duration-300 transform ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0 pointer-events-none"
          }`}>
            <div
              className="bg-white rounded-xl p-6 shadow-lg relative"
            >
              <button
                aria-label="Close menu"
                className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full text-sm hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                CLOSE
              </button>

              <nav className="mt-5 flex flex-col gap-5">
                <Link href="#" className="menu-item font-light py-4 border-b border-gray-800 hover:opacity-60 transition">
                  HOME <span className="w-2 h-2 bg-black rounded-full" />
                </Link>

                <Link href="#" className="menu-item font-light py-4 border-b border-gray-800 hover:opacity-60 transition">
                  ABOUT US <span className="w-2 h-2 bg-black rounded-full" />
                </Link>

                <Link href="#" className="menu-item font-light py-4 border-b border-gray-800 hover:opacity-60 transition">
                  PROJECTS <span className="w-2 h-2 bg-black rounded-full" />
                </Link>

                <Link href="#" className="menu-item font-light py-4 border-b border-gray-800 hover:opacity-60 transition">
                  CONTACT <span className="w-2 h-2 bg-black rounded-full" />
                </Link>
              </nav>

              {/* <div className="mt-6">
                <Link
                  href="#"
                  className="labs-btn block bg-black text-white rounded-lg px-4 py-4 text-lg flex items-center justify-between hover:bg-gray-800 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">ö</span>
                    <span>LABS</span>
                  </div>
                  <span className="text-xl">→</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}