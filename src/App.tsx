import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mac from "./pages/Mac";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mac" element={<Mac />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;