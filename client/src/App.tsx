import { Routes, Route } from "react-router-dom";
import { NavBar } from "./assets/components/NavBar";
import { Home } from "./assets/components/Home";
import { Favourites } from "./assets/components/Favourites";
import { SignIn } from "./assets/components/SignIn";
import { SignUp } from "./assets/components/SignUp";
import { Details } from "./assets/components/Details";
import { Footer } from "./assets/components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
