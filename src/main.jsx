import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './index.css'
import App from './App.jsx'
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Timeline from './Components/Timeline/Timeline.jsx';
import Stats from './Components/Stats/Stats.jsx';
import Friend from './Components/Friend/Friend.jsx';
import FriendDetails from './Components/Friend/FriendDetails/FriendDetails.jsx';
import ShowDate from './Components/ShowDate/ShowDate.jsx';
import TimelineProvider from './Context/Timeline.jsx';

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
          const friendsRes = await fetch('/data.json');
          const friends = await friendsRes.json();

          const friend = friends.find((item) => item.id === parseInt(params.id));

          return { friend };
        }
      },
      {
        path: "/show-date",
        loader: async () => {
          const api = 'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Dhaka';
          const res = await fetch(api);
          const data = await res.json();
          return data;
        },
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </TimelineProvider>
  </StrictMode>,
)
