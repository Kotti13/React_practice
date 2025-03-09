import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import Content from './Problem_7/Content';
import Header from './Problem_7/Header';
import Home from './Problem_7/Home'
import Footer from "./Problem_7/Footer";


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer /> 
    </>
  );
}


// // Home Component
// function Home() {
//   return <h2 className="text-center py-5">Welcome to MOCOM!</h2>;
// }

function Blog() {
  return <h2 className="text-center py-5">Blog Section Coming Soon...</h2>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: "Content", element: <Content /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
