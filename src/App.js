
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Pages/Home/Home'
import NotFound from './Pages/Notfound/NotFound';
import Header from './Shared/Header';
import Login from './Pages/Login/Login';
import About from './Pages/Home/About Us/About';
import PrivateRoute from './Pages/Login/Privateroute';
import Appoint from './Appoint/Appoint';
import Footer from './Shared/Footer';
import AuthProvider from './Hook/contexts/Authprovider';
import Register from './Pages/Register.js/Register';
import Ride from './Pages/Ride';
import Doctor from './Pages/Doctor';

function App() {
  return (
    <AuthProvider>
    <div className="App">
    <Router>
      <Header></Header>
    <Switch>
      <Route exact path="/">
<Home></Home>
      </Route>
      <Route exact path="/home">
<Home></Home>
      </Route>
      <Route exact path="/home#about">
<About></About>
      </Route>
      <Route exact path="/login">
<Login></Login>
      </Route>
      <Route exact path="/reg">
<Register></Register>
      </Route>
      <PrivateRoute exact path="/appoint/:serviceId">
      <Appoint></Appoint>
            </PrivateRoute>
      <PrivateRoute exact path="/ambulence">
      <Ride></Ride>
            </PrivateRoute>
      <PrivateRoute exact path="/doctor">
      <Doctor></Doctor>
            </PrivateRoute>
     
      <Route exact path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
    </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
