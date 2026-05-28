import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const milestones = [
  {
    year: '2021',
    title: 'Started Python',
    desc: 'Began the journey with Python fundamentals, data structures, and scripting automation.',
    color: 'text-blue-400',
  },
  {
    year: '2022',
    title: 'OpenCV & Web Dev',
    desc: 'Learned computer vision with OpenCV and built first web projects with basic backend skills.',
    color: 'text-purple-400',
  },
  {
    year: '2023',
    title: 'First AI/ML Projects',
    desc: 'Built and deployed real ML models using TensorFlow, scikit-learn, and Streamlit dashboards.',
    color: 'text-primary',
  },
  {
    year: '2024',
    title: 'Led Doc2U Platform',
    desc: 'Team Lead on MSME-funded (₹9L) AI healthcare platform — architecture to deployment.',
    color: 'text-green-400',
  },
  {
    year: '2025',
    title: 'RAG & LLM Agents',
    desc: 'Built RAG pipelines, LLM agents with LangChain, Groq API, and FAISS vector stores.',
    color: 'text-amber-400',
  },
  {
    year: 'Now',
    title: 'Open to Opportunities',
    desc: 'Actively looking for AI/ML Engineer, Backend Engineer, or Python Developer roles.',
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
      className={`flex gap-6 sm:gap-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row'}`}
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
          My Learning Path
        </h1>
        <p className="text-textMuted font-body mt-3 max-w-xl">
          From Python basics to building production AI systems — here's how the story went.
        </p>
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
        className="mt-16 p-6 sm:p-8 bg-cardBg border border-primary/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Available for hire</span>
          </div>
          <h3 className="text-xl font-heading font-semibold text-textPrimary mb-1">Open to AI/ML & Backend Roles</h3>
          <p className="text-sm text-textMuted font-body">
            Looking for full-time opportunities where I can build intelligent systems that create real impact.
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
