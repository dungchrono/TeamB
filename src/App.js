import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WrapperLayout from "./layout/layout";
import Home from "./pages/Home";
import ListItem from "./pages/ListItem";
import Detail from "./pages/Detail";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Compare from "./pages/Compare";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <WrapperLayout>
              <Home />
            </WrapperLayout>
          }
        />
        <Route
          path="/list"
          element={
            <WrapperLayout>
              <ListItem />
            </WrapperLayout>
          }
        />
        <Route
          path="/item"
          element={
            <WrapperLayout>
              <Detail />
            </WrapperLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <WrapperLayout>
              <AboutUs />
            </WrapperLayout>
          }
        />
        <Route
          path="/contact-me"
          element={
            <WrapperLayout>
              <Contact />
            </WrapperLayout>
          }
        />
        <Route
          path="/compare"
          element={
            <WrapperLayout>
              <Compare />
            </WrapperLayout>
          }
        />
        <Route
          path="/search"
          element={
            <WrapperLayout>
              <Search />
            </WrapperLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
