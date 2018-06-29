import React from 'react'
import App from './App/index'
import HomePage from './pages/Home'
import ResourcePage from './pages/Resource'

// Define the routes for the App
// For each route is defined the path (except for the NotFound route) and the parent component that React should render
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...ResourcePage,
        path: '/resource/:slug',
        exact: true
      },
    ]
  }
];
