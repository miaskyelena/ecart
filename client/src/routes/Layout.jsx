import { Outlet } from 'react-router-dom';
import Navigation from '../components/Header/Navigation';

const Layout = ({ session }) => {
  return (
    <>
      <Navigation session={session} />
      <Outlet />
    </>
  )
}

export default Layout