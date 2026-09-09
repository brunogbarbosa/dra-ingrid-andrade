export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export const site = {
  name: 'Ingrid Andrade', monogram: 'IA',
  headline: 'Harmonização facial com elegância e naturalidade.',
  cro: '', bio: 'Beleza e autocuidado com propósito. Um olhar para a harmonização facial que valoriza seus traços e respeita a sua identidade.',
  education: [] as string[], specialties: [] as string[],
  phone: '', whatsapp: '', whatsappUrl: 'https://wa.me/message/OZDQJWUA2PQFF1',
  address: 'Garanhuns · Pernambuco', professionalPhilosophy: 'Beleza e autocuidado com propósito.',
  instagram: 'https://www.instagram.com/dra.ingridandrade/', instagramHandle: '@dra.ingridandrade',
  philosophy: ['ELEGÂNCIA', 'COM', 'NATURALIDADE.'],
  colors: { paper: '#faf6ef', ink: '#30221c', taupe: '#694735', champagne: '#d9c6af', dark: '#30221c' },
  images: { hero: '/images/ingrid-retrato.webp', about: '/images/ingrid-sobre.webp', beauty: '/images/ingrid-estilo.webp' },
  procedures: [] as Procedure[], office: [] as { src: string; alt: string }[], testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Harmonia de perfil', alt: 'Registro de antes e depois de perfil enviado pela Dra. Ingrid Andrade', orientation: 'horizontal', beforeShare: 633/1276, comparisonRatio: 633/1600 },
    { image: '/images/resultado-02.webp', label: 'Beleza nos detalhes', alt: 'Registro de antes e depois em três quartos enviado pela Dra. Ingrid Andrade', orientation: 'horizontal', beforeShare: 624/1268, comparisonRatio: 624/1600 },
    { image: '/images/resultado-03.webp', label: 'Traços em equilíbrio', alt: 'Registro de antes e depois facial enviado pela Dra. Ingrid Andrade', orientation: 'horizontal', beforeShare: 631/1250, comparisonRatio: 631/1600 },
    { image: '/images/resultado-04.webp', label: 'Sua expressão, valorizada', alt: 'Registro de antes e depois em três quartos enviado pela Dra. Ingrid Andrade', orientation: 'horizontal', beforeShare: 641/1268, comparisonRatio: 641/1600 },
    { image: '/images/resultado-05.webp', label: 'Contornos com identidade', alt: 'Registro de antes e depois de perfil enviado pela Dra. Ingrid Andrade', orientation: 'horizontal', beforeShare: 611/1262, comparisonRatio: 611/1600 },
  ] },
  seo: { title: 'Dra. Ingrid Andrade | Harmonização facial em Garanhuns', description: 'Harmonização facial com elegância e naturalidade em Garanhuns, PE. Conheça o olhar da Dra. Ingrid Andrade e agende sua avaliação.', url: '' },
};
export const appointmentUrl = site.whatsappUrl || (site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Olá, gostaria de agendar uma avaliação com a Dra. Ingrid.')}` : site.instagram);
