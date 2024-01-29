import React, { useState, useEffect } from 'react'; 
import { useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './routes/Layout';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import ReadProducts from './pages/Read/ReadProducts';
import CreateProduct from './pages/Create/CreateProduct';
import ProductDetails from './pages/View/ProductDetails';
import EditProduct from './pages/Update/EditProduct';
import About from './pages/About/About';
import UserDashboard from './pages/User/UserDashboard';
import UserLikes from './pages/User/UserLikes';
import supabase from './Client';
const App = () => {
  

  const [products, setProducts] = useState([]);
  const [session, setSession] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage data={products} /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/products', element: <ReadProducts data={products} /> },
        { path: '/products/:id', element: <ProductDetails /> },
        { path: '/create', element: <CreateProduct /> },
        { path: '/edit/:id', element: <EditProduct /> },
        { path: '/about', element: <About /> },
        { path: '/user', element: <UserDashboard /> },
        { path: '/user/likes', element: <UserLikes data={products}/> },
      ]
    }
  ]);

 
  return (
    <div className="App">
      <CartProvider>
        {element}
      </CartProvider>
    </div>
  );
}

export default App;