'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 shadow-md py-4 px-8 flex justify-between items-center border-b-2 border-white/25">
      <h1 className="text-2xl font-bold text-white">JobFinder</h1>
      <ul className="flex space-x-6 text-gray-100 font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#jobs">Jobs</Link></li>
      </ul>
    </nav>
  );
}
