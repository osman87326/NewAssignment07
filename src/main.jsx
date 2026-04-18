
import './index.css'


import TimelineProvider from './components/context/TimelineProvider';
import { router } from './route/Route';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider> 
          <RouterProvider router={router} />
    </TimelineProvider>
      
  </StrictMode>,
)
 