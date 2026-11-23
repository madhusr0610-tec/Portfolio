import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin,
  Code2, Braces, MonitorSmartphone, Layers3, ExternalLink, Menu, X,
  Download, BriefcaseBusiness, GraduationCap, Award, Sparkles
} from 'lucide-react';
import './styles.css';

const skills = [
  { title: 'Languages', items: ['JavaScript (ES6+)', 'HTML5', 'CSS3'], icon: Code2 },
  { title: 'Frontend', items: ['React.js', 'React Hooks', 'React Router', 'Context API', 'Responsive Web Design'], icon: Braces },
  { title: 'UI & Styling', items: ['Bootstrap', 'Tailwind CSS', 'Flexbox', 'CSS Grid', 'CSS Animations'], icon: MonitorSmartphone },
  { title: 'API & Integration', items: ['REST APIs', 'JSON', 'Axios', 'Postman'], icon: Layers3 },
  { title: 'Tools', items: ['Git', 'GitHub', 'Vite', 'npm', 'VS Code', 'Chrome DevTools'], icon: BriefcaseBusiness },
  { title: 'Core Concepts', items: ['Component-Based Architecture', 'State Management', 'DOM Manipulation', 'Form Validation', 'Async JavaScript', 'Debugging', 'Performance Optimization'], icon: Sparkles }
];

const projects = [
  {
    number: '01',
    name: 'Travel Explorer Website',
    type: 'Travel & discovery',
    date: 'Aug 2026 – Sept 2026',
    description: 'A responsive travel website designed to help visitors explore destinations through clear navigation and an engaging interface.',
    details: ['Responsive layouts with Bootstrap and custom CSS', 'Interactive UI elements using JavaScript', 'Desktop, tablet and mobile compatibility'],
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    repo: 'https://github.com/madhusr0610-tec/Bootstrap'
  },
  {
    number: '02',
    name: 'BiteBox Food Delivery',
    type: 'Food & ordering',
    date: 'Ju 2026 – Aug 2026',
    description: 'A responsive food delivery website featuring restaurant, food item and ordering-related sections.',
    details: ['Reusable and responsive UI components', 'Layouts built with HTML, CSS and Bootstrap', 'Interactive functionality with JavaScript'],
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    repo: 'https://github.com/madhusr0610-tec/BiteBox'
  }
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']];
  return <header className="header">
    <a className="brand" href="#home">M<span>.</span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a>
    </nav>
  </header>;
}

