import React,{useState} from 'react';
import {useRoute,useFavs} from './hooks.js';
import {Home,Explore,Detail,Gems,Plan,Taste,Culture,About,Contact} from './pages.jsx';
const NAV=[['explore','Explore'],['hidden-gems','Hidden Gems'],['plan','Plan'],['taste','Taste'],['culture','Culture'],['about','About'],['contact','Contact']];
export default function App(){const route=useRoute();const[favs,fav]=useFavs();const[open,setOpen]=useState(false);const p=route.split('?')[0].split('/');const P={favs,onFav:fav};
const page=!p[0]?<Home {...P}/>:p[0]==='explore'?<Explore {...P} route={route}/>:p[0]==='destination'?<Detail slug={p[1]} {...P}/>:p[0]==='hidden-gems'?<Gems {...P}/>:p[0]==='plan'?<Plan/>:p[0]==='taste'?<Taste/>:p[0]==='culture'?<Culture/>:p[0]==='about'?<About/>:p[0]==='contact'?<Contact/>:<Home {...P}/>;
return<><nav className="fixed top-0 inset-x-0 z-50 bg-forest/90 backdrop-blur text-cream"><div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between"><a href="#/" className="font-serif text-xl tracking-widest">WAYFARER</a>
<button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
<ul className={(open?'flex':'hidden')+' md:flex absolute md:static top-14 inset-x-0 bg-forest md:bg-transparent flex-col md:flex-row gap-4 p-5 md:p-0 text-sm'}>{NAV.map(([h,l])=><li key={h}><a href={'#/'+h} onClick={()=>setOpen(false)} className={'hover:text-sage '+(p[0]===h?'text-sage':'')}>{l}</a></li>)}</ul></div></nav>
<main>{page}</main><footer className="bg-forest text-cream/80 text-center text-sm py-10 px-5">WAYFARER · Discover Wayanad – Where Nature Feels Like Home.<br/>Verify fees, timings, permits and access with official sources.</footer></>}
