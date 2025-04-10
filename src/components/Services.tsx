import { useTranslation } from 'react-i18next';

const ServiceCard = ({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="h-72 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-600 hover:text-white transition-colors focus:outline-none focus:ring-0 border-0 outline-0">
          {t('services.schedule')}
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.manicure.title'),
      description: t('services.manicure.description'),
      imageUrl: "/unhas-da-mah/UnhaEsmaltacaoTradicional.jpg"
    },
    {
      title: t('services.gel.title'),
      description: t('services.gel.description'),
      imageUrl: "/unhas-da-mah/UnhaAlongamentoGelTips.jpg"
    },
    {
      title: t('services.gelcoating.title'),
      description: t('services.gelcoating.description'),
      imageUrl: "/unhas-da-mah/UnhaBanhoGel.jpg"
    }
  ];

  return (
    <section id="services" className="pt-28 pb-20 px-4 bg-pink-50 scroll-mt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-3">{t('services.title')}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('services.intro')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 