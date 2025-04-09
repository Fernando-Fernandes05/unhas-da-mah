import { useTranslation } from 'react-i18next';

const Location = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="pt-28 pb-20 px-4 bg-pink-50 scroll-mt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-3">{t('location.title')}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Visite nosso espaço e desfrute de um ambiente aconchegante e profissional.
        </p>
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('location.address')}</h3>
              <p className="mb-6 text-gray-700">{t('location.hours')}</p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">(13) 99753-1709</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">ma.tronoloni@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://maps.app.goo.gl/CeLQ6C329UBmaxfJ7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-white px-6 py-3 rounded-full inline-block hover:bg-pink-600 hover:text-white transition-colors no-underline"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.2098855382337!2d-46.3705649!3d-23.9530172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1ca85ee0e7f9%3A0x6f9b534aebcbf75a!2sR.%20Rubim%20C%C3%A9sar%2C%20653%20-%20Vila%20Sao%20Jorge%2C%20S%C3%A3o%20Vicente%20-%20SP%2C%2011380-060!5e0!3m2!1spt-BR!2sbr!4v1744223955787!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location; 