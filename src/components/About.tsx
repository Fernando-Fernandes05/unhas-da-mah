import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-28 pb-20 px-4 scroll-mt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-3">{t('about.title')}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('about.intro')}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-lg shadow-xl overflow-hidden h-[350px] w-[280px] bg-pink-50">
              <img 
                src="/unhas-da-mah/NailDesignerMah.jpg" 
                alt="Nail artist"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-gray-700">
              {t('about.description')}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-pink-50 px-8 py-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">2+</p>
                <p className="text-gray-700">{t('about.experience')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 