"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';



const sections = ['About', 'Experience', 'Education', 'Projects', 'Skills'];

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center py-6 shadow-xl">
      <div className="relative w-40 h-40 mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105">
        <Image
          src="/profile.jpeg"
          alt="Your Profile Picture"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <nav className="w-full px-4">
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section.toLowerCase()}`}
                className={`
                  block py-2 px-4 text-center rounded-lg transition-all duration-300 ease-in-out
                  transform hover:scale-105 hover:shadow-md
                  ${activeSection === section
                    ? 'bg-white text-blue-600 font-semibold shadow-md'
                    : 'bg-blue-700 text-white hover:bg-blue-800'
                  }
                `}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <a href="/syed_shah_resume.pdf" download className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

