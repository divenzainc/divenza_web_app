'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail } from 'lucide-react';

export interface PolicySection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  icon: React.ReactNode;
  sections: PolicySection[];
  preamble?: React.ReactNode;
}

export default function PolicyLayout({
  title,
  subtitle,
  lastUpdated,
  icon,
  sections,
  preamble,
}: PolicyLayoutProps) {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) setScrollProgress((scrollTop / docHeight) * 100);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 105;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gray-100">
        <div
          className="h-full transition-all duration-75"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #3F3369 0%, #5a4d8a 50%, #32A790 100%)',
          }}
        />
      </div>

      {/* Hero Banner */}
      <div
        className="relative overflow-hidden py-16 md:py-24 px-4"
        style={{
          background: 'linear-gradient(135deg, #3F3369 0%, #5a4d8a 45%, #32A790 100%)',
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/[0.04] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/[0.04] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{title}</span>
          </div>

          <div className="flex items-start gap-5 md:gap-7">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 shrink-0 mt-1">
              {icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">{title}</h1>
              <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
              <div className="mt-5">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/75 text-sm border border-white/20">
                  Last Updated: {lastUpdated}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-14 xl:gap-16">

          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-4 px-2">
                Table of Contents
              </p>
              <nav className="space-y-0.5">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 flex items-center gap-3 group cursor-pointer`}
                    style={
                      activeSection === section.id
                        ? { color: '#3F3369', backgroundColor: 'rgba(63,51,105,0.07)', fontWeight: 500 }
                        : {}
                    }
                  >
                    <span
                      className="w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold shrink-0 transition-all duration-200"
                      style={
                        activeSection === section.id
                          ? { background: 'linear-gradient(135deg, #3F3369, #32A790)', color: 'white' }
                          : { backgroundColor: '#f0f0f5', color: '#9ca3af' }
                      }
                    >
                      {section.number}
                    </span>
                    <span
                      className="leading-snug transition-colors duration-200"
                      style={{ color: activeSection === section.id ? '#3F3369' : '#6b7280' }}
                    >
                      {section.title}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Contact sidebar card */}
              <div
                className="mt-8 p-4 rounded-2xl border"
                style={{ borderColor: 'rgba(63,51,105,0.12)', background: 'rgba(63,51,105,0.03)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#3F3369' }}>
                  Questions?
                </p>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  We're happy to clarify any part of this policy.
                </p>
                <a
                  href="mailto:contact@divenzainc.com"
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-75"
                  style={{ color: '#32A790' }}
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  contact@divenzainc.com
                </a>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <main className="min-w-0">
            {/* Preamble */}
            {preamble && (
              <div
                className="rounded-2xl p-6 mb-10 border"
                style={{
                  borderColor: 'rgba(50,167,144,0.2)',
                  background: 'linear-gradient(135deg, rgba(50,167,144,0.04) 0%, rgba(63,51,105,0.03) 100%)',
                }}
              >
                <div className="text-gray-700 leading-relaxed text-[15px]">{preamble}</div>
              </div>
            )}

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, idx) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ background: 'linear-gradient(135deg, #3F3369 0%, #32A790 100%)' }}
                    >
                      {section.number}
                    </div>
                    <h2 className="text-xl font-bold" style={{ color: '#1a1230' }}>
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Content */}
                  <div className="text-gray-600 leading-relaxed text-[15px] space-y-4" style={{ paddingLeft: '3.25rem' }}>
                    {section.content}
                  </div>

                  {/* Divider */}
                  {idx < sections.length - 1 && (
                    <div
                      className="mt-10 h-px"
                      style={{
                        background: 'linear-gradient(90deg, rgba(63,51,105,0.12) 0%, rgba(50,167,144,0.08) 60%, transparent 100%)',
                      }}
                    />
                  )}
                </section>
              ))}
            </div>

            {/* Footer CTA */}
            <div
              className="mt-14 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 border"
              style={{
                background: 'linear-gradient(135deg, rgba(63,51,105,0.05) 0%, rgba(50,167,144,0.05) 100%)',
                borderColor: 'rgba(63,51,105,0.12)',
              }}
            >
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Still have questions?</p>
                <p className="text-sm text-gray-500">Reach out and we'll respond within 30 days as required by applicable law.</p>
              </div>
              <a
                href="mailto:contact@divenzainc.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90 shrink-0"
                style={{ background: 'linear-gradient(135deg, #3F3369 0%, #32A790 100%)' }}
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
