'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    { name: 'DI Tech', href: '/products/ditech' },
    { name: 'DI Seller', href: '/products/diseller' },
    { name: 'DI PoS', href: '/products/dipos' },
  ];

  const services = [
    { name: 'Web App Development', href: '/services/web-application-development' },
    { name: 'Mobile App Development', href: '/services/mobile-application-development' },
    { name: 'AI Automations', href: '/services/ai-automations' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Social Media Marketing', href: '/services/social-media' },
    { name: 'Email & SMS Marketing', href: '/services/email-and-sms-marketing' },
    { name: 'Branding', href: '/services/branding' },
    { name: 'SEO', href: '/services/seo' },
    { name: 'Custom Software Solutions', href: '/services/custom-software-solutions' },
  ];

  const company = [
    { name: 'Who We Are', href: '/about-us' },
    { name: 'Say hello', href: '/contact-us' },
    { name: 'Trusted Partners', href: '/contact-us' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-services' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
            background: 'linear-gradient(135deg, #3F3369 0%, #5a4d8a 50%, #32A790 100%)',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-white/80">Subscribe to our newsletter for the latest updates and insights.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/30 w-full sm:w-72 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-background text-foreground font-medium rounded-full hover:bg-background/90 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="text-3xl font-bold text-white">{" { Divenza } "}</span>
              </Link>
              <p className="text-white/80 mb-6 leading-relaxed">
                Empowering businesses with innovative digital solutions. We transform ideas into powerful software that drives growth.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="ml-12">
              <h4 className="text-lg font-semibold text-white mb-6">Products</h4>
              <ul className="space-y-4">
                {products.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {/* <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors duration-200" /> */}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">What We Do</h4>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {/* <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors duration-200" /> */}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
                <ul className="space-y-4">
                    {company.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                            >
                                {/* <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors duration-200" /> */}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@divenza.com"
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3"
                  >
                    <Mail className="w-5 h-5 text-white/60" />
                    info@divenza.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3"
                  >
                    <Phone className="w-5 h-5 text-white/60" />
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3"
                  >
                    <Phone className="w-5 h-5 text-white/60" />
                    +1 (234) 567-890
                  </a>
                </li>
                
              </ul>

              <h4 className="text-lg font-semibold text-white mb-4 mt-8">We Have Established</h4>
              <ul className="space-y-4">
                <li>
                  <div className="text-white/80 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span>123 Business Street,<br />Tech City, TC 12345</span>
                  </div>
                </li>
                <li>
                  <div className="text-white/80 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span>123 Business Street,<br />Tech City, TC 12345</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/70 text-sm text-center md:text-left">
                &copy; {currentYear} Divenza Pvt Ltd. All rights reserved.
              </p>
              <p className="text-white/60 text-sm">
                Crafted with passion for digital excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
