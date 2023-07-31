import "./App.css";
import HomeComponent from "./pages/Home";
import AboutComponent from "./pages/About";
import LoginComponent from "./pages/Login";
import SignupComponent from "./pages/Signup";
import EventsComponent from "./pages/Events";
import ContactComponent from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBar";
import ActivitiesComponent from "./pages/Activities";

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/events" element={<EventsComponent />} />
        <Route path="/activities" element={<ActivitiesComponent />} />
        <Route path="/contact-us" element={<ContactComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
      </Routes>
    </>
  );
}

export default App;
