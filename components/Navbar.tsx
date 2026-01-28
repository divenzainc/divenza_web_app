'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/about-us' },
  {
    label: 'What We Do',
    href: '/services',
    children: [
      { label: 'Web Application Development', href: '/services/web-application-development', description: 'Grow your online presence' },
      { label: 'Mobile Apps', href: '/services/mobile-apps', description: 'Advanced mobile applications' },
      { label: 'AI Automation', href: '/services/ai-automation', description: 'Automate your business processes' },
      { label: 'Digital Marketing', href: '/services/digital-marketing', description: 'Grow your online presence' },
      { label: 'Social Media Marketing', href: '/services/social-media', description: 'Engage your audience effectively' },
      { label: 'Branding', href: '/services/branding', description: 'Build a memorable brand identity' },
      { label: 'SEO', href: '/services/seo', description: 'Rank higher on search engines' },
      { label: 'Custom Software', href: '/services/custom-software', description: 'Tailored solutions for your needs' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Ditech', href: '/products/ditech', description: 'Multi-branch business management system' },
      { label: 'Diseller', href: '/products/diseller', description: 'Complete ecommerce solution platform' },
      { label: 'Dipos', href: '/products/dipos', description: 'Point of Sales management system' },
    ],
  },
  // { label: 'Our Culture', href: '/our-culture' },
  { label: 'Our Community', href: '/our-community' },
  { label: 'Say Hello', href: '/contact-us' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">{" { Divenza } "}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                            className="flex items-center px-4 py-2 text-primary hover:text-primary transition-colors duration-200 font-medium"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.children && (
                  <div
                    className={`absolute left-0 mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2 ${
                      item.label === 'What We Do' ? 'w-[580px] -left-40' : 'w-72'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className={`bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden ${
                      item.label === 'What We Do' ? 'p-4' : ''
                    }`}>
                      <div className={item.label === 'What We Do' ? 'grid grid-cols-2 gap-2' : ''}>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-5 py-4 hover:bg-gray-50 transition-colors duration-150 ${
                              item.label === 'What We Do'
                                ? 'rounded-lg'
                                : 'border-b border-gray-50 last:border-b-0'
                            }`}
                          >
                            <span className="block text-gray-800 font-medium">{child.label}</span>
                            {child.description && (
                              <span className="block text-sm text-gray-500 mt-1">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact-us"
            className="inline-flex items-center px-6 py-2.5 bg-secondary text-white font-medium rounded-full hover:bg-primary-light transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              We're Here
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                  {item.children ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-4 text-gray-700 font-medium"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-4 space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block py-3 px-4 rounded-lg bg-gray-50 hover:bg-secondary/10 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className="block text-gray-800 font-medium">{child.label}</span>
                                  {child.description && (
                                    <span className="block text-sm text-gray-500 mt-0.5">{child.description}</span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-gray-700 font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact-us"
                    className="block w-full text-center px-6 py-3 bg-secondary text-white font-medium rounded-full hover:bg-primary-light transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  We're Here
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
