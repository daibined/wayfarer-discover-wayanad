import {useState,useEffect,useRef} from 'react';
export function useRoute(){const g=()=>location.hash.replace(/^#\/?/,'')||'';const[r,s]=useState(g());useEffect(()=>{const f=()=>{s(g());window.scrollTo(0,0)};addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);return r}
export function useFavs(){const[f,s]=useState(()=>{try{return JSON.parse(localStorage.getItem('wf-favs'))||[]}catch{return[]}});
const t=id=>s(p=>{const n=p.includes(id)?p.filter(x=>x!==id):[...p,id];try{localStorage.setItem('wf-favs',JSON.stringify(n))}catch{}return n});return[f,t]}
export function useTitle(t,d){useEffect(()=>{document.title=t;let m=document.querySelector('meta[name=description]');if(m&&d)m.content=d},[t,d])}
export function Reveal({children,className=''}){const r=useRef();useEffect(()=>{const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.1});o.observe(r.current);return()=>o.disconnect()},[]);return <div ref={r} className={'rv '+className}>{children}</div>}
