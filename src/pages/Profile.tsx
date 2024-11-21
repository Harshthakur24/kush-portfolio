import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin } from 'lucide-react';

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-32"></div>
        <div className="relative px-8 py-6">
          <div className="absolute -top-16 left-8">
            <div className="bg-white p-2 rounded-full">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-4">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800">Kush</h2>
            <p className="text-gray-600 mt-2">BCA Student & Web Developer</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-indigo-600" />
                <span>kush@example.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-indigo-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span>Mumbai, India</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}