import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frontt from "./components/Frontt";
import Navbar from "./components/navbar/Navbar";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Pagetwo from "./components/Pagetwo";
import Contacts from "./pages/Contact";
import Social from "./pages/Social";
import Guide from "./pages/Guide";
import "./App.css";

// Layout component that includes Navbar
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout>
            <Frontt />
            <Pagetwo />
            <Page3 />
            <Page4 />
          </Layout>}
        />
        <Route path="/contact" element={<Layout><Contacts /></Layout>} />
        <Route path="/guide" element={<Layout><Guide /></Layout>} />
        <Route path="/social" element={<Layout><Social /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
