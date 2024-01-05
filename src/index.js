import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Layout from './layout/Layout';
import Home from "./pages/home/Home"
import Reels from "./pages/reels/Reels"
import Message from "./pages/message/Message"
import Notification from "./pages/notification/Notification"
import Create from "./pages/create/Create"
import Profile from "./pages/profile/Profile"

const router = createBrowserRouter (createRoutesFromElements (
  <Route path='/' element= {<Layout />}>
    <Route path='home' element= {<Home />}/>
    <Route path='reels' element= {<Reels />}/>
    <Route path='message' element= {<Message />}/>
    <Route path='notification' element= {<Notification />}/>
    <Route path='create' element= {<Create />}/>
    <Route path='profile' element= {<Profile />}/>
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-login-authentication.us.auth0.com"
    clientId="H65ifvpEYg9U4nhomlJ0aTb5XLWLBT0C"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <RouterProvider router= {router}/>
   </Auth0Provider>,
);
