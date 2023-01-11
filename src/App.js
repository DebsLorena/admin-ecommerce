import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import NewSlider from "./pages/newSlider/NewSlider";
import SlidersList from "./pages/slidersList/SlidersList";
import BannerList from "./pages/bannerList/BannerList";
import NewBanner from "./pages/newBanner/NewBanner";
import Newsletter from "./pages/newsletterList/NewslettersList";


function App() {

  const admin =  useSelector((state) => state.user.currentUser.isAdmin);


  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/sliders">
                <SlidersList />
              </Route>
              <Route path="/newSlider">
                <NewSlider />
              </Route>
              <Route path="/banners">
                <BannerList />
              </Route>
              <Route path="/newBanner">
                <NewBanner />
              </Route>
              <Route path="/newsletter">
                <Newsletter />
              </Route>
            </div>
          </>
        )} 
        
      </Switch>
    </Router>
  );
}

export default App;
