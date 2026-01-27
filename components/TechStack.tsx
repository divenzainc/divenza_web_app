"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import AWS_LOGO from "@/public/AWS.png";
import Firebase_LOGO from "@/public/Firebase.png";
import Laravel_LOGO from "@/public/Laravel.png";
import WordPress_LOGO from "@/public/WordPress.png";
import Node_LOGO from "@/public/Node.js.png";
import React_LOGO from "@/public/React.png";
import TypeScript_LOGO from "@/public/TypeScript.png";
import Python_LOGO from "@/public/Python.png";
import PHP_LOGO from "@/public/PHP.png";
import Next_LOGO from "@/public/Next.js.png";
import MySQL_LOGO from "@/public/MySQL.png";
import MongoDB_LOGO from "@/public/MongoDB.png";
import PostgreSQL_LOGO from "@/public/PostgresSQL.png";

interface Technology {
  name: string;
  logo: StaticImageData;
}

const technologies: Technology[] = [
  { name: "React", logo: React_LOGO },
  { name: "Node.js", logo: Node_LOGO },
  { name: "Next.js", logo: Next_LOGO },
  { name: "TypeScript", logo: TypeScript_LOGO },
  { name: "Python", logo: Python_LOGO },
  // { name: "PHP", logo: PHP_LOGO },
  { name: "Laravel", logo: Laravel_LOGO },
  { name: "WordPress", logo: WordPress_LOGO },
  { name: "AWS", logo: AWS_LOGO },
  { name: "Firebase", logo: Firebase_LOGO },
  { name: "MongoDB", logo: MongoDB_LOGO },
  { name: "MySQL", logo: MySQL_LOGO },
  { name: "PostgreSQL", logo: PostgreSQL_LOGO },
];

const TechStack = () => {
  return (
    <section className="relative py-2 bg-linear-to-b from-[#fafafa] to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(63,51,105,0.05) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(50,167,144,0.05) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
              border: "1px solid rgba(63,51,105,0.2)",
            }}
          >
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Our Tech Stack
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">Technologies We </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Master
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, performant, and future-proof solutions for your business.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div
                className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-white transition-all duration-300"
                style={{
                  boxShadow: "0 4px 20px -5px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(63,51,105,0.05) 0%, rgba(50,167,144,0.05) 100%)",
                  }}
                />

                {/* Logo */}
                <div className="relative z-10 mb-3 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={56}
                    height={56}
                    className="w-12 h-12 md:w-14 md:h-14 object-contain"
                  />
                </div>

                {/* Name */}
                <span className="relative z-10 text-xs md:text-sm font-medium text-gray-700 text-center">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <p className="text-gray-500 text-sm md:text-base">
            And many more technologies tailored to your project needs
          </p> */}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
