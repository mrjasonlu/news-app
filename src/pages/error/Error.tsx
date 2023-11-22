import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center p-10 font-semibold">{t('error.not_found')}</div>
  );
};

export default Error;
