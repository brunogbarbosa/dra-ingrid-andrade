'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { appointmentUrl } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [
  { value: 'Garanhuns', label: 'PERNAMBUCO' },
  { value: 'Seu olhar', label: 'NOSSO PONTO DE PARTIDA' },
];

function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Elegância com naturalidade">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">ELEGÂNCIA</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">NATURALIDADE</textPath>
      </text>
      <text className="campaign-seal-mark" x="90" y="103" textAnchor="middle" fill="currentColor">IA</text>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">HARMONIZAÇÃO FACIAL</p>
        <h1 id="campaign-title" aria-label="Beleza que respeita você">
          <span className="campaign-title-line"><span>BELEZA QUE</span></span>
          <span className="campaign-title-line"><span>RESPEITA</span></span>
          <span className="campaign-title-line"><span>VOCÊ.</span></span>
        </h1>
        <p className="campaign-subtitle">Elegância e naturalidade.<br/>A sua essência em cada detalhe.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
      <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src="/images/ingrid-retrato.webp" alt="Dra. Ingrid Andrade" fill preload sizes="(max-width:700px) 88vw, 44vw"/></div>
      </figure>
      <SmileSeal/>
      <p className="campaign-editorial">Beleza<br/>com<br/>propósito<span aria-hidden="true"/></p>
      <div className="campaign-metrics" aria-label="Localização e cuidado">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. INGRID ANDRADE</p><em>Harmonização facial<br className="campaign-signature-break"/> com elegância e naturalidade.</em></div></div>
    </div>
  </section>;
}
