import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from '../components/Products';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import ProductDetail from '../containers/productDetail';
import Profile from '../containers/Profile';


const App = () => (
  <BrowserRouter>
    <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/productDetail/:id" component={ProductDetail} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:edit" component={Profile} />
          <Route component={NotFound} />
        </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;