function SectionTitle({eyebrow, title, text}) {
  return <div className="section-title">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function App() {
  return <div className="app-shell">
    <Header />
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse"></span> OPEN TO FRONTEND OPPORTUNITIES</div>
          <p className="hero-kicker">Hello, I'm</p>
          <h1>Madhu <span>S R.</span></h1>
          <h2>Frontend Developer</h2>
          <p className="hero-description">I build responsive, user-friendly web experiences with React, JavaScript and modern frontend technologies.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href="#contact">Get in touch <ArrowDown size={16}/></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/madhusr0610-tec" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
            <a href="https://www.linkedin.com/in/madhusr7599" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
            <a href="mailto:madhusr0610@email.com" aria-label="Email"><Mail/></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-halo"></div>
          <div className="photo-frame"><img src="/madhu-profile.jpg" alt="Portrait of Madhu S R" /></div>
          <div className="float-card float-card-top"><span className="float-icon"><Code2 size={17}/></span><span><b>Frontend</b><small>Development</small></span></div>
          <div className="float-card float-card-bottom"><span className="mini-dot"></span><span><b>React.js</b><small>Building with components</small></span></div>
          <div className="visual-caption">BENGALURU, INDIA <span>•</span> AVAILABLE FOR OPPORTUNITIES</div>
        </div>
        <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="section-wrap section" id="about">
        <SectionTitle eyebrow="A LITTLE ABOUT ME" title="Turning ideas into interfaces." />
        <div className="about-grid">
          <div className="about-lead"><span className="quote-mark">“</span><p>I’m an entry-level Frontend Developer who enjoys creating clean, responsive and accessible web interfaces.</p></div>
          <div className="about-detail">
            <p>My hands-on experience includes building web interfaces with React.js, JavaScript, HTML5, CSS3 and Bootstrap. I’m familiar with reusable components, form validation, REST API integration and React Hooks.</p>
            <p>I value thoughtful problem-solving, maintainable code and continuous learning. I’m excited to contribute to a collaborative team and grow as a frontend developer.</p>
            <div className="quick-facts">
              <div><span>01</span><b>Responsive UI</b><small>Across screen sizes</small></div>
              <div><span>02</span><b>Reusable code</b><small>Component-based approach</small></div>
              <div><span>03</span><b>API integration</b><small>Connected experiences</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="skills">
        <div className="section-wrap">
          <SectionTitle eyebrow="MY TOOLKIT" title="Skills & technologies." text="Technologies and concepts I use to build modern frontend experiences." />
          <div className="skills-grid">
            {skills.map(({title, items, icon: Icon}, i) => <article className="skill-card" key={title}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="skill-index">0{i+1}</span></div>
              <h3>{title}</h3>
              <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>
            </article>)}
          </div>
          <div className="soft-skills"><span>ALSO BRINGING</span><p>Problem Solving <i>·</i> Analytical Thinking <i>·</i> Team Collaboration <i>·</i> Communication</p></div>
        </div>
      </section>

      <section className="section section-wrap" id="experience">
        <SectionTitle eyebrow="WHERE I'VE LEARNED" title="Experience." text="Practical experience applying frontend skills in a development environment." />
        <div className="timeline">
          <div className="timeline-marker"><BriefcaseBusiness size={18}/></div>
          <article className="experience-card">
            <div className="experience-heading"><div><span className="eyebrow">INTERNSHIP</span><h3>Frontend Developer Intern</h3><p className="company">ABC Solutions</p></div><span className="date-pill">April 2026 – May 2026</span></div>
            <ul className="check-list">
              <li>Developed responsive web interfaces using React.js, JavaScript, HTML5, CSS3 and Bootstrap.</li>
              <li>Integrated REST APIs and implemented reusable components, form validation and React Hooks.</li>
              <li>Debugged and optimized frontend applications using Git, GitHub and Chrome DevTools.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-muted" id="projects">
        <div className="section-wrap">
          <SectionTitle eyebrow="SELECTED WORK" title="Projects I've built." text="A look at practical projects focused on responsive design and interactive user experiences." />
          <div className="projects-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><ArrowUpRight/></a></div>
              <div className="project-art"><div className="browser-bar"><i></i><i></i><i></i><span>{project.type.toLowerCase().replaceAll(' ', '')}.site</span></div><div className="art-content"><div className="art-line wide"></div><div className="art-line"></div><div className="art-blocks"><i></i><i></i><i></i></div><div className="art-button"></div></div></div>
              <div className="project-meta"><span>{project.type}</span><span>{project.date}</span></div>
              <h3>{project.name}</h3><p>{project.description}</p>
              <ul className="project-details">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
              <div className="tags project-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
              <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={15}/></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section section-wrap" id="education">
        <SectionTitle eyebrow="MY FOUNDATION" title="Education & certification." />
        <div className="credentials-grid">
          <article className="credential-card"><span className="credential-icon"><GraduationCap/></span><div><span className="eyebrow">2018 – 2022</span><h3>Bachelor of Engineering</h3><p>Computer Science</p><small>Sri Siddhartha Institute of Technology</small></div></article>
          <article className="credential-card"><span className="credential-icon"><Award/></span><div><span className="eyebrow">CERTIFICATION</span><h3>Meta Front-End Developer</h3><p>Professional Certificate</p><small>Coursera</small></div></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div><span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span><h2>Let's build something<br/><span>meaningful.</span></h2><p>I'm open to connecting about frontend development opportunities and collaborations.</p></div>
          <div className="contact-card">
            <a href="mailto:madhusr0610@email.com"><span><Mail/></span><div><small>EMAIL ME</small><b>madhusr0610@email.com</b></div><ArrowUpRight/></a>
            <a href="tel:+919740684669"><span><Phone/></span><div><small>CALL ME</small><b>+91 97406 84669</b></div><ArrowUpRight/></a>
            <div className="contact-location"><span><MapPin/></span><div><small>BASED IN</small><b>Bangalore, India</b></div></div>
            <div className="contact-social"><a href="https://www.linkedin.com/in/madhusr7599" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="https://github.com/madhusr0610-tec" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer"><a className="brand" href="#home">M<span>.</span></a><p>Designed & built with care by Madhu S R.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
