import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import HealthTips from "./Components/HealthTips/HealthTips";
import Home from "./Components/Home/Home";
import ServiceDetails from "./Components/Home/ServiceDetails/ServiceDetails";
import Login from "./Components/Login/Login";
import PageNotFound from "./Components/NotFound/PageNotFound";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Navigation from "./Components/Shared/Navigation.js/Navigation";
import { AuthContextProvider } from "./Context/Context";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* private routes */}
            <PrivateRoute path="/health-tips">
              <HealthTips />
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            {/* dynamic route */}
            <PrivateRoute path="/service/:id">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="*" component={PageNotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
