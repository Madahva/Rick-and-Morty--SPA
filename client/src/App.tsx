import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Favourites } from "./components/Favourites";
import { Details } from "./components/Details";
import { Modal } from "./components/Modal";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="App">
      <NavBar visible={isModalVisible} toggleModal={toggleModal} />
      <Modal visible={isModalVisible} toggleModal={toggleModal} />
      <Routes>
        <Route
          path="/"
          element={<Home visible={isModalVisible} toggleModal={toggleModal} />}
        />
        <Route path="/favourites" element={<Favourites />} />
        <Route
          path="/details/:id"
          element={
            <Details visible={isModalVisible} toggleModal={toggleModal} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
