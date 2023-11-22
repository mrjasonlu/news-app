// components
import NewsSection from './NewsSection';

// hooks
import { useTranslation } from 'react-i18next';

// utils
import { groupBy } from 'utils/array';

// types
import { NewsArticleT } from './types';

type NewsArticleProps = {
  articles?: NewsArticleT[];
};

const NewsArticles = ({ articles }: NewsArticleProps) => {
  const { t } = useTranslation();
  if (!articles || !articles.length) {
    return null;
  }

  const articleSectionGroups = groupBy(
    articles,
    ({ sectionName }) => sectionName,
  );
  const articleSections = Object.keys(articleSectionGroups).map(
    (sectionName) => (
      <NewsSection
        articles={articleSectionGroups[sectionName]}
        sectionTitle={sectionName}
      />
    ),
  );
  return (
    <div className="flex justify-left flex-col items-left">
      {articleSections}
    </div>
  );
};

export default NewsArticles;
