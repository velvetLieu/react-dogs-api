
import HomePage from "./pages/HomePage";
import BreedList from "./pages/BreedList";
import BreedImages from "./pages/BreedImages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/breeds" element={<BreedList />} />
          <Route path="/breed-image" element={<BreedImages />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
