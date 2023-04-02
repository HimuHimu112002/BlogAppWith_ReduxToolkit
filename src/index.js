import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseConfig from './firebaseConfig';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import UploadBlog from './pages/UploadBlog';
import store from './store';
import { Provider } from 'react-redux'
import ShowBlogInfo from './pages/ShowBlogInfo';
import Contact from './pages/Contact';
import AllBlog from './pages/AllBlog';
import About from './pages/About';
import Error from './component/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/uploadBlog",
    element: <UploadBlog></UploadBlog>,
  },
  {
    path: "/blogInfo",
    element: <ShowBlogInfo></ShowBlogInfo>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/allblog",
    element: <AllBlog></AllBlog>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/*",
    element: <Error></Error>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
