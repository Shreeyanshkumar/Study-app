import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import RootLayout from './components/Layout/Root';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <RootLayout />,
    children: [{
      index: true,
      path: '',
      element: <Home />
    }]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
