'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              GameMotivate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="#home"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm tracking-wide"
            >
              Home
            </Link>
            <Link
              href="#games"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm tracking-wide"
            >
              Games
            </Link>
            <Link
              href="#thoughts"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm tracking-wide"
            >
              Motivation
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm tracking-wide"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <Link
              href="#home"
              className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#games"
              className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Games
            </Link>
            <Link
              href="#thoughts"
              className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Motivation
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

