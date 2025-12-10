import { useTranslation } from 'react-i18next';
import fotoUnhaHero from "../assets/fotoUnhaHero.jpeg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pt-40 pb-32 px-4">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 bg-cover bg-center" 
           style={{ 
             backgroundImage: `url(${fotoUnhaHero})`,
             backgroundPosition: "50% 60%",
             filter: "brightness(0.9)"
           }}>
        <div className="absolute inset-0 bg-primary opacity-20"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="container mx-auto text-center relative z-10">
        <div className="bg-white/90 backdrop-blur-sm max-w-3xl mx-auto p-10 rounded-lg shadow-xl">
          <h1 className="text-5xl font-bold text-primary mb-4">{t('hero.title')}</h1>
          <p className="text-xl mb-8 text-gray-700">{t('hero.subtitle')}</p>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 hover:text-white transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-0"
          >
            {t('nav.services')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 