import { motion } from 'framer-motion';
import { FaTools, FaCloud, FaGlobe, FaRobot, FaChartBar, FaBullseye, FaCode, FaDatabase, FaLightbulb } from 'react-icons/fa';

const skills = [
  {
    title: 'Programming & Scripting',
    icon: <FaCode size={24} />,
    items: ['Python', 'Java', 'JavaScript/TypeScript', 'SQL', '(Learning C++/Go)'],
  },
  {
    title: 'Web & App Development',
    icon: <FaGlobe size={24} />,
    items: ['React', 'Next.js', 'Node.js', 'Flask', 'Responsive UI/UX', 'Tailwind CSS', 'Material UI'],
  },
  {
    title: 'Machine Learning & Data Science',
    icon: <FaRobot size={24} />,
    items: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'Pandas', 'NumPy', 'SciPy', 'Tableau/Power BI'],
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools size={24} />,
    items: ['Git/GitHub', 'VS Code', 'Netlify', 'AWS (EC2, S3, Lambda)', 'Docker', 'RESTful APIs', 'Third-party API integration'],
  },
  {
    title: 'Databases & Data Storage',
    icon: <FaDatabase size={24} />,
    items: ['MySQL/PostgreSQL', 'MongoDB', 'SQLite', 'Data modeling', 'Query optimization'],
  },
  {
    title: 'Other Interests',
    icon: <FaLightbulb size={24} />,
    items: ['Computer vision', 'Image/video analysis', 'Gesture recognition', 'Human-computer interaction', 'System utilities'],
  },
];

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0B1121] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
          Skills
        </h2>
        <p className="text-base sm:text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 transition-colors duration-300 px-4 sm:px-0">
          My technical expertise spans AI-driven development, robust backend architecture, and scalable frontend design. Core competencies include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.005 }}
              className="bg-gray-50 dark:bg-[#1a1f36] rounded-lg shadow-md p-4 sm:p-6 transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-gray-900 dark:text-white transition-colors duration-300">
                <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">
                  {skill.icon}
                </span>
                {skill.title}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {skill.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-center gap-2 transition-colors duration-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
