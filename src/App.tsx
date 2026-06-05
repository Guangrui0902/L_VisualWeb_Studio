import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
