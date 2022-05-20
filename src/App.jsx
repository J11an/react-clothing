import Home from "./routes/home/home.components";
import {Routes,Route} from 'react-router-dom';
import NavigationBar from "./routes/navigation/navigation.components";
import Authentication from "./routes/authentication/authentication.component";


const App = () => {

  return(
  <Routes>
    <Route path = '/' element = {<NavigationBar/>}>
      <Route index element = {<Home/>}></Route>
      <Route path = '/auth' element = {<Authentication/>}></Route>

    </Route>
  </Routes>
  )
  


};

export default App;
