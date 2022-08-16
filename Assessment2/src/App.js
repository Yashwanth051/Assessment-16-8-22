import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import {commerce} from './lib/commerce';
import Products from './components/Products/Products';
import NavbarComp from './components/Navbar/NavbarComp';
import Cart from './components/Cart/Cart';

import ProductView from './components/ProductView/ProductView';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './components/LoginandSignup/Login';
import SignUp from './components/LoginandSignup/SignUp';



  const App = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

  
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
  
      setProducts(data);
    };
  
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };
  
    const handleAddToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);
  
      setCart(item.cart);
    };
  
    const handleUpdateCartQty = async (lineItemId, quantity) => {
      const response = await commerce.cart.update(lineItemId, { quantity });
  
      setCart(response.cart);
    };
  
    const handleRemoveFromCart = async (lineItemId) => {
      const response = await commerce.cart.remove(lineItemId);
  
      setCart(response.cart);
    };
  
    const handleEmptyCart = async () => {
      const response = await commerce.cart.empty();
  
      setCart(response.cart);
    };
  
    const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();
  
      setCart(newCart);
    };
  
  
    useEffect(() => {
      fetchProducts();
      fetchCart();
    }, []);
  
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  
    return (
      <div>
        <NavbarComp/>
      <Router>
        <div style={{ display: 'flex' }}>
          <CssBaseline />
          <NavbarComp totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
          <Switch>
            <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <SignUp/>
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
            </Route>
            <Route path="/product-view/:id" exact>
              <ProductView />
            </Route>
           
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  };
  
  export default App;
  