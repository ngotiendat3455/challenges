
import 'App.scss';
import Loading from 'components/atoms/Loading';
import MainLayout from 'components/templates/MainLayout';
import { ErrorsPage } from 'features/errors/ErrorsPage';
// import { MoviePage } from 'features/movie/MoviePage';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Outlet, Route, Routes,
  Navigate,
} from 'react-router-dom';
import { store } from 'store';

const MoviePage = React.lazy(() => import('./features/movie/MoviePage'))

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        element={(
          <MainLayout />
        )}
      >
        <Route 
          path='movie/*'
          element={(
            <Suspense fallback={<Loading />} >
              <MoviePage />
            </Suspense>
          )}
        />
        <Route 
          path='error/*' 
          element={<ErrorsPage />} 
        />
        <Route path='*' element={<Navigate to='/movie/now-playing' />} />
      </Route>
    </Routes>
  );
};

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default AppWrapper;