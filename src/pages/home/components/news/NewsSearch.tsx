// modules
import { useState } from 'react';

// hooks
import { useDebounce } from '@uidotdev/usehooks';
import useNewsArticles from 'hooks/useNewsArticles';
import Loader from 'components/loader/Loader';
import { useTranslation } from 'react-i18next';
import NewsArticles from './NewsListing';

const NewsSearch = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  const handleQueryChange = (query: string) => {
    setQuery(query);
  };

  const {
    articles: { data: articleList, error, isLoading },
  } = useNewsArticles(debouncedQuery);
  return (
    <div className="flex justify-center flex-col items-center">
      <label htmlFor="news_search" className="sr-only">
        {t('news.search_label')}
      </label>
      <input
        id="news_search"
        type="text"
        placeholder={t('news.search_label')}
        className="border w-96 h-10 p-2 mb-10 rounded-md border-slate-500"
        onChange={(e) => handleQueryChange(e.target.value)}
        value={query}
      />
      {isLoading && (
        <div className="flex justify-center p-10">
          <Loader />
        </div>
      )}
      {error && <div className="p-10">{t('error.try_again')}</div>}
      <NewsArticles articles={articleList} />
    </div>
  );
};

export default NewsSearch;
