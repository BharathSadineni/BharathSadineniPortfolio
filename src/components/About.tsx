import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg'; // You'll need to add your profile picture to this path

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-20 bg-white dark:bg-[#0B1121] transition-colors duration-500"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-[#0A1E3F] dark:to-[#0B1121] opacity-30 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full max-w-md mx-auto">
            <img
              src={profilePic}
              alt="Bharath Sadineni"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
              About Me
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-500">
              I am a curious and driven software developer with a BSc in Artificial Intelligence and Computer Science from the University of Birmingham. I specialize in building accessible, scalable web applications with intelligent features, leveraging technologies such as Django, React, TensorFlow, and Docker.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-500">
              With hands-on experience in machine learning, natural language processing, and full-stack development, I enjoy tackling complex, real-world problems. My projects demonstrate this versatility: I developed a contactless "Virtual Mouse" that enables cursor control through hand gestures using OpenCV, MediaPipe, and PyAutoGUI. I also created "Eventually Yours," an AI-driven shopping assistant featuring a modern React/TypeScript frontend and Flask backend integrated with Google's Gemini API. Additionally, I built systems for detecting misinformation on social media and AI-powered platforms to connect sports enthusiasts.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-500">
              These projects illustrate my ability to bridge cutting-edge machine learning with practical, polished software solutions. I thrive on turning curiosity into code and am always eager to explore new technologies that expand my skill set and deliver robust, end-to-end solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-blue-600 dark:text-blue-500 text-lg font-semibold mb-2 transition-colors duration-300 hover:text-blue-800 dark:hover:text-blue-400 cursor-pointer">
                  Education
                </h3>
                <div className="text-gray-900 dark:text-white font-medium transition-colors duration-500">BSc Artificial Intelligence and Computer Science</div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors duration-500">University of Birmingham, 2024</div>
              </div>

              <div>
                <h3 className="text-blue-600 dark:text-blue-500 text-lg font-semibold mb-2 transition-colors duration-300 hover:text-blue-800 dark:hover:text-blue-400 cursor-pointer">
                  Location
                </h3>
                <div className="text-gray-900 dark:text-white font-medium transition-colors duration-500">Birmingham, UK</div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors duration-500">Available for remote work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
