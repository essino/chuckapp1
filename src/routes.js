// routes.js
/**Getting all the components*/
import Home from './components/Home.vue';
import Api from './components/Api.vue';
import AddPics from './components/AddPics.vue';
import ShowPics from './components/ShowPics.vue';

/**Creating the routes and paths*/
const routes = [
    { path: '/', component: Home },
    { path: '/api', component: Api },
    { path: '/addpics', component: AddPics },
    { path: '/showpics', component: ShowPics },
];

/**Declaring the routes for use */
export default routes;