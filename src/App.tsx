import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ProjectVideo from './Project_Video.mp4';
import BingoVideo from './Bingo Recording.mp4';
import StudentManagerVideo from './Student_Manager.mp4';
import VirtualMouseVideo from './Virtual Mouse Video.mp4';
import EventuallyYoursVideo from './EventuallyYoursShoppingAppDemo.mp4';
import LoopifyVideo from './LoopifyDemo.mp4';
import BatteryIndicatorVideo from './BatteryIndicatorDemo.mp4';
import stac from './stac.png';
import mazelogo from './maze logo.avif';
import clientlogo from './clientlogo.png';
import { Header } from './components/Header';
import About from './components/About';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import { ErrorBoundary } from './components/ErrorBoundary';

interface Project {
  title: string;
  description: string;
  github?: string;
  media: string;
  tags?: string[];
}

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const sectionControls = useAnimation();
  const projectsControls = useAnimation();
  const skillsControls = useAnimation();
  const linksControls = useAnimation();

  const [sectionRef, sectionInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [, skillsInView] = useInView({ triggerOnce: true });
  const [linksRef, linksInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const animateOnScroll = async () => {
      if (sectionInView) await sectionControls.start({ opacity: 1, y: 0 });
      if (projectsInView) await projectsControls.start({ opacity: 1 });
      if (skillsInView) await skillsControls.start({ opacity: 1 });
      if (linksInView) await linksControls.start({ opacity: 1 });
    };

    animateOnScroll();
  }, [sectionInView, projectsInView, skillsInView, linksInView, sectionControls, projectsControls, skillsControls, linksControls]);

  const projects: Project[] = [
    {
      title: 'Virtual Mouse with Hand Tracking',
      description:
        'A Python-based virtual mouse/trackpad system that uses your webcam and hand gestures to control the mouse cursor, perform clicks, and scroll on your Windows computer. Powered by OpenCV, MediaPipe, and PyAutoGUI, this project enables touchless, intuitive control of your computer using only your hand.',
      github: 'https://github.com/BharathSadineni/Virtual-Mouse',
      media: VirtualMouseVideo,
      tags: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'Computer Vision', 'Hand Tracking']
    },
    {
      title: 'Eventually Yours Shopping App',
      description:
        'A modern, AI-powered shopping assistant that provides personalized product recommendations based on your preferences and shopping context. The app uses advanced AI and live product data to help you shop smarter, find the perfect products for any occasion, and manage your shopping profile with ease.',
      github: 'https://github.com/BharathSadineni/Eventually-Yours-shopping-app-Project-',
      media: EventuallyYoursVideo,
      tags: ['React', 'TypeScript', 'Python', 'Flask', 'AI', 'Web Scraping', 'Tailwind CSS']
    },
    {
      title: 'Loopify',
      description:
        'The revolutionary mini player that lets you control exactly how many times you want a song to loop! Instead of struggling between "Loop Off", "Playlist Loop", and "Loop One Song Forever", Loopify gives you precise control over how many times you want a song to repeat. ',
      github: 'https://github.com/BharathSadineni/Loopify',
      media: LoopifyVideo,
      tags: ['Python', 'Electron', 'React', 'Spotify API', 'Desktop App', 'JavaScript']
    },
    {
      title: 'Hybrid Stance Detection for Tweets',
      description:
        'This project implements a hybrid stance detection system designed to analyze and detect misinformation on Twitter. The system preprocesses tweet data, vectorizes text using TF-IDF, and generates features for accurate stance prediction.',
      github: 'https://github.com/BharathSadineni/Hybrid-Stance-Detection-for-Tweets',
      media: stac,
      tags: ['Python', 'Machine Learning', 'NLP', 'TF-IDF', 'Scikit-learn']
    },
    {
      title: 'Match Point',
      description:
        'Match Point is a React and Django-based project that allows users to connect together with other users based on their favorite sports and their individual traits.',
      media: ProjectVideo,
      tags: ['React', 'Django', 'PostgreSQL', 'REST API', 'Tailwind CSS']
    },
    {
      title: 'Battery Indicator Dot',
      description:
        'A minimal floating dot for Windows that shows your battery charging status using a colored dot overlay. Green means charging, gray means not charging. Perfect for distraction-free, full-screen setups where you want to check charging status without opening the taskbar.',
      github: 'https://github.com/BharathSadineni/Battery-Indicator-Dot',
      media: BatteryIndicatorVideo,
      tags: ['Python', 'Tkinter', 'Windows', 'System Tray', 'Battery Monitoring']
    },
    {
      title: 'Customized Bingo Game',
      description:
        'A customizable Bingo game using Java that allows users to set their own card size and play with unique combinations of numbers.',
      github: 'https://github.com/BharathSadineni/Customized_Bingo_Game',
      media: BingoVideo,
      tags: ['Java', 'OOP', 'Game Dev']
    },
    {
      title: 'Story Based Maze Game',
      description:
        'A story-based maze game built using Java, designed with intuitive algorithms for an immersive and challenging experience.',
      github: 'https://github.com/BharathSadineni/Maze',
      media: mazelogo,
      tags: ['Java', 'Algorithms', 'Game Dev']
    },
    {
      title: 'Concurrent Client Server System',
      description:
        'A secure client-server application with authentication functionality for user login and streamlined data pipeline.',
      github: 'https://github.com/BharathSadineni/Client-Server',
      media: clientlogo,
      tags: ['Java', 'Networking', 'Security']
    },
    {
      title: 'Student Manager',
      description:
        'Java program utilizing full stack and OOP techniques for managing student information with a user-friendly FXML interface.',
      github: 'https://github.com/BharathSadineni/StudentManager',
      media: StudentManagerVideo,
      tags: ['Java', 'FXML', 'OOP']
    },
  ];

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ErrorBoundary>
      <div className={`min-h-screen bg-white dark:bg-github-dark-bg text-github-light-text dark:text-github-dark-text github-transition cursor-tech overflow-x-hidden`}>
        <Header theme={theme} toggleTheme={toggleTheme} />

        <motion.div
          id="home"
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionControls}
          className="py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden px-4 sm:px-6 lg:px-8"
        >
          <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
            <div className="inline-block bg-github-light-muted dark:bg-github-dark-muted p-2 sm:p-3 mb-4 border rounded-md border-github-light-border dark:border-github-dark-border">
              <p className="text-github-light-secondary dark:text-github-dark-secondary text-sm sm:text-base">
                Welcome to my portfolio
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="block text-github-light-text dark:text-github-dark-text">
                Bharath Sadineni
              </span>
              <span className="block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-github-light-primary dark:text-github-dark-primary">
                Artificial Intelligence and Machine Learning Graduate
              </span>
            </h1>
            <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-github-light-secondary dark:text-github-dark-secondary px-4 sm:px-0">
                I am a graduate from the University of Birmingham with a BSc in Artificial Intelligence & Computer Science. I craft intelligent, user-focused applications using modern frameworks and clean, maintainable code. With a strong foundation in AI and computer science, I'm passionate about building technology that's not just functional but impactful.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="github-button-primary text-base sm:text-lg w-full sm:w-auto"
              >
                View My Work
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="github-button text-base sm:text-lg w-full sm:w-auto"
              >
                Get in Touch
              </ScrollLink>
            </div>
          </div>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block"
            offset={-50}
          >
            <FaChevronDown className="text-2xl sm:text-3xl text-github-light-secondary dark:text-github-dark-secondary" />
          </ScrollLink>
        </motion.div>

        <motion.div
          id="projects"
          ref={projectsRef}
          initial={{ opacity: 0 }}
          animate={projectsControls}
          className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my recent work showcasing data-driven design, modern development practices, and innovative solutions to real-world challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-github-dark-muted rounded-lg shadow-lg overflow-hidden github-transition hover:scale-105"
              >
                <div className="p-4 sm:p-6 h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold mb-4">{project.title}</h3>
                  <div className="mb-4 flex-shrink-0">
                    {project.media.endsWith('.mp4') ? (
                      <video
                        src={project.media}
                        controls
                        className="w-full h-[200px] sm:h-[250px] object-contain bg-[#0D1117] rounded-lg"
                      />
                    ) : (
                      <img
                        src={project.media}
                        alt={project.title}
                        className="w-full h-[200px] sm:h-[250px] object-contain bg-[#0D1117] rounded-lg"
                      />
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-github-light-text dark:text-github-dark-text mb-4 flex-grow whitespace-pre-line">
                    {project.description}
                  </p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-github-light-muted dark:bg-[#1F2937] rounded-full border border-github-light-border dark:border-github-dark-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-button-primary inline-flex items-center justify-center mt-auto text-sm sm:text-base w-full sm:w-auto"
                    >
                      <FaGithub className="mr-2" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Skills />

        <About />

        <Contact />

        <motion.div
          id="connect"
          ref={linksRef}
          initial={{ opacity: 0 }}
          animate={linksControls}
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Connect
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Find me on these platforms and let's stay in touch
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/BharathSadineni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:text-github-light-primary dark:hover:text-github-dark-primary github-transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/bharath-sadineni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:text-github-light-primary dark:hover:text-github-dark-primary github-transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="fixed bottom-4 right-4 bg-github-light-primary dark:bg-github-dark-primary text-white p-2 sm:p-3 rounded-full cursor-pointer opacity-70 hover:opacity-100 github-transition text-sm sm:text-base"
        >
          ↑
        </ScrollLink>
      </div>
    </ErrorBoundary>
  );
};

export default App; 