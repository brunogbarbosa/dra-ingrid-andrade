'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="cinematic-hero" aria-labelledby="campaign-title">
    <figure className="cinematic-portrait"><Image src={site.images.hero} alt="Dra. Ingrid Andrade" fill preload sizes="(max-width:700px) 100vw, 65vw" /></figure>
    <div className="cinematic-shade" aria-hidden="true" />
    <div className="cinematic-inner">
      <div className="cinematic-location" data-hero-motion="fade"><span>HARMONIZAÇÃO FACIAL</span><span>GARANHUNS · PE</span></div>
      <div className="cinematic-copy">
        <h1 id="campaign-title" aria-label="A beleza de ser você.">
          <span className="cinematic-title-mask"><span data-hero-motion="title">A beleza</span></span>
          <span className="cinematic-title-mask"><span data-hero-motion="title">de ser</span></span>
          <span className="cinematic-title-mask"><em data-hero-motion="title">você.</em></span>
        </h1>
        <p className="cinematic-description" data-hero-motion="fade"><span aria-hidden="true" />Um olhar sensível para os seus traços.<br />Uma forma única de realçar a sua essência.</p>
        <a className="cinematic-cta" href={appointmentUrl} target="_blank" rel="noreferrer" data-hero-motion="fade">Agendar minha avaliação <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" /></a>
      </div>
      <div className="cinematic-baseline" data-hero-motion="fade">
        <a href="#manifesto"><ArrowDown size={16} strokeWidth={1.3} aria-hidden="true" /><span>UM NOVO OLHAR SOBRE VOCÊ</span></a>
        <p>Dra. Ingrid Andrade</p><span>BELEZA COM IDENTIDADE.</span>
      </div>
    </div>
  </section>;
}
