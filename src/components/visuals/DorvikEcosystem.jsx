"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Boxes, Braces, Check, ClipboardCheck, Database, GraduationCap, Layers3, Network, Pause, Play, ShieldCheck, Sparkles, Users, Workflow } from 'lucide-react';
import { DorvikBrand } from '@/components/home/DorvikBrand';

const ecosystems = [
  {
    id: 'education', label: 'Education', icon: GraduationCap, title: 'A connected learning community.',
    description: 'Explore the people and workflows AcademicOS brings together.', href: '/academicos', action: 'Explore AcademicOS',
    nodes: [
      { label: 'Learners', icon: Users, detail: 'Keep admissions and student records connected throughout the academic journey.' },
      { label: 'Courses', icon: BookOpen, detail: 'Connect learners to course registration and their academic information.' },
      { label: 'Faculty', icon: GraduationCap, detail: 'Give faculty and staff a shared path for institutional approvals.' },
      { label: 'Records', icon: ClipboardCheck, detail: 'Keep academic records organized and accessible through a student portal.' },
      { label: 'Credentials', icon: ShieldCheck, detail: 'Bring digital credentials and verification into your institutional workflow.' },
    ],
  },
  {
    id: 'business', label: 'Business', icon: Boxes, title: 'One business. Everything connected.',
    description: 'Explore a more connected way to manage everyday operations.', href: '/bizos', action: 'Discover BizOS',
    nodes: [
      { label: 'Inventory', icon: Boxes, detail: 'Coordinate stock and movements across the locations your business operates.' },
      { label: 'Billing', icon: ClipboardCheck, detail: 'Bring sales and billing workflows into the same operational picture.' },
      { label: 'Customers', icon: Users, detail: 'Keep relationships and customer follow-up close to your everyday work.' },
      { label: 'Teams', icon: Network, detail: 'Give different teams a shared workflow and clearer responsibilities.' },
      { label: 'Operations', icon: Workflow, detail: 'Connect the tools and processes behind your business.' },
    ],
  },
  {
    id: 'intelligence', label: 'Intelligence', icon: Sparkles, title: 'From information to possibility.',
    description: 'Explore how applied intelligence fits into your organization.', href: '/solutions/ai-ml-data', action: 'Explore AI services',
    nodes: [
      { label: 'Your data', icon: Database, detail: 'Start with the information and context behind the problem you want to solve.' },
      { label: 'Models', icon: Sparkles, detail: 'Choose an approach that fits the task, your data, and your operational constraints.' },
      { label: 'Products', icon: Braces, detail: 'Bring useful intelligence into the software your people use.' },
      { label: 'Workflows', icon: Workflow, detail: 'Connect analysis to practical actions and everyday decisions.' },
      { label: 'People', icon: Users, detail: 'Keep human needs and review at the centre of the experience.' },
    ],
  },
];
const positions = [{x:21,y:22},{x:78,y:22},{x:85,y:62},{x:50,y:85},{x:15,y:62}];

export function DorvikEcosystem() {
  const [mode, setMode] = useState(0);
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 110, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 110, damping: 22 });
  const current = ecosystems[mode];
  const animated = !paused && !reduced;

  function move(event) {
    if (!animated || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    rotateX.set(-((event.clientY - box.top) / box.height - 0.5) * 7);
    rotateY.set(((event.clientX - box.left) / box.width - 0.5) * 7);
  }
  function resetTilt() { rotateX.set(0); rotateY.set(0); }

  return (
    <section className={`vis-ecosystem vis-${current.id} ${animated ? 'vis-motion' : 'vis-paused'}`} aria-label="Explore Dorvik's connected systems">
      <div className="vis-graphic-toolbar">
        <span><i /> THE DORVIK CONNECTION</span>
        <button type="button" aria-label={paused ? 'Enable visual motion' : 'Pause visual motion'} aria-pressed={paused} disabled={!!reduced} onClick={() => { setPaused(!paused); resetTilt(); }}>{paused || reduced ? <Play size={12} /> : <Pause size={12} />}</button>
      </div>
      <div className="vis-perspective" onPointerMove={move} onPointerLeave={resetTilt}>
        <motion.div className="vis-ecosystem-scene" style={{ rotateX: springX, rotateY: springY }}>
          <div className="vis-orbit vis-orbit-outer" aria-hidden="true" />
          <div className="vis-orbit vis-orbit-inner" aria-hidden="true" />
          <div className="vis-orbit vis-orbit-cross" aria-hidden="true" />
          <svg className="vis-connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {positions.map((position, index) => <g key={index} className={selected === index ? 'vis-line-selected' : ''}>
              <path d={`M 50 47 Q ${position.x} 47 ${position.x} ${position.y}`} className="vis-connection-base" />
              <path d={`M 50 47 Q ${position.x} 47 ${position.x} ${position.y}`} className="vis-connection-signal" style={{ animationDelay: `${index * -0.6}s` }} />
            </g>)}
          </svg>
          <div className="vis-centre" aria-hidden="true">
            <div className="vis-centre-shadow" />
            <motion.div className="vis-brand-tile" animate={animated ? { y: [0, -6, 0] } : { y: 0 }} transition={animated ? { duration: 5, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.2 }}>
              <DorvikBrand />
              <span>CONNECTED BY DESIGN</span>
            </motion.div>
          </div>
          {current.nodes.map((node, index) => <button key={`${current.id}-${node.label}`} className={`vis-node ${selected === index ? 'vis-node-selected' : ''}`} style={{left:`${positions[index].x}%`,top:`${positions[index].y}%`}} onClick={() => setSelected(selected === index ? null : index)} aria-pressed={selected === index} aria-label={`Explore ${node.label.toLowerCase()}`}>
            <span className="vis-node-icon"><node.icon size={19} strokeWidth={1.6} /></span><span>{node.label}</span><i />
          </button>)}
          <span className="vis-float-plus vis-plus-one" aria-hidden="true">+</span><span className="vis-float-plus vis-plus-two" aria-hidden="true">+</span>
        </motion.div>
      </div>
      <div className="vis-graphic-caption" aria-live="polite">
        <span>{selected === null ? 'CLICK A CONNECTION TO EXPLORE' : `${current.label.toUpperCase()} / ${current.nodes[selected].label.toUpperCase()}`}</span>
        <h2>{selected === null ? current.title : current.nodes[selected].label + ', connected.'}</h2>
        <p>{selected === null ? current.description : current.nodes[selected].detail}</p>
      </div>
      <div className="vis-mode-tabs" role="group" aria-label="Choose a connected system">{ecosystems.map((item,index) => <button key={item.id} onClick={() => {setMode(index);setSelected(null)}} aria-pressed={index===mode}><item.icon size={14}/>{item.label}</button>)}</div>
      <Link className="vis-explore-link" href={current.href}>{current.action}<ArrowUpRight size={15}/></Link>
    </section>
  );
}
