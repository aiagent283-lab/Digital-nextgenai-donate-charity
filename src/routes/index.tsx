import { createFileRoute } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, ArrowRight, BrainCircuit, Code2, ChartNoAxesCombined, Layers3, Orbit, GraduationCap, Check, LockKeyhole, CreditCard, Landmark, Cloud, Sparkles } from 'lucide-react';
import { siPython, siTensorflow, siReact, siNodedotjs, siMongodb, siDocker } from 'simple-icons';
import neuralImage from '@/assets/neural-network.jpg';
import upiQrAsset from '@/assets/upi-qr.jpg.asset.json';
const upiQr = upiQrAsset.url;
import { Button } from '@/components/ui/button';
import { NeuralField } from '@/components/neural-field';
import { NextgenBrand } from '@/components/nextgen-brand';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'NextGen AI — Innovating with Intelligence' },
    { name: 'description', content: 'Learn, build, innovate and create real-world impact with NextGen AI. Subscribe for ₹199/month.' },
    { property: 'og:title', content: 'NextGen AI — Innovating with Intelligence' },
    { property: 'og:description', content: 'A community of passionate learners, developers and innovators. ₹199/month.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const activities = [
  { name: 'AI & ML Development', icon: BrainCircuit },
  { name: 'Web & App Development', icon: Code2 },
  { name: 'Data Science & Analytics', icon: ChartNoAxesCombined },
  { name: 'Innovative Projects', icon: Layers3 },
  { name: 'Research & Exploration', icon: Orbit },
  { name: 'Workshops & Skill Building', icon: GraduationCap },
];
const benefits = [
  'Work on real-world projects',
  'Collaborate with passionate peers',
  'Learn from industry trends and experts',
  'Build your portfolio and grow your network',
  'Opportunities for internships and career growth',
];
const technologies = [
  { name: 'Python', path: siPython.path }, { name: 'TensorFlow', path: siTensorflow.path },
  { name: 'React', path: siReact.path }, { name: 'Node.js', path: siNodedotjs.path },
  { name: 'MongoDB', path: siMongodb.path }, { name: 'AWS', icon: Cloud },
  { name: 'Docker', path: siDocker.path }, { name: 'OpenAI', icon: Sparkles },
];

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay }}>{children}</motion.div>;
}

