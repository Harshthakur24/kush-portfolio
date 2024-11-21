import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          src="/college.jpg"
          alt="College Campus"
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">About Our Institution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to our prestigious institution of higher learning. Our college is dedicated to providing quality education in the field of Computer Applications and Information Technology. With state-of-the-art facilities and experienced faculty members, we ensure that our students receive the best possible education to prepare them for successful careers in the tech industry.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To be a leading institution in computer education, fostering innovation, research, and entrepreneurship while nurturing ethical and socially responsible tech professionals.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Provide quality education in computer applications</li>
              <li>Foster industry-academia collaboration</li>
              <li>Promote research and innovation</li>
              <li>Develop well-rounded professionals</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Facilities</h3>
            <p className="text-gray-700 mb-6">
              Our campus features modern computer labs, a comprehensive library, smart classrooms, and dedicated research centers. We also provide various extracurricular activities and clubs to ensure holistic development of our students.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-700">
                Address: 123 Education Street, Knowledge City<br />
                Email: info@college.edu<br />
                Phone: (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}