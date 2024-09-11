import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./ekranlar/Layout";
import {Anasayfa} from "./ekranlar/Anasayfa";
import {Blog} from "./ekranlar/Blog";
import {Contact} from "./ekranlar/Contact";
import {Nopage} from "./ekranlar/Nopage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Anasayfa />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
