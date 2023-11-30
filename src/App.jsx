import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style.scss"

const Layout = () => {
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);



function App() {
  return <div className="app">
    <div className="container">
    <RouterProvider router={router} />
    {/* <Write/> */}
    </div>
  </div>;
}

export default App;
