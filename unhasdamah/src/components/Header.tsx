import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full bg-primary text-white shadow-md z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-3xl font-bold">{t('hero.title')}</div>
        <nav className="hidden md:flex space-x-10">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white font-medium text-lg hover:text-pink-200 transition-colors cursor-pointer bg-transparent border-none focus:outline-none"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-white font-medium text-lg hover:text-pink-200 transition-colors cursor-pointer bg-transparent border-none focus:outline-none"
          >
            {t('nav.services')}
          </button>
          <button 
            onClick={() => scrollToSection('location')} 
            className="text-white font-medium text-lg hover:text-pink-200 transition-colors cursor-pointer bg-transparent border-none focus:outline-none"
          >
            {t('nav.location')}
          </button>
        </nav>
        <div className="flex items-center space-x-2">
          <select 
            value={currentLanguage} 
            onChange={changeLanguage}
            className="bg-white text-primary px-3 py-2 rounded-full text-sm font-medium cursor-pointer border-2 border-white"
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
          </select>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      
      {/* Menu móvel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary shadow-md z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white font-medium text-lg hover:text-pink-200 transition-colors text-left cursor-pointer bg-transparent border-none focus:outline-none"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white font-medium text-lg hover:text-pink-200 transition-colors text-left cursor-pointer bg-transparent border-none focus:outline-none"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="text-white font-medium text-lg hover:text-pink-200 transition-colors text-left cursor-pointer bg-transparent border-none focus:outline-none"
            >
              {t('nav.location')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 