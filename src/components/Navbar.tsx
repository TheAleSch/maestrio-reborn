"use client";

import { NavArrowRight, ArrowRight } from "iconoir-react";

const navLinks = ["Features", "Docs", "Company", "Pricing"];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[10px] bg-black/20 border-b border-muted-border px-6 sm:px-12 lg:px-32 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <span className="font-space-grotesk font-bold text-xl text-white tracking-tight">
          Maestrio
        </span>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              className="flex items-center gap-0.5 px-2 py-1 rounded-3xl font-inter font-medium text-[13px] text-slate-400 hover:text-white transition-colors"
            >
              {link}
              <NavArrowRight
                width={10}
                height={10}
                className="rotate-90 opacity-70"
              />
            </button>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block font-inter font-medium text-[14px] text-fg1 px-4 py-2 h-10 rounded-md hover:text-white transition-colors">
            Sign in
          </button>
          <button className="flex items-center gap-2 font-inter font-medium text-[14px] text-over-primary bg-[#d1d5db] px-4 py-2 h-10 rounded-md hover:bg-white transition-colors">
            Start free
            <ArrowRight width={16} height={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
