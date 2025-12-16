import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

const MainLayout = lazy (() => import ('./Layout/MainLayout'));
const Home = lazy (() => import ('./pages/Home/Home'));
const Article = lazy (() => import ('./pages/Article/Article'));
const NotFound = lazy (() => import ('./pages/NotFound'));
const DashBoardRoutes = lazy (() => import ('./pages/Admin/DashBoardRoutes'));

function App () {
  return (
    <div className="bg-gray-950 overflow-x-hidden">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 1500,
          style: {background: '#333', color: '#fff'},
        }}
      />
      <Routes>
        {/* Main */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Dashboard - Admin */}
        {DashBoardRoutes}
      </Routes>
    </div>
  );
}

export default App;
