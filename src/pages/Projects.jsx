import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

const filters = ["All", "AI Engineer", "ML Engineer", "AIML Engineer", "Python Developer"];

// Project card images from Unsplash (real images, relevant to each project)
const projectImages = {
  1: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', // healthcare
  2: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',    // clinical AI
  3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', // face detection / person
  4: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80', // chatbot / AI
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(p =>
    activeFilter === "All" ? true : p.roles.includes(activeFilter)
  );

  return (
    <div className="w-full pb-24 pt-8 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-mono text-primary tracking-[0.2em] uppercase mb-3">Projects</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-textPrimary leading-tight">
          Featured Work
        </h1>
        <p className="text-textMuted font-body mt-3 max-w-xl">
          Projects across AI/ML engineering, backend systems, and intelligent automation.
        </p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        className="flex flex-wrap gap-3 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full font-mono text-xs sm:text-sm transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-primary text-textPrimary shadow-md shadow-primary/20'
                : 'bg-cardBg text-textMuted border border-borderColor hover:border-primary/50 hover:text-textPrimary'
            }`}
          >
            {filter}
          </button>
        ))}
        <span className="text-xs font-mono text-textMuted flex items-center ml-2">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </span>
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map(project => (
            <motion.article
              layout
              key={project.id}
              variants={cardVariants}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
              whileHover={{ y: -6 }}
              className="bg-cardBg border border-borderColor hover:border-primary/40 rounded-2xl overflow-hidden flex flex-col group transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Header / Status */}
              <div className="px-6 pt-6 flex justify-between items-start">
                <p className="text-xs font-mono text-primary">{project.tag}</p>
                <div className={`px-3 py-1 rounded-full text-[10px] font-mono border ${
                  project.status.includes('Development')
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    : 'bg-green-500/10 text-green-400 border-green-500/20'
                }`}>
                  {project.status.includes('Development') ? '🔧 In Dev' : '✓ Completed'}
                </div>
              </div>

              {/* Body */}
              <div className="px-6 pb-6 pt-3 flex-grow flex flex-col">
                <h2 className="text-xl font-heading font-bold text-textPrimary mb-3">{project.title}</h2>
                <p className="text-sm text-textMuted font-body leading-relaxed mb-5 flex-grow">
                  {project.problem}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-1.5 mb-5">
                  {project.highlights.map(h => (
                    <div key={h} className="flex items-center gap-1.5 text-xs font-mono text-textMuted">
                      <CheckCircle size={11} className="text-primary shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(t => (
                    <span key={t} className="bg-darkBg border border-borderColor text-textMuted px-2 py-0.5 rounded text-[11px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-5 pt-2 border-t border-borderColor/50">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-1.5 text-sm font-medium text-textMuted hover:text-primary transition-colors"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1.5 text-sm font-medium text-textMuted hover:text-textPrimary transition-colors"
                  >
                    <FaGithub size={15} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24 text-textMuted font-mono"
        >
          No projects for this role yet.
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
