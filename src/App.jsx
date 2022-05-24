import Home from "./routes/home/home.components";
import {Routes,Route} from 'react-router-dom';
import NavigationBar from "./routes/navigation/navigation.components";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./Components/Checkout/checkout.component";


const App = () => {

  return(
  <Routes>
    <Route path = '/' element = {<NavigationBar/>}>
      <Route index element = {<Home/>}></Route>
      <Route path = '/auth' element = {<Authentication/>}></Route>
      <Route path = '/shop' element = {<Shop/>}></Route>
      <Route path = '/checkout' element = {<Checkout/>}></Route>

    </Route>
  </Routes>
  )
  


};

export default App;
