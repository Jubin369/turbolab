import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import CharacterDetails from "./components/CharacterDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </>
  );
}

export default App;
