
import 'App.scss';
import MainLayout from 'components/templates/MainLayout';
import { ErrorsPage } from 'features/errors/ErrorsPage';
import { MoviePage } from 'features/movie/MoviePage';
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Outlet, Route, Routes,
  Navigate,
} from 'react-router-dom';
import { store } from 'store';


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
          element={<MoviePage />}
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