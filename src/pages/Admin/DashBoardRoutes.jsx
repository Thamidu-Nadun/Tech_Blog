import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import ProtectedRoute from '../../Layout/ProtectedRoute';

const AdminDashboardLayout = lazy (() =>
  import ('../../Layout/AdminDashboardLayout')
);
const DashboardPage = lazy (() => import ('./Admin'));
const ArticlesPage = lazy (() => import ('./pages/Articles/Articles'));
const PodcastsPage = lazy (() => import ('./pages/Podcasts/Podcasts'));
const WebStoriesPage = lazy (() => import ('./pages/WebStories/WebStories'));
const CategoryPage = lazy (() => import ('./pages/Categories/Categories'));
const CommentsPage = lazy (() => import ('./pages/Comments/Comments'));
const CategoryView = lazy (() => import ('./pages/Categories/CategoryView'));
const ArticleNew = lazy (() => import ('./pages/Articles/Pages/ArticleNew'));
const ArticleEdit = lazy (() => import ('./pages/Articles/Pages/ArticleEdit'));
const CategoryNew = lazy (() => import ('./pages/Categories/CategoryNew'));

const DashBoardRoutes = (
  <Route
    key="dashboard"
    path="/dashboard"
    element={
      <ProtectedRoute requiredRoles={['ROLE_ADMIN', 'ROLE_AUTHOR']}>
        <AdminDashboardLayout />
      </ProtectedRoute>
    }
  >
    <Route index element={<DashboardPage />} />
    <Route path="articles">
      <Route index element={<ArticlesPage />} />
      <Route path="new" element={<ArticleNew />} />
      <Route path="edit/:id" element={<ArticleEdit />} />
    </Route>
    <Route path="podcasts" element={<PodcastsPage />} />
    <Route path="stories" element={<WebStoriesPage />} />
    <Route path="categories">
      <Route index element={<CategoryPage />} />
      <Route path="new" element={<CategoryNew />} />
      <Route path="edit/:cat_id" element={<CategoryView />} />
    </Route>
    <Route path="comments" element={<CommentsPage />} />
  </Route>
);

export default DashBoardRoutes;
