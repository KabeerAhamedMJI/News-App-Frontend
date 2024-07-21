import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import Footer from '../Components/footer';
import axios from 'axios';
import Modal from '../Components/modal';
import LoginForm from '../Components/loginForm';
import SignUpForm from '../Components/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginStatus } from '../app/feature/login/loginSlice';
import logo from './Img/logo.png';

const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loggedIn = useSelector(state => state.login.loggedIn)
  const dispatch = useDispatch();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    async function fetchLoginStatus() {
      try {
         await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, { withCredentials: true });
        dispatch(changeLoginStatus(true))
      } catch (error) {
        dispatch(changeLoginStatus(false))
      }
    }

    fetchLoginStatus();
  }, [dispatch]);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false);
  };

  const handleSignUpSuccess = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <>
      <header className="Header">
       <img className="img-fluid float-left" src={logo} alt="Logo" />
        <nav className="d-none d-xl-block d-xxl-block">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><button onClick={openSignUpModal} className="text-white">Sign Up</button></li>
            {loggedIn ? (
              <li><Link to="/logout">Logout</Link></li>
            ) : (
              <li><button onClick={openLoginModal} className="text-white">Login</button></li>
            )}
          </ul>
        </nav>

        <div className={`sub-menu-wrap ${isMenuOpen ? 'open' : ''}`}>
          <ul className="sub d-block d-xl-none">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/articles" onClick={() => setIsMenuOpen(false)}>Articles</Link></li>
            <li><Link to="/authors" onClick={() => setIsMenuOpen(false)}>Authors</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><button onClick={() => { openSignUpModal(); setIsMenuOpen(false); }} style={{ color: '#2e69ac' }}>Sign Up</button></li>
            {loggedIn ? (
              <li><Link to="/logout" onClick={() => setIsMenuOpen(false)}>Logout</Link></li>
            ) : (
              <li><button onClick={() => { openLoginModal(); setIsMenuOpen(false); }} style={{ color: '#2e69ac' }}>Login</button></li>
            )}
          </ul>
        </div>

        <span className="material-symbols-outlined d-block d-xl-none" onClick={toggleMenu}>menu</span>

        <div id="SearchBar">
          <input type="text" placeholder="Search" />
          <span className="material-symbols-outlined">search</span>
        </div>
      </header>

      <Outlet />

      <Footer />

      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Modal>

      <Modal isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
        <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
      </Modal>
    </>
  );
};

export default Root;
