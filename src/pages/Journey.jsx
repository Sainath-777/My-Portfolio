import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const milestones = [
  {
    year: '2020',
    title: 'Started B.Tech — AI & ML',
    desc: 'Enrolled in B.Tech Artificial Intelligence & Machine Learning at IFET College of Engineering, Villupuram, Tamil Nadu. Began with Python fundamentals and data structures.',
    color: 'text-blue-400',
  },
  {
    year: '2022',
    title: 'Computer Vision & Web Dev',
    desc: 'Built real-time face detection systems using OpenCV and TensorFlow. Completed a Web Development Internship at EISYSTEMS Services (Technex, IIT BHU), gaining hands-on HTML & Python web skills.',
    color: 'text-purple-400',
  },
  {
    year: '2023',
    title: 'Cloud & Backend Engineering',
    desc: 'Completed a Cloud Computing Internship at Cloud Bees Tech — configured AWS, Azure, and GCP environments and wrote Python automation scripts. Started building production-grade FastAPI backends.',
    color: 'text-primary',
  },
  {
    year: '2024',
    title: 'Team Lead — Doc2U (MSME Funded)',
    desc: 'Led backend engineering and architecture of Doc2U — a live ₹9 Lakh MSME-funded AI healthcare teleconsultation platform serving real doctors and patients. Shipped 25+ REST API endpoints and an AI triage module.',
    color: 'text-green-400',
  },
  {
    year: '2025',
    title: 'RAG Pipelines & LLM Agents',
    desc: 'Built DocuMind Enterprise — a multi-tenant RAG SaaS with sub-400ms hybrid retrieval. Built a clinical decision support system achieving 93% Top-1 accuracy. Earned AI Agents certifications from Kaggle & HuggingFace.',
    color: 'text-amber-400',
  },
  {
    year: 'Now',
    title: 'Open to AI/ML Roles',
    desc: 'B.Tech completed (May 2025, CGPA: 8.0). Actively seeking full-time AI Engineer, ML Engineer, or Python Developer roles where I can build intelligent production systems at scale.',
    color: 'text-pink-400',
  },
];

const TimelineItem = ({ milestone, index, isLast }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-6 sm:gap-10"
    >
      {/* Left year */}
      <div className="w-16 sm:w-20 shrink-0 text-right pt-1">
        <span className={`text-sm font-mono font-semibold ${milestone.color}`}>{milestone.year}</span>
      </div>

      {/* Center dot + line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-2 ${milestone.year === 'Now' ? 'bg-primary border-primary' : 'bg-cardBg border-primary'} z-10 mt-0.5 shrink-0`}>
          {milestone.year === 'Now' && (
            <div className="w-full h-full rounded-full bg-primary animate-ping opacity-40" />
          )}
        </div>
        {!isLast && <div className="w-px flex-grow bg-gradient-to-b from-primary/40 to-transparent mt-2 min-h-[60px]" />}
      </div>

      {/* Content */}
      <div className="pb-10 flex-grow">
        <h3 className="text-base font-heading font-semibold text-textPrimary mb-1">{milestone.title}</h3>
        <p className="text-sm text-textMuted font-body leading-relaxed">{milestone.desc}</p>
      </div>
    </motion.div>
  );
};

const Journey = () => {
  return (
    <div className="w-full pb-12 pt-8 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-mono text-primary tracking-[0.2em] uppercase mb-3">Journey</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-textPrimary leading-tight">
          My Path in AI Engineering
        </h1>
        <p className="text-textMuted font-body mt-3 max-w-xl">
          From Python fundamentals to leading production AI systems — five years of building, shipping, and scaling.
        </p>
      </motion.div>

      {/* Certifications Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10 p-5 bg-cardBg border border-borderColor/40 rounded-xl"
      >
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Certifications</p>
        <div className="flex flex-wrap gap-2">
          {[
            '5-Day AI Agents Intensive — Kaggle',
            'Fundamentals of Agents — HuggingFace',
            'Prompt Engineering — Simplilearn',
            'Python 3.x Programming — SkillRack',
            'Intro to Cybersecurity — Cisco',
          ].map(cert => (
            <span key={cert} className="text-xs font-mono bg-darkBg border border-borderColor text-textMuted px-3 py-1.5 rounded-lg">
              {cert}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-2xl">
        {milestones.map((milestone, index) => (
          <TimelineItem
            key={milestone.year}
            milestone={milestone}
            index={index}
            isLast={index === milestones.length - 1}
          />
        ))}
      </div>

      {/* Availability Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 p-6 sm:p-8 bg-cardBg border border-primary/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Available for hire</span>
          </div>
          <h3 className="text-xl font-heading font-semibold text-textPrimary mb-1">Open to AI Engineer & Backend Roles</h3>
          <p className="text-sm text-textMuted font-body">
            B.Tech AI & ML graduate (CGPA: 8.0) with production AI deployment experience. Looking for full-time roles in AI/ML engineering, LLM development, or Python backend systems.
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 flex items-center gap-2 px-6 py-3 bg-primary hover:bg-[#8e84f5] text-white rounded-xl font-medium text-sm transition-colors duration-300 shadow-lg shadow-primary/20"
        >
          Let's Talk →
        </Link>
      </motion.div>

    </div>
  );
};

export default Journey;
