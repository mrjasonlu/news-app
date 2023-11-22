import { NEWS_API_URL } from 'config/resources';
import mockNewsData from './mockNewsData';
import { NewsArticleT } from 'pages/home/components/news/types';

export async function searchArticles(query: string): Promise<NewsArticleT[]> {
  const url = NEWS_API_URL;
  // url used for fetching real api calls
  /* 
  status: 'ok',
  userTier: 'developer',
  total: 29731,
  startIndex: 1,
  pageSize: 10,
  currentPage: 1,
  pages: 2974,
  orderBy: 'relevance',
  results:
  */

  return new Promise((resolve) => {
    if (!query) {
      resolve([]);
    } else {
      setTimeout(function () {
        resolve(mockNewsData);
      }, 2000);
    }
  });
}
