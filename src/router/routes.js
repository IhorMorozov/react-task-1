import HomePage from '../pages/HomePage/HomePage';
import LogInPage from '../pages/LogInPage/LogInPage';
import UsersPage from '../pages/UsersPage/UsersPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

export const publicRoutes = [
  { path: '/home', component: HomePage, exact: true, link: 'Home' },
  { path: '/login', component: LogInPage, exact: true, link: 'Log In' },
];

export const privateRoutes = [
  { path: '/home', component: HomePage, exact: true, link: 'Home' },
  { path: '/users', component: UsersPage, exact: true, link: 'Users' },
  { path: '/profile', component: ProfilePage, exact: true, link: 'Profile' },
];
