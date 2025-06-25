import { Link, Route, Routes } from "react-router-dom";

import BookList from "./BookList";
import About from "../../07ReactRouter/src/component/About/About";
import Homee from "../../07ReactRouter/src/component/Home/Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Homee</Link>
          </li>
          <li>
            <Link to="/Books">Books</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/Books" element={<BookList />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
