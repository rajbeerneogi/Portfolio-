import React, { useState, useEffect, useRef } from "react";
import "./App.css";


const PROJECTS = [
  {
    name: "Sheron",
    tagline: "An AI chatbot with real judgment",
    description:
      "My first full-stack app, start to finish. React frontend, FastAPI backend, an intent classifier I designed myself, and a crisis-detection layer that responds with real support resources instead of a generic reply — built from lived experience, not a checklist.",
    tags: ["React", "FastAPI", "SQLite", "Render", "Vercel"],
    color: "coral",
    link: "https://sheron-eight.vercel.app",
    repo: "https://github.com/rajbeerneogi/sheron-frontend",
  },
  {
    name: "QR Generator",
    tagline: "Coming soon",
    description:
      "A small, focused tool — pick the content, generate the code, download it. Building it next to practice shipping something simple, cleanly, end to end.",
    tags: ["React", "REST API"],
    color: "amber",
    link: null,
    repo: null,
  },
  {
    name: "Threadify",
    tagline: "My very 1st UI/UX mockup project",
    description:
      "A simple, clean, and intuitive UI/UX design for a social media platform. Designed using Clude, focusing on user experience and visual aesthetics.",
    tags: ["HTML5", "CSS3", "UI/UX Design"],
    color: "blue",
    link: "https://threadify-suf9.vercel.app/",
    repo: null,
  }
];

const SKILLS = [
  "React", "JavaScript", "FastAPI", "Python", "Figma", "Git & GitHub",
  "REST APIs", "CORS & deployment", "Vercel", "Render",
];

const BUILD_LOG = [
  { n: "1st", label: "Full-stack app shipped" },
  { n: "2", label: "services deployed" },
  { n: "∞", label: "import-path typos survived" },
  { n: "3", label: "fighting production bugs" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 100}>
      <div className={`project-card pc-${project.color}`}>
        <div className="pc-header">
          <span className="pc-dot" />
          <h3>{project.name}</h3>
        </div>
        <p className="pc-tagline">{project.tagline}</p>
        <p className="pc-desc">{project.description}</p>
        <div className="pc-tags">
          {project.tags.map((t) => (
            <span key={t} className="pc-tag">{t}</span>
          ))}
        </div>
        <div className="pc-links">
          {project.link ? (
            <a href={project.link} className="pc-link">Live demo →</a>
          ) : (
            <span className="pc-link pc-link-disabled">In progress</span>
          )}
          {project.repo && (
            <a href={project.repo} className="pc-link pc-link-ghost">Code →</a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio">
      

      <div className="wrap">
        <section className="hero">
          <div className="hero-blob" />
          <div className="hero-inner">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Open to full-stack roles
            </span>
            <h1 className="name">Hey, I'm Rajbeer.</h1>
            <svg className="name-underline" viewBox="0 0 140 10" fill="none">
              <path d="M2 7C20 2 35 9 50 5C65 1 80 8 95 4C110 0 125 7 138 3"
                stroke="#EF9F27" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <p className="tagline">
              I build full-stack web apps — most recently <strong>Sheron</strong>,
              an AI chatbot with a real safety layer, shipped from a blank
              screen to a live deploy, debugged one stubborn error at a time.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">See my work</a>
              <a href="#" className="btn btn-secondary">Download resume</a>
            </div>

            <div className="build-log">
              {BUILD_LOG.map((s) => (
                <div className="bl-stat" key={s.label}>
                  <span className="bl-num">{s.n}</span>
                  <span className="bl-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <Reveal>
            <p className="section-eyebrow">About</p>
            <h2 className="section-title">Still early, still all in</h2>
            <p className="about-text">
              I'm a self-taught developer building my way up from first
              principles. Sheron was my first React app and my first
              full-stack project — I designed the architecture, wrote the
              backend logic, debugged deployment myself, and shipped it live.
              I care about building things that actually help people, not
              just things that technically work.
            </p>
          </Reveal>
        </section>

        <section id="skills">
          <Reveal>
            <p className="section-eyebrow">Toolbox</p>
            <h2 className="section-title">What I work with</h2>
            <div className="skills-grid">
              {SKILLS.map((s) => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="projects">
          <Reveal>
            <p className="section-eyebrow">Projects</p>
            <h2 className="section-title">Things I've built</h2>
          </Reveal>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <ProjectCard project={p} index={i} key={p.name} />
            ))}
          </div>
        </section>

        <footer id="contact">
          <Reveal>
            <p className="footer-title">Let's talk.</p>
            <p className="about-text">
              Open to full-stack, frontend, or React roles — reach out, I'd
              love to hear about what you're building.
            </p>
            <div className="footer-links">
              <a href="mailto:rajbeerneogi3@gmail.com">Email</a>
              <a href="https://github.com/rajbeerneogi">GitHub</a>
              <a href="https://www.linkedin.com/in/rajbeerneogi">LinkedIn</a>
            </div>
          </Reveal>
        </footer>
      </div>
    </div>
  );
}
