"use client";

import { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, GraduationCap, ShieldCheck, UserRoundPlus, Users } from 'lucide-react';

const stages = [
  { label: 'Admission', icon: UserRoundPlus, title: 'A great start for every learner.', text: 'Bring a new learner into your institution with a connected admissions workflow.', detail: ['Create a student record', 'Organize admission information', 'Connect the learner to your institution'], role: 'Admissions team', module: 'students' },
  { label: 'Registration', icon: BookOpen, title: 'Make the next step clear.', text: 'Connect the learner with their courses and keep registration information organized.', detail: ['Coordinate course registration', 'Keep academic information together', 'Support the student journey'], role: 'Academic administration', module: 'courses' },
  { label: 'Approvals', icon: Users, title: 'The right people. A shared workflow.', text: 'Give faculty and departments a clear role in moving institutional work forward.', detail: ['Route work to the right team', 'Coordinate faculty approvals', 'Keep responsibilities clear'], role: 'Faculty & departments', module: 'workflows' },
  { label: 'Credentials', icon: ShieldCheck, title: 'An achievement that travels.', text: 'Bring academic records and digital credentials together for a verifiable outcome.', detail: ['Organize academic records', 'Support digital credentials', 'Enable credential verification'], role: 'Records & administration', module: 'credentials' },
];

export function LearningJourney({ onExplore }) {
  const [step, setStep] = useState(0);
  const current = stages[step];
  const Icon = current.icon;
  return <section className="vis-learning" aria-label="Explore the AcademicOS learner journey">
    <div className="vis-learning-top"><span><GraduationCap size={18}/> AcademicOS</span><span>EXPLORE THE LEARNER JOURNEY</span></div>
    <div className="vis-journey-map">
      <div className="vis-journey-track" aria-hidden="true"><span style={{width:`${step / (stages.length - 1) * 100}%`}} /></div>
      <div className="vis-journey-nodes" role="group" aria-label="Select a stage of the learner journey">{stages.map((stage,index) => <button key={stage.label} className={`${step===index?'vis-journey-current':''} ${index<step?'vis-journey-previous':''}`} aria-pressed={step===index} onClick={() => setStep(index)}><span>{index<step?<Check size={21}/>:<stage.icon size={22} strokeWidth={1.5}/>}</span><strong>{stage.label}</strong><small>0{index+1}</small></button>)}</div>
    </div>
    <div className="vis-learning-detail" aria-live="polite"><div className="vis-learning-story" key={step}><div className="vis-learning-label"><Icon size={17}/><span>STEP 0{step+1} · {current.role.toUpperCase()}</span></div><h2>{current.title}</h2><p>{current.text}</p><button className="vis-learning-explore" onClick={()=>onExplore(current.module)}>Explore this feature <ArrowRight size={15}/></button></div><div className="vis-learning-actions" aria-label="What this stage connects">{current.detail.map((item,index)=><div key={`${step}-${item}`} style={{animationDelay:`${index*60}ms`}}><span><Check size={13}/></span><p>{item}</p></div>)}</div></div>
    <div className="vis-learning-bottom"><span>A connected experience, from the first step.</span><div><button disabled={step===0} aria-label="Previous journey stage" onClick={()=>setStep(step-1)}><ArrowLeft size={15}/></button><span>0{step+1} / 04</span><button disabled={step===3} aria-label="Next journey stage" onClick={()=>setStep(step+1)}><ArrowRight size={15}/></button></div></div>
  </section>;
}
