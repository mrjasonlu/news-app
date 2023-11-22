import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';

const Layout = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <Header />
      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
