import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pt-40 pb-32 px-4">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 bg-cover bg-center" 
           style={{ 
             backgroundImage: "url('https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
             filter: "brightness(0.8)"
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
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg"
          >
            {t('nav.services')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 