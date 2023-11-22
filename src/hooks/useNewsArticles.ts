import { useQuery } from '@tanstack/react-query';
import { searchArticles } from 'api/news';

const key = 'news_articles';

const useNewsArticles = (query: string = '') => {
  const articles = useQuery({
    queryKey: [key, query],
    queryFn: () => (!query ? [] : searchArticles(query)),
  });

  return { articles };
};

export default useNewsArticles;
