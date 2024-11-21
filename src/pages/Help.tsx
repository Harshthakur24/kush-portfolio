import { motion } from 'framer-motion';
import { HelpCircle, Book, MessageCircle, Phone } from 'lucide-react';

export default function Help() {
  const faqs = [
    {
      question: "How do I update my profile?",
      answer: "You can update your profile by navigating to the Profile page through the Home dropdown menu and clicking the edit button."
    },
    {
      question: "How can I register for events?",
      answer: "Visit the Events page, find the event you're interested in, and click the Register button. Fill out the registration form with your details."
    },
    {
      question: "What subscription options are available?",
      answer: "We offer two subscription options: Newsletter and Magazine. You can select your preferred option during registration."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center">
          <HelpCircle className="w-8 h-8 mr-2" />
          Help Center
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-indigo-50 rounded-lg">
            <Book className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Documentation</h3>
            <p className="text-gray-600">Browse our detailed documentation</p>
          </div>
          
          <div className="p-6 bg-indigo-50 rounded-lg">
            <MessageCircle className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Chat Support</h3>
            <p className="text-gray-600">Chat with our support team</p>
          </div>
          
          <div className="p-6 bg-indigo-50 rounded-lg">
            <Phone className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">Call our support helpline</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b pb-4"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Still Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you couldn't find the answer you're looking for, please contact our support team.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </motion.div>
  );
}