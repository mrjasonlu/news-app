import { NEWS_API_URL } from 'config/resources';
import mockNewsData from './mockNewsData';
import { NewsArticleT } from 'pages/home/components/news/types';

export async function searchArticles(query: string): Promise<NewsArticleT[]> {
  // url used for fetching real api calls for future
  const url = NEWS_API_URL;

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
