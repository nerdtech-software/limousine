import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';

// Import your components
import Aboutus from './components/Aboutus';
import Addcars from './components/Addcars';
import Adminpanel from './components/Adminpanel';
import BookList from './components/BookList';
import BookNow from './components/BookNow';
import Contact from './components/Contact';
import Edithomeimage from './components/Edithomeimage';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Vehicle from './components/Vehicle';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,     // Whether animation should happen only once while scrolling down
    });
  }, []); // Runs only once when the component is mounted

    const Layout = () => (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  
    const appRouter = createBrowserRouter([
     {
      path:"/",
      element:<Layout/>,
      children:[
        {
         path:"",
         element:<Homepage/>
        },
        {
         path:"/aboutus",
         element:<Aboutus/>
        },
        {
         path:"/services",
         element:<Services/>
        },
        {
         path:"/contactus",
         element:<Contact/>
        },
        {
         path:"/booknow",
         element:<BookNow/>
        },
        {
         path:"/vehicle",
         element:<Vehicle/>
        },
        {
          path:"/admin",
          element:<Adminpanel/>
        },
        {
          path:"/admin/add-cars",
          element:<Addcars/>
        },
        {
          path:"/admin/booklist",
          element:<BookList/>
        },
        {
          path:"/admin/edithomeimage",
          element:<Edithomeimage/>
        },
        {
          path:"/admin/vehicle",
          element:<Vehicle/>
        },
        {
          path:"/admin/services",
          element:<Services/>
        }
        
      ]
     }
    ]);
    return (
      <>
        <RouterProvider router={appRouter} />
      </>
    );
  }
  


export default App;
