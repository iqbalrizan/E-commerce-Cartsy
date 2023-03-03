import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { Footer } from './components/footer/Footer';
import Register from './pages/login/Register';
import Login from './pages/login/Login';
import { Account } from './pages/account/Account';
import { useSelector } from 'react-redux';

function App() {

  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)

  return (
    <>
    {isLoggIn && (
      <BrowserRouter>
   <Header />
   <Switch>
    <Route exact path ="/" component={Home} />
    <Route exact path ="/register" component={Register} />
    {/* <Route exact path ="/login" component={Login} /> */}
    <Route exact path ="/account" component={Account} />
    
   </Switch>
   <Footer />
   </BrowserRouter>
    )}
    {!isLoggIn && <Login />}
   </>
  );
}

export default App;
