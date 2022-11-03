import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './contexts/productContext'
import { UserContextProvider } from './contexts/userContext'

//Components and Pages
import Register from './pages/Register'
import Search from './pages/Search'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage';
import Features from './components/product/Features'
import Overview from './components/product/Overview'
import Specification from './components/product/Specification'
import Cart from './pages/Cart';
import ProductList from './pages/ProductList'
import Profile from './pages/Profile'
import Orders from './pages/Orders'

//Protected Routes
import { CartProtected } from './ProtectedRoutes';
import { LoginProtected } from './ProtectedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <UserContextProvider>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<App />} />

            <Route element={<LoginProtected />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>


            <Route path="/product/:id" element={<ProductPage />} >
              <Route path="overview" element={<Overview />} />
              <Route path="features" element={<Features />} />
              <Route path="specification" element={<Specification />} />
            </Route>

            <Route element={<CartProtected />}>
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/search" element={<Search />} />
            <Route path="/product_list/:category" element={<ProductList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </ContextProvider>
      </UserContextProvider>
    </React.StrictMode>
  </Router>
);

