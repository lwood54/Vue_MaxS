import Home from "./components/Home";
import Header from "./components/Header";

// lazy loading with webpack
const User = resolve => {
      require.ensure(['./components/user/User.vue'], () => {
            resolve(require('./components/user/User.vue'));
      }, 'user');
      // you can additionally group lazy loaded components by adding a group name, so
      // so when one is accessed, they all get loaded.
}
const UserStart = resolve => {
      require.ensure(['./components/user/UserStart.vue'], () => {
            resolve(require('./components/user/UserStart.vue'));
      }, 'user');
}
const UserEdit = resolve => {
      require.ensure(['./components/user/UserEdit.vue'], () => {
            resolve(require('./components/user/UserEdit.vue'));
      }, 'user');
}
const UserDetail = resolve => {
      require.ensure(['./components/user/UserDetail.vue'], () => {
            resolve(require('./components/user/UserDetail.vue'));
      }, 'user');
}


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
            {path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                  console.log('inside route setup');
                  // this works in the exact same way as the global setup, but is specific to this route
                  // this function can also be stored in another file and imported if desired
                  next();
            }},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}
      ]},
      // {path: '/redirect-me', redirect: '/user'}
      {path: '/redirect-me', redirect: {name: 'home'}}, // redirect route with explicit redirection
      {path: '*', redirect: '/'} // catch all / wildcard will redirect to home or '/' in this case
];