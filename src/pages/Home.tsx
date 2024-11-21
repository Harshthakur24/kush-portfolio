import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-xl p-8 transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">My Journey in BCA</h2>
        <div className="prose prose-lg">
          <p className="text-gray-700 leading-relaxed mb-4">
            Hello! I'm Kush, a passionate BCA (Bachelor of Computer Applications) student. My journey in the world of computer science has been nothing short of amazing. Throughout my academic career, I've developed a deep understanding of various programming languages, software development principles, and computer systems.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            During my BCA program, I've had the opportunity to work on numerous exciting projects, from web development to database management. Each project has helped me grow both technically and personally, preparing me for the challenges of the tech industry.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I'm particularly interested in web development and software engineering, and I'm always eager to learn new technologies and frameworks. My goal is to become a skilled software developer who can create innovative solutions to real-world problems.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}