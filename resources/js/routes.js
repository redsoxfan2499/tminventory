let Login = require('./components/auth/Login.vue').default;
let Register = require('./components/auth/Register.vue').default;
let Forgot = require('./components/auth/Forgot.vue').default;
let Home = require('./components/Home.vue').default;

export const routes = [
    { path: '/', component: Login, name: '/' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/forgot', component: Forgot, name: 'forgot' },
    { path: '/home', component: Home, name: 'home'}

]
