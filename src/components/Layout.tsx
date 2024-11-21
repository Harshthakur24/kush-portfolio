import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, User, Settings, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/events', label: 'Events' },
    { path: '/register', label: 'Register' },
    { path: '/about', label: 'About Us' },
  ];

  const dropdownItems = [
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <header className="glass-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/home" className="group">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                           from-primary-600 to-secondary-600 transition-all duration-300
                           group-hover:from-secondary-600 group-hover:to-primary-600 flex flex-row items-center gap-4">
                <div className="w-10 h-10">
                  <img src="/logo.jpg" alt="" />
                </div>Kush's Webpage
              </h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button
                  className="nav-link flex items-center space-x-1"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>Home</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute z-10 w-48 mt-2 glass-card rounded-xl overflow-hidden"
                    >
                      {dropdownItems.map(({ path, label, icon: Icon }) => (
                        <Link
                          key={path}
                          to={path}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 
                                   transition-colors duration-300 items-center space-x-2"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {menuItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'text-primary-600' : ''}`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}