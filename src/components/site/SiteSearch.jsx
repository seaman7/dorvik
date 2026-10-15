"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { SERVICES } from '@/lib/servicesData';

const pages = [
 {title:'AcademicOS',description:'Education platform for institutions, schools, and coaching centres',href:'/academicos',category:'Product'},
 {title:'AcademicOS pricing',description:'Starter, Growth, Institution · monthly and annual plans',href:'/academicos#pricing',category:'Pricing'},
 {title:'Services',description:'Software, AI, enterprise systems, and engineering',href:'/services',category:'Explore'},
 {title:'Projects',description:'AcademicOS, WareTwin, and applied computer vision',href:'/projects',category:'Explore'},
 {title:'About Dorvik',description:'Our team, approach, and company',href:'/about',category:'Company'},
 {title:'BizOS',description:'Inventory, billing, and business operations',href:'/bizos',category:'Product'},
 {title:'Contact us',description:'Start a project or enquire about an AcademicOS plan',href:'/contact',category:'Company'},
 {title:'Careers',description:'Explore engineering opportunities at Dorvik',href:'/careers',category:'Company'},
 ...SERVICES.map(service=>({title:service.title,description:service.tagline,href:`/solutions/${service.slug}`,category:'Service'})),
];
export function SiteSearch(){
 const [open,setOpen]=useState(false);const[query,setQuery]=useState('');const dialog=useRef(null);const input=useRef(null);const trigger=useRef(null);const resultList=useRef(null);
 const results=pages.filter(page=>`${page.title} ${page.description}`.toLowerCase().includes(query.toLowerCase().trim()));
 useEffect(()=>{function shortcut(e){if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setOpen(value=>!value)}}document.addEventListener('keydown',shortcut);return()=>document.removeEventListener('keydown',shortcut)},[]);
 useEffect(()=>{if(open){dialog.current?.showModal();input.current?.focus()}else dialog.current?.close()},[open]);
 function close(){setOpen(false);setQuery('')}
 return <><button className="pro-search-trigger" ref={trigger} aria-label="Search Dorvik" title="Search Dorvik (Ctrl or Command + K)" onClick={()=>setOpen(true)}><Search size={17}/><kbd>⌘ K</kbd></button><dialog ref={dialog} className="pro-search-dialog" onCancel={close} onClose={()=>{close();trigger.current?.focus()}} onClick={e=>{if(e.target===e.currentTarget)close()}} aria-label="Search Dorvik website"><div className="pro-search-dialog-head"><Search size={20}/><input ref={input} value={query} onChange={e=>setQuery(e.target.value)} aria-label="Search pages, services, or products" placeholder="Search pages, services, or products…" onKeyDown={e=>{if(e.key==='ArrowDown'){e.preventDefault();resultList.current?.querySelector('a')?.focus()}}}/><button onClick={close} aria-label="Close search"><X size={20}/></button></div><div className="pro-search-results" ref={resultList} onKeyDown={e=>{if(!['ArrowDown','ArrowUp'].includes(e.key))return;const links=[...resultList.current.querySelectorAll('a')];const index=links.indexOf(document.activeElement);if(index<0)return;e.preventDefault();if(e.key==='ArrowUp'&&index===0)input.current?.focus();else links[(index+(e.key==='ArrowDown'?1:-1)+links.length)%links.length]?.focus()}}><span className="pro-search-label" role="status">{query?`${results.length} matching pages`:'QUICK LINKS'}</span>{results.length?results.map(page=><Link key={page.href} href={page.href} onClick={close}><div><small>{page.category}</small><strong>{page.title}</strong><p>{page.description}</p></div><ArrowUpRight size={17}/></Link>):<div className="pro-search-empty"><h2>No results for “{query}”</h2><p>Try “AcademicOS”, “pricing”, or “software”.</p><button onClick={()=>{setQuery('');input.current?.focus()}}>Clear search</button></div>}</div><div className="pro-search-dialog-foot"><span>↑ ↓ to explore · Enter to open</span><span>Esc to close</span></div></dialog></>;
}
