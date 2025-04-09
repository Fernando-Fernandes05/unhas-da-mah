import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-28 pb-20 px-4 scroll-mt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-3">{t('about.title')}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conheça um pouco sobre minha trajetória e paixão pelo mundo das unhas.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Nail artist"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-gray-700">
              {t('about.description')}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-pink-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-gray-700">Anos de experiência</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-gray-700">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 