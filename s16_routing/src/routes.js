import User from "./components/user/User";
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";
import Home from "./components/Home";
import Header from "./components/Header";

export const routes = [
      { path: '', /*component: Home,*/ name: 'home', components: {
            default: Home,
            'header-top': Header
      }},
      { path: '/user', /*component: User,*/ components: {
            default: User,
            'header-bottom': Header
      },children: [
            // ' ' (no slash will append to the parent path --> /user)
            // '/' will append to the home path --> /
            {path: '', component: UserStart},
            {path: ':id', component: UserDetail},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}
      ]},
      // {path: '/redirect-me', redirect: '/user'}
      {path: '/redirect-me', redirect: {name: 'home'}}, // redirect route with explicit redirection
      {path: '*', redirect: '/'} // catch all / wildcard will redirect to home or '/' in this case
];