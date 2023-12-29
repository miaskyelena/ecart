import React, { useState, useEffect } from 'react'; 
import { useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from './routes/Layout';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import ReadProducts from './pages/Read/ReadProducts';
import CreateProduct from './pages/Create/CreateProduct';
import ProductDetails from './pages/View/ProductDetails';
import EditProduct from './pages/Update/EditProduct';
import About from './pages/About/About';
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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { 
      data: { subscription },  
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  let element = useRoutes([
    {
      path: '/',
      element: <Layout session={session}/>,
      children: [
        { path: '/', element: <HomePage data={products} session={session}/> },
        { path: '/login', element: <LoginPage session={session} /> },
        { path: '/products', element: <ReadProducts data={products} /> },
        { path: '/products/:id', element: <ProductDetails /> },
        { path: '/create', element: <CreateProduct /> },
        { path: '/edit/:id', element: <EditProduct /> },
        { path: '/about', element: <About /> },
      ]
    }
  ]);

 
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;