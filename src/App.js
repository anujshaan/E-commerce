import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Components/Header";
import SingleProduct from "./Pages/SingleProduct";
import Login from './Pages/Login'
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CartScreen from './Pages/CartScreen'
import Shipping from "./Pages/Shipping";
import Payment from "./Pages/Payment";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import NotFound from "./Pages/NotFound";


function App() {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path="/products/:id" element={<SingleProduct />} />
          </Routes>
          <Routes>
            <Route  path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
          <Routes>
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
          <Routes>
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Routes>
            <Route path="/placeorder" element={<PlaceOrder />} />
          </Routes>
          <Routes>
            <Route path="/order" element={<Order />} />
          </Routes>
          {/* <Routes>
            <Route exact path="*" element={<NotFound />} />
          </Routes> */}
        </Router>
      </div>
  );
}

export default App;
