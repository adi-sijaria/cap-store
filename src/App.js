import logo from './logo.svg';
import './App.css';
import { AuthContextProvider } from './Context/AuthContext';
import Checkout from './routes/Checkout/Checkout.component';
// import './Categories.style.scss'
import Home from './routes/home/Home';
import Navigation from './routes/home/navigation/Navigation';
import Authentication from './routes/home/authentication/authentication';
import { Routes, Route, Outlet } from 'react-router-dom'
// import Categoryitem from './Components/Category-item/Categoryitem';
import Directory from './Components/directory/Directory.component';
import Shop from './routes/shop/Shop';
const App = () => {
  return (
    <AuthContextProvider>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>


    </Routes>
    </AuthContextProvider>


  );
};

export default App;
