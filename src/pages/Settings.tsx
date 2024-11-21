import { motion } from 'framer-motion';
import { Bell, Lock, Eye, Moon, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Settings</h2>
        
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notifications
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Enable notifications</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              Privacy
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" className="rounded text-indigo-600 mr-3" />
                <span className="text-gray-600">Make profile public</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="rounded text-indigo-600 mr-3" />
                <span className="text-gray-600">Show email address</span>
              </div>
            </div>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Appearance
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Dark mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Language
            </h3>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
}