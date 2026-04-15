import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Timeline from './Components/Timeline/Timeline.jsx';
import Stats from './Components/Stats/Stats.jsx';
import Friend from './Components/Friend/Friend.jsx';
import FriendDetails from './Components/Friend/FriendDetails/FriendDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch('/data.json');
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/stats",
        Component: Stats,
      },
      {
        path: "/friend",
        loader: async () => {
          const res = await fetch('/data.json');
          const data = await res.json();
          return data;
        },
        Component: Friend,
      },
      {
        path: "/friend/:id",
        Component: FriendDetails,
        loader: async ({ params }) => {
          const res = await fetch('/data.json');
          const data = await res.json();
          return data.find(friend => friend.id === parseInt(params.id));
        }
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
