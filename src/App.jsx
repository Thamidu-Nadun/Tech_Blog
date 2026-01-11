import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import {AuthProvider} from './context/AuthProvider';
import DashBoardRoutes from './pages/Admin/DashBoardRoutes';
import {HelmetProvider} from 'react-helmet-async';

const MainLayout = lazy (() => import ('./Layout/MainLayout'));
const Home = lazy (() => import ('./pages/Home/Home'));
const Login = lazy (() => import ('./pages/Login/Login'));
const Article = lazy (() => import ('./pages/Article/Article'));
const NotFound = lazy (() => import ('./pages/NotFound'));

function App () {
  return (
    <HelmetProvider>
      <div className="bg-gray-950">
        <AuthProvider>
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
              <Route path="/login" element={<Login />} />
              <Route path="article/:slug" element={<Article />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            {/* Dashboard - Admin */}
            {/* <DashBoardRoutes /> */}
            {DashBoardRoutes}
          </Routes>
        </AuthProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
