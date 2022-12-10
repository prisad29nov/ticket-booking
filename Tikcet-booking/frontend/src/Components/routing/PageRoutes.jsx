import { Routes, Route, Link } from 'react-router-dom';
import MovieListing from '../../Home/MovieListing';
import Booking from '../Booking/Booking';
import Login from '../Login/Login';
import Signup from '../Signup/SignUp';
import Successful from '../Successful/Successful';

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MovieListing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/successful' element={<Successful />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