function Index() {
  const reduced = useReducedMotion();
  const [ripple, setRipple] = useState(0);
  const scrollToPricing = () => document.getElementById('pricing')?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'center' });
  return <div className="nextgen-page">
    <header className="site-header"><div className="page-container nav-inner">
      <a href="#" aria-label="NextGen AI home"><NextgenBrand /></a>
      <Button variant="subscribe" onClick={scrollToPricing}>Subscribe Now <ArrowUpRight /></Button>
    </div></header>
    <main>
      <section className="hero">
        <img className="hero-network" src={neuralImage} alt="" width={1920} height={1024} fetchPriority="high" />
        <div className="hero-mesh" aria-hidden="true" /><NeuralField />
        <div className="page-container hero-content">
          <motion.div className="hero-eyebrow" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}><span /> Innovating with Intelligence</motion.div>
          <h1 aria-label="TEAM NEXTGEN AI"><span className="team-line" aria-hidden="true">{'TEAM'.split('').map((letter, i) => <motion.span key={i} initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>{letter}</motion.span>)}</span><span className="nextgen-line" aria-hidden="true">{'NEXTGEN'.split('').map((letter, i) => <motion.span key={i} initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 + i * 0.06 }}>{letter}</motion.span>)} <motion.span className="gradient-text shimmer" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>AI</motion.span></span></h1>
          <motion.p className="hero-description" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.7 }}>A community of passionate learners, developers and innovators working together to build AI-powered solutions and create real-world impact.</motion.p>
          <div className="hero-values">{['LEARN', 'BUILD', 'INNOVATE', 'IMPACT'].map((word, i) => <motion.span key={word} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.15 }}>{i > 0 && <b aria-hidden="true">·</b>}{word}</motion.span>)}</div>
          <motion.div initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}><Button variant="subscribe" className="hero-cta" onClick={scrollToPricing}>Subscribe Now <ArrowUpRight /></Button></motion.div>
        </div>
        <a href="#what-we-do" className="hero-scroll" aria-label="Scroll to What We Do"><span /><span /></a>
      </section>

      <section id="what-we-do" className="page-section page-container">
        <Reveal className="section-heading"><span className="section-index">01 /</span><h2>What We <span className="gradient-text">Do</span></h2><span className="heading-rule" /></Reveal>
        <div className="activity-grid">{activities.map(({ name, icon: Icon }, i) => <Reveal delay={i * 0.06} key={name}>
          <motion.div className="activity-card glass-card" whileHover={reduced ? {} : { rotateX: -3, rotateY: 3, y: -5 }} transition={{ duration: 0.25 }}>
            <span className="activity-icon"><Icon strokeWidth={1.5} /></span><span className="activity-number">0{i + 1}</span>
            <h3>{name}</h3><ArrowUpRight className="activity-arrow" size={18} />
          </motion.div>
        </Reveal>)}</div>
      </section>

      <section className="movement-section"><Reveal className="page-container movement-inner"><span className="movement-icon"><Orbit size={30} strokeWidth={1.2} /></span><h2>Join the <span className="gradient-text">Movement</span></h2><p>Be a part of a community that believes in learning, building and creating a better future with AI.</p><div className="movement-line" /></Reveal></section>

      <section className="page-section page-container why-section">
        <Reveal className="why-heading"><span className="section-index">02 /</span><h2>Why<br /><span className="gradient-text">Join Us?</span></h2><div className="why-network" aria-hidden="true"><BrainCircuit strokeWidth={0.7} /></div></Reveal>
        <div className="benefits-list">{benefits.map((benefit, i) => <Reveal key={benefit} delay={i * 0.06}><div className="benefit-row"><span className="benefit-number">0{i + 1}</span><p>{benefit}</p><Check size={18} /></div></Reveal>)}</div>
      </section>

      <section className="technology-section"><Reveal><h2>Technologies We <span className="gradient-text">Work With</span></h2></Reveal><div className="marquee-window"><div className="technology-track">{[0, 1].map(copy => <div className="technology-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{technologies.map(({ name, path, icon: Icon }) => <div className="technology" key={name}>{path ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg> : Icon ? <Icon strokeWidth={1.5} /> : null}<span>{name}</span></div>)}</div>)}</div></div></section>

      <section id="pricing" className="pricing-section page-container"><Reveal className="pricing-wrap"><div className="pricing-card glass-card">
        <div className="pricing-top"><NextgenBrand /><span className="pricing-orbit"><Orbit size={23} /></span></div>
        <div className="price"><span className="currency">₹</span><span>199</span><span className="price-period">/month</span></div><div className="price-divider" />
        <ul>{benefits.map(benefit => <li key={benefit}><span><Check size={14} /></span>{benefit}</li>)}</ul>
        <Button variant="subscribe" className="pay-button" onClick={() => setRipple(value => value + 1)}>Subscribe Now <ArrowRight />{ripple > 0 && !reduced && <motion.span key={ripple} className="click-ripple" initial={{ scale: 0, opacity: 0.3 }} animate={{ scale: 5, opacity: 0 }} transition={{ duration: 0.65 }} />}</Button>
        <div className="qr-payment">
          <span className="qr-frame"><img src={upiQr} alt="UPI QR code to pay NextGen AI ₹199 per month" width={148} height={148} loading="lazy" /></span>
          <p>Scan to pay with any UPI app</p>
        </div>
        <p className="secure-payment"><LockKeyhole size={12} />100% Secure Payment · Powered by Razorpay</p>
        <div className="payment-methods"><span className="upi-mark">UPI<span>⏵</span></span><span><CreditCard size={17} /> Cards</span><span><Landmark size={16} /> Net banking</span></div>
      </div></Reveal></section>
    </main>
    <footer className="site-footer"><div className="page-container footer-inner"><div><NextgenBrand /><p>Innovating with Intelligence</p></div><nav aria-label="Legal policies">{['Privacy Policy', 'Terms', 'Refund Policy'].map(policy => <Button key={policy} variant="link" disabled>{policy}</Button>)}</nav></div></footer>
  </div>;
}
