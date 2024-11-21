import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80"
          alt="Tech Workshop"
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Tech Innovation Workshop 2024</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Join us for an exciting two-day workshop focused on the latest technologies in web development and artificial intelligence. Learn from industry experts, participate in hands-on coding sessions, and network with fellow tech enthusiasts.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Workshop Highlights:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Modern Web Development Practices</li>
                <li>AI and Machine Learning Fundamentals</li>
                <li>Cloud Computing and DevOps</li>
                <li>Networking Sessions</li>
              </ul>
            </div>
            <div className="mt-8">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  Register Now
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}