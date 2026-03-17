'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Code2,
  Palette,
  Zap,
  Users,
  TrendingUp,
  Heart,
  Globe,
  CheckCircle2,
  ArrowRight,
  Star,
  Layers,
  Bot,
} from 'lucide-react'

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const perks = [
  {
    icon: TrendingUp,
    title: 'Growth-First Culture',
    description: 'Continuous learning budgets, mentorship, and a clear career progression path.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Stack',
    description: 'Work with the latest AI tools, modern frameworks, and real-world scale challenges.',
  },
  {
    icon: Users,
    title: 'Collaborative Team',
    description: 'A tight-knit, high-performing team where every voice shapes product decisions.',
  },
  {
    icon: Heart,
    title: 'Meaningful Work',
    description: 'Build digital experiences used by thousands of users across industries.',
  },
  {
    icon: Globe,
    title: 'Remote-Friendly',
    description: 'Flexible hybrid arrangements designed around outcomes, not clock-watching.',
  },
  {
    icon: Star,
    title: 'Competitive Package',
    description: 'Market-rate salary, performance bonuses, and equity opportunities.',
  },
]

interface Job {
  id: string
  title: string
  icon: React.ElementType
  type: string
  location: string
  experience: string
  gradient: string
  tagline: string
  about: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  skills: string[]
}

const jobs: Job[] = [
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    icon: Palette,
    type: 'Full-time',
    location: 'Colombo / Remote',
    experience: '1+ Years',
    gradient: 'linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)',
    tagline: 'Shape how the world sees Divenza.',
    about:
      'We are looking for a creative UI/UX Designer who can translate complex ideas into beautiful, intuitive digital experiences. You will own the visual language of our products — from web app interfaces to marketing banners and social assets.',
    responsibilities: [
      'Design user interfaces for web and mobile products from wireframe to high-fidelity',
      'Create web banners, marketing creatives, and brand assets for campaigns',
      'Build and maintain a consistent design system and component library',
      'Collaborate with frontend engineers to ensure pixel-perfect implementation',
      'Conduct usability reviews and iterate based on user feedback',
      'Present design concepts clearly to stakeholders and cross-functional teams',
    ],
    requirements: [
      'Proficiency in Figma (components, auto-layout, prototyping)',
      'Strong portfolio demonstrating UI design and visual/graphic work',
      'Solid understanding of typography, color theory, and layout principles',
      'Experience designing responsive web and mobile interfaces',
      'Ability to work within brand guidelines while pushing creative boundaries',
    ],
    niceToHave: [
      'Experience with motion design or Lottie animations',
      'Familiarity with design handoff to React/Next.js teams',
      'Knowledge of accessibility standards (WCAG 2.1)',
    ],
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'Design Systems', 'Web Banners', 'Brand Identity'],
  },
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer',
    icon: Code2,
    type: 'Full-time',
    location: 'Colombo / Remote',
    experience: '2+ Years',
    gradient: 'linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)',
    tagline: 'Build the interfaces that define Divenza.',
    about:
      'We are seeking a skilled Frontend Engineer who is passionate about crafting fast, accessible, and visually compelling web experiences. You will work closely with designers and backend engineers to ship features that delight users and push the product forward.',
    responsibilities: [
      'Develop responsive, performant UIs using React, TypeScript, and Tailwind CSS',
      'Manage complex application state with Redux Toolkit',
      'Translate Figma designs into pixel-perfect, accessible components',
      'Integrate RESTful and GraphQL APIs into frontend experiences',
      'Write clean, well-tested, and maintainable code with thorough documentation',
      'Leverage AI-assisted development tools to accelerate delivery and code quality',
      'Contribute to technical architecture discussions and code reviews',
    ],
    requirements: [
      '2+ years of professional frontend development experience',
      'Strong proficiency in React (hooks, context, performance optimisation)',
      'TypeScript — you think in types, not around them',
      'Tailwind CSS for utility-first, responsive styling',
      'Redux / Redux Toolkit for scalable state management',
      'Familiarity with AI-powered dev tools (Copilot, Cursor, or similar)',
    ],
    niceToHave: [
      'Experience with Next.js App Router and server components',
      'Knowledge of Framer Motion or other animation libraries',
      'Prior exposure to CI/CD pipelines and deployment workflows',
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Next.js', 'AI Tools', 'REST APIs'],
  },
]

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
      style={{
        background: 'linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)',
        border: '1px solid rgba(63,51,105,0.2)',
        color: '#3F3369',
      }}
    >
      {children}
    </motion.span>
  )
}

function SkillBadge({ label, accent }: { label: string; accent?: 'primary' | 'secondary' }) {
  const isPrimary = accent !== 'secondary'
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
      style={{
        background: isPrimary ? 'rgba(63,51,105,0.08)' : 'rgba(50,167,144,0.08)',
        color: isPrimary ? '#3F3369' : '#32A790',
        border: `1px solid ${isPrimary ? 'rgba(63,51,105,0.2)' : 'rgba(50,167,144,0.2)'}`,
      }}
    >
      {label}
    </span>
  )
}

