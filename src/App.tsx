import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Features from "./pages/Features"
import PageNotFound from "./pages/PageNotFound"
import Ambitions from "./pages/Ambitions"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="ambitions" element={<Ambitions />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
