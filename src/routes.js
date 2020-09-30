// routes.js
import Home from './components/Home.vue';
import Api from './components/Api.vue';
import AddPics from './components/AddPics.vue';
import ShowPics from './components/ShowPics.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/api', component: Api },
    { path: '/addpics', component: AddPics },
    { path: '/showpics', component: ShowPics },
];

export default routes;