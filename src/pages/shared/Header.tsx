import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="flex align-center justify-center w-full border-b ">
      <header className="py-3 px-5 font-bold text-green-600 max-w-6xl w-full">
        {t('header.title')}
      </header>
    </div>
  );
};

export default Header;
