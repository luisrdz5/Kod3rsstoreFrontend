import Products from '../components/Products';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import ProductDetail from '../containers/productDetail';
import Profile from '../containers/Profile';

const routes = [
    {
        exact: true,
        path: '/',
        component: Home,
    },{
        exact: true,
        path: '/products',
        component: Products,
    },{
        exact: true,
        path: '/productDetail/:id',
        component: ProductDetail,
    },{
        exact: true,
        path: '/checkout',
        component: Checkout,
    },{
        exact: true,
        path: '/login',
        component: Login,
    },{
        exact: true,
        path: '/register',
        component: Register,
    },{
        exact: true,
        path: '/profile',
        component: Profile,
    },{
        exact: true,
        path: '/profile/:edit',
        component: Profile,
    },{
        name: 'NotFound',
        component: NotFound,
    },
];

export default routes;
