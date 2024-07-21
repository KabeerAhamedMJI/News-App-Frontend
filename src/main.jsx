import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/root'
import "./index.css";
import Home from "./Routes/home";
import Articles from "./Routes/articles";
import About from "./Routes/about";
import Article from "./Routes/article";
import Authors from "./Routes/authors"
import Author, {loader as authorLoader} from "./Routes/author";
import Signup from "./Routes/signup";
import LoginForm from "./Components/loginForm";
import Logout from "./Routes/logout";
import store from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/articles',
        element: <Articles />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/articles/:ArticleId', 
        element: <Article />
      },
      {
        path: '/authors/:authorId', 
        element: <Author />,
        loader: authorLoader
      },
      {
        path: '/authors', 
        element: <Authors />
      },
      {
        path: '/signup',
       element: <Signup />
      },
      {
        path: '/login',
        element: <LoginForm />
      },
      {
        path: 'logout',
        element: <Logout />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>,
  </React.StrictMode>
);