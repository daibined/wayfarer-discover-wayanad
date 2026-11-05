import React,{useState} from 'react';
import {Reveal} from './hooks.js';
import {CAT_ICON,V} from './data.js';
export const Photo=({d,className=''})=>{const[bad,setBad]=useState(false);
return bad?<div className={'bg-gradient-to-br from-emerald to-forest text-cream/80 flex flex-col items-center justify-center text-center p-4 '+className}><span className="text-3xl">{CAT_ICON[d.cat]}</span><span className="text-xs mt-2">Photo of {d.n} to be added<br/>(public/images/{d.s}.jpg)</span></div>
:<img src={`/images/${d.s}.jpg`} alt={d.n+', Wayanad'} loading="lazy" onError={()=>setBad(true)} className={'object-cover '+className}/>};
export const Card=({d,fav,onFav})=><Reveal><article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
<div className="relative overflow-hidden"><Photo d={d} className="w-full h-52 group-hover:scale-105 transition duration-500"/>
<button aria-label="favourite" onClick={()=>onFav(d.s)} className="absolute top-3 right-3 bg-cream/90 rounded-full w-9 h-9 text-lg">{fav?'❤️':'🤍'}</button>
{d.gem&&<span className="absolute top-3 left-3 bg-earth text-cream text-xs px-3 py-1 rounded-full">Hidden gem</span>}</div>
<div className="p-5"><p className="text-xs uppercase tracking-wider text-emerald">{d.cat}</p><h3 className="font-serif text-xl mt-1">{d.n}</h3><p className="text-sm text-forest/70 mt-1">📍 {d.loc}</p>
<a href={'#/destination/'+d.s} className="inline-block mt-3 text-sm font-medium text-emerald hover:underline">View details →</a></div></article></Reveal>;
export const Section=({title,sub,children,tone})=><section className={'py-16 px-5 '+(tone||'')}><div className="max-w-6xl mx-auto"><Reveal><h2 className="font-serif text-3xl md:text-4xl">{title}</h2>{sub&&<p className="mt-2 text-forest/70 max-w-2xl">{sub}</p>}</Reveal><div className="mt-8">{children}</div></div></section>;
export const Hero=({title,sub,children,tall})=><header className={'relative flex items-center text-cream px-5 bg-gradient-to-b from-forest via-emerald to-forest '+(tall?'min-h-screen':'py-28')}>
<div className="absolute inset-0 opacity-30" style={{background:'radial-gradient(ellipse at 30% 20%,#a7b99a,transparent 60%),radial-gradient(ellipse at 80% 80%,#6b4a2f,transparent 50%)'}}/>
<div className="relative max-w-4xl mx-auto text-center"><h1 className="font-serif text-4xl md:text-7xl leading-tight">{title}</h1><p className="mt-4 text-lg md:text-xl text-cream/85">{sub}</p>{children}</div></header>;
export const Verify=()=><p className="text-xs bg-sage/30 border border-sage rounded-xl p-3 mt-4">⚠️ Entry fees, timings, permits and distances are not listed here because they change and have not been verified. {V}</p>;
export const Empty=({msg})=><div className="text-center py-16 text-forest/60"><div className="text-4xl">🍃</div><p className="mt-2">{msg}</p></div>;
export const Skeleton=()=><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[1,2,3].map(i=><div key={i} className="h-72 rounded-3xl bg-sage/30 animate-pulse"/>)}</div>;
