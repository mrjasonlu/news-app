import { useTranslation } from 'react-i18next';
import NewsArticles from './components/news/NewsSearch';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full p-5 md:p-10 flex justify-center items-center flex-col">
      <h1 className="font-bold text-green-600 text-3xl mb-10">
        {t('home.title')}
      </h1>
      <NewsArticles />
    </div>
  );
};

export default Home;
