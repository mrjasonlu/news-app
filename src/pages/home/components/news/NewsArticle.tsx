// modules
import { format } from 'date-fns';

// types
import { NewsArticleT } from './types';

type NewsArticleProps = {
  article: NewsArticleT;
};

const NewsArticle = ({ article }: NewsArticleProps) => {
  return (
    <a className="border-b p-2 last:border-none" href={article.webUrl}>
      {article.webTitle} -{' '}
      <span className="text-xs">
        {format(new Date(article.webPublicationDate), 'dd/MM/yyyy')}
      </span>
    </a>
  );
};

export default NewsArticle;
