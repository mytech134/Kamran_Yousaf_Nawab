"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Categories", href: "/categories" },
    { name: "Collections", href: "/collections" },
    { name: "Services", href: "/services" },
    { name: "Quality", href: "/quality" },
    { name: "Global Markets", href: "/global-markets" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        
        {/* LOGO & BRAND NAME */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png" // Public folder mein logo.png save karein
              alt="Kamran Yousaf Nawab Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="text-lg font-black uppercase tracking-tighter text-white sm:text-xl">
            Kamran Yousaf <span className="text-[#D4FF00]">Nawab</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-[#D4FF00]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA BUTTON & MOBILE MENU */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#D4FF00] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#111111] transition-transform hover:scale-105 sm:block"
          >
            Request a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#111111] px-5 py-6 lg:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-[#D4FF00]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-[#D4FF00] px-6 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#111111]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}