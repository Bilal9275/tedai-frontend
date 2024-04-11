import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './component/Navbars/Navbars';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './component/Signup/Signup';
import SignIn from './component/SignIn/SignIn';
import Sidebar from './component/sidebar/Sidebr';
import Dashboard from './component/dashboard/Dashboard';
import { BuyToken } from './component/buyToken/BuyToken';
import { Profile } from './component/profile/Profile';
import PrivateComponent from './privateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Sidebar/> */}
      <Navbars/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path= "/signin" element={<SignIn/>}/>
        <Route element={<PrivateComponent/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/buy-token' element={<BuyToken/>}/>
        <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
