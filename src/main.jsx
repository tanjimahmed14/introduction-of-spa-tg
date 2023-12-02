import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './componits/Header/Header.jsx';
import About from './componits/About/About.jsx';
import Users from './componits/Users/Users.jsx';
import Useardetels from './componits/UsearDetels/Useardetels.jsx';
import Posts from './componits/Users/Posts/Posts.jsx';
import DetelsPost from './componits/DetelsPost/DetelsPost.jsx';
import ErrorPost from './componits/ErrorPost/ErrorPost.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    errorElement: <ErrorPost></ErrorPost>,
    children: [
      {
        path:'/about',
        element: <About></About>
      },
      {
        path: '/users',
        loader: () =>  fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/usear/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Useardetels></Useardetels>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch( `https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <DetelsPost></DetelsPost>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
