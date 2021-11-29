import HomePage from '../pages/HomePage/HomePage';
import LogInPage from '../pages/LogInPage/LogInPage';
import UsersPage from '../pages/UsersPage/UsersPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

export const publicRoutes = [
  {
    path: '/', component: HomePage, exact: true, link: 'Home',
  },
  {
    path: '/login', component: LogInPage, exact: true, link: 'Log In',
  },
  {
    path: '/registration', component: RegistrationPage, exact: true, link: 'Registration',
  },
];

export const privateRoutes = [
  {
    path: '/', component: HomePage, exact: true, link: 'Home',
  },
  {
    path: '/users', component: UsersPage, exact: true, link: 'Users',
  },
  {
    path: '/profile', component: ProfilePage, exact: true, link: 'Profile',
  },
];
