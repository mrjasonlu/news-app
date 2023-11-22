// hooks
import NewsArticle from './NewsArticle';
import { NewsArticleT } from './types';

type NewsSectionProps = {
  sectionTitle: string;
  articles?: NewsArticleT[];
};

const NewsSection = ({ sectionTitle, articles }: NewsSectionProps) => {
  if (!articles || !articles.length) {
    return null;
  }
  const articleList = articles.map((article) => (
    <NewsArticle article={article} />
  ));
  return (
    <div className="flex flex-col mb-5">
      <h2 className="font-semibold border-b border-b-2 pb-2 mb-2">
        {sectionTitle}
      </h2>
      <div className="flex flex-col px-5">{articleList}</div>
    </div>
  );
};

export default NewsSection;
