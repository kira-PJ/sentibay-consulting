import Link from "next/link";
import Image from "next/image";
import { Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="bg-white rounded-xl px-3 py-2 inline-block mb-3">
            <img src="/images/logo.png" alt="KiraTechHub" className="h-8 w-auto object-contain" />
          </div>
          <p className="text-blue-200 text-sm max-w-xs">
            AWS cloud training, certification prep, and consulting for individuals and enterprise teams.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-blue-200">
          <Link href="/courses" className="hover:text-white">Courses</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/training" className="hover:text-white">Corporate Training</Link>
          <Link href="/consulting" className="hover:text-white">Consulting</Link>
        </div>
        <div className="flex gap-4 items-start">
          <a href="https://www.youtube.com/@kiratechhub" target="_blank" rel="noopener noreferrer"
            className="text-blue-200 hover:text-white" aria-label="YouTube">
            <Youtube size={22} />
          </a>
          <a href="https://www.linkedin.com/in/paulinenamwakira/" target="_blank" rel="noopener noreferrer"
            className="text-blue-200 hover:text-white" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
        </div>
      </div>
      <div className="border-t border-blue-800 text-center text-xs text-blue-300 py-4">
        © {new Date().getFullYear()} KiraTechHub. All rights reserved.
      </div>
    </footer>
  );
}
