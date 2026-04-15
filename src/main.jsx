import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import './index.css'
import { router } from './Router/routing/routes.jsx'
import TimelineProvider from './Context/Timeline.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </TimelineProvider>
  </StrictMode>,
)
