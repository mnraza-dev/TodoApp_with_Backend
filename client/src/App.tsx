
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Home />
      <Signup />
      <Login />
    </RouterProvider>
  )
}

export default App
