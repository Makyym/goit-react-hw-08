import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { ThreeDots } from 'react-loader-spinner';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
  const styles = {
    display: "flex",
    justifyContent: "center",
  };
  return isRefreshing ? <ThreeDots wrapperStyle={styles} /> : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path='register'
          element=
          {<RestrictedRoute component={<RegistrationPage />} redirectTo='/contacts' />}
        />
        <Route
          path='login'
          element=
          {<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />}
        />
        <Route path='contacts'
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
};

export default App