function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = job.icon
  const isDesigner = job.id === 'ui-ux-designer'
  const accentColor = isDesigner ? '#3F3369' : '#32A790'
  const accentRgb = isDesigner ? '63,51,105' : '50,167,144'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-3xl overflow-hidden"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: `0 8px 40px -8px rgba(${accentRgb}, 0.12)`,
      }}
    >
      {/* Card Header */}
      <div className="p-8 md:p-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          {/* Left — icon + title */}
          <div className="flex items-start gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: job.gradient, boxShadow: `0 8px 24px -6px rgba(${accentRgb}, 0.45)` }}
            >
              <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#171717' }}>
                {job.title}
              </h3>
              <p className="text-sm font-medium" style={{ color: accentColor }}>
                {job.tagline}
              </p>
            </div>
          </div>

          {/* Right — meta tags */}
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {[
              { icon: Briefcase, label: job.type },
              { icon: MapPin, label: job.location },
              { icon: Clock, label: job.experience },
            ].map(({ icon: MetaIcon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
                style={{
                  background: `rgba(${accentRgb}, 0.07)`,
                  color: accentColor,
                }}
              >
                <MetaIcon className="w-3.5 h-3.5" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <p className="mt-6 text-base leading-relaxed" style={{ color: '#4b5563' }}>
          {job.about}
        </p>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2 mt-5">
          {job.skills.map((s) => (
            <SkillBadge key={s} label={s} accent={isDesigner ? 'primary' : 'secondary'} />
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
          style={{ color: accentColor }}
        >
          {expanded ? 'Show less' : 'View full description'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </button>
      </div>

      {/* Expanded details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-8 md:px-10 pb-10 pt-0"
              style={{ borderTop: `1px solid rgba(${accentRgb}, 0.1)` }}
            >
              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: accentColor }}>
                    Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#374151' }}>
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: accentColor }}
                          strokeWidth={2}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements + Nice to have */}
                <div className="space-y-7">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: accentColor }}>
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {job.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#374151' }}>
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ background: accentColor }}
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#9ca3af' }}>
                      Nice to Have
                    </h4>
                    <ul className="space-y-3">
                      {job.niceToHave.map((r) => (
                        <li key={r} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                          <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-gray-300" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Apply CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-sm" style={{ color: '#6b7280' }}>
                  Ready to join the team? Send us your portfolio or GitHub link.
                </p>
                <motion.a
                  href={`mailto:careers@divenza.com?subject=Application — ${job.title}`}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white text-sm font-semibold shrink-0"
                  style={{
                    background: job.gradient,
                    boxShadow: `0 8px 28px -6px rgba(${accentRgb}, 0.5)`,
                  }}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
const Careers = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: '#ffffff' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-40 -left-40 w-150 h-150 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(63,51,105,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-150 h-150 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(50,167,144,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">

        {/* ── Hero Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionBadge>
            <Sparkles className="w-4 h-4" />
            We&apos;re Hiring
          </SectionBadge>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#171717' }}
          >
            Build the future{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(130deg, #3F3369 0%, #32A790 100%)' }}
            >
              with us.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: '#6b7280' }}
          >
            Divenza is a fast-growing digital solutions company on a mission to make world-class technology
            accessible. Join our team and shape products that matter.
          </motion.p>
        </div>

        {/* ── Open Positions ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)' }}
            >
              <Layers className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: '#171717' }}>
              Open Positions{' '}
              <span
                className="text-base font-semibold px-2.5 py-0.5 rounded-full ml-1"
                style={{ background: 'rgba(63,51,105,0.08)', color: '#3F3369' }}
              >
                {jobs.length}
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* ── Why Join Divenza ── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <SectionBadge>
              <Heart className="w-4 h-4" />
              Life at Divenza
            </SectionBadge>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: '#171717' }}
            >
              Why you&apos;ll{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(130deg, #3F3369 0%, #32A790 100%)' }}
              >
                love it here
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => {
              const PerkIcon = perk.icon
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-7 rounded-2xl"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 24px -6px rgba(63,51,105,0.08)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)',
                    }}
                  >
                    <PerkIcon className="w-5 h-5" style={{ color: '#3F3369' }} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#171717' }}>
                    {perk.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    {perk.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── No Suitable Role CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden text-center px-8 py-16 md:py-20"
          style={{
            background: 'linear-gradient(130deg, #3F3369 0%, #5a4d8a 40%, #32A790 100%)',
          }}
        >
          {/* subtle inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <Bot className="w-4 h-4" />
              Don&apos;t see your role?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              We always welcome great talent.
            </h2>
            <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              If you&apos;re passionate about technology and believe you&apos;d be a great fit at Divenza,
              send us your CV and tell us why — we&apos;d love to hear from you.
            </p>
            <motion.a
              href="mailto:careers@divenza.com?subject=Open Application — Divenza"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold"
              style={{
                background: '#ffffff',
                color: '#3F3369',
                boxShadow: '0 12px 40px -8px rgba(0,0,0,0.3)',
              }}
            >
              Send Open Application
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Careers
