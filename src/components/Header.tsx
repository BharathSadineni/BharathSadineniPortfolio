import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

interface HeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Bharath Sadineni Resume.pdf';
    link.download = 'Bharath Sadineni Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-github-dark-bg border-b border-github-light-border dark:border-github-dark-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-github-light-primary dark:text-github-dark-primary cursor-pointer"
          >
            Bharath Sadineni's Portfolio
          </ScrollLink>
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-github-light-text dark:text-github-dark-text hover:text-github-light-primary dark:hover:text-github-dark-primary cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="text-github-light-text dark:text-github-dark-text hover:text-github-light-primary dark:hover:text-github-dark-primary cursor-pointer"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-github-light-text dark:text-github-dark-text hover:text-github-light-primary dark:hover:text-github-dark-primary cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-github-light-text dark:text-github-dark-text hover:text-github-light-primary dark:hover:text-github-dark-primary cursor-pointer"
            >
              Contact
            </ScrollLink>
            <ScrollLink
              to="connect"
              smooth={true}
              duration={500}
              className="text-github-light-text dark:text-github-dark-text hover:text-github-light-primary dark:hover:text-github-dark-primary cursor-pointer"
            >
              Connect
            </ScrollLink>
            <button
              onClick={handleResumeDownload}
              className="text-github-light-text dark:text-github-dark-text hover:text-github-light-primary dark:hover:text-github-dark-primary cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-github-light-muted dark:hover:bg-github-dark-muted github-transition"
            >
              {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}; 