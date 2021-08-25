import {BrowserRouter as Router , Route , Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProductsPage from "./pages/Product"
import ProfilePage from "./pages/Profile"
import Cart from "./pages/Cart"
import Details from "./pages/Details"
// import SiteHeader from "./components/SiteHeader"
// import SignUp from "./components/SignUp"

// import NavBar from "./components/NavBar"
function App() {
  return (
    <Router>
    {/* <div className="App"> */}
      {/* <SiteHeader/> */}
      
      
      <Switch>


        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/signup" component={SignUp} /> */}
       <Route exact path="/cart" component={Cart} />
       <Route exact path="/details/:id" component={Details} />
       
        {/* <Route exact path="/add_product" component={add_product} /> */}
        {/* <Route exact path="/products/:id" component={details} /> */}
        <Route exact path="/profile" component={ProfilePage} />
        {/* <Route exact path="/checkout" component={checkout} /> */}
        {/* <Route exact path="/cart" component={cart} /> */}

      </Switch>
      {/* </div> */}
      </Router>
  );
}

export default App;
