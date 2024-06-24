import "./App.css";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import DashboardQuest from "./components/DashboardQuest";
import MyCommunities from "./components/Communities/MyCommunities";
import AccountSettings from "./components/Authentication/AccountSettings";
import Tesing from "./elements/Tesing";
import Plans from "./elements/Plans";
import { useEffect } from "react";
import { currentUser } from "./slice/Userslice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./elements/Header";
import Navbar from "./elements/Navbar";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import AllCommunities from "./components/Communities/AllCommunities";
import DashBoardAdmin from "./components/DashBoardAdmin";
import DashBoard from "./components/DashBoard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/login" Component={Login} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/forget-password" Component={ForgotPassword} />
          <Route path="/profile" Component={Profile} />
          <Route path="/cw/:name/:id/admin" Component={DashBoardAdmin} />
          <Route path="/cw/:name/:id" Component={DashBoard} />
          {/* <Route path="/dashboard-quest/menu" Component={DashboardQuest} /> */}
          <Route path="/my-communities" Component={MyCommunities} />
          <Route path="/account-settings" Component={AccountSettings} />
          {/* <Route path="/dashboard/admin" Component={Tesing} /> */}
          <Route path="/plans" Component={Plans} />
          <Route path="/all-communities" Component={AllCommunities} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
