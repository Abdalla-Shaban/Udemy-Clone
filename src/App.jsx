import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import CourseContext from "./context/CourseContext";
import {
  Dev,
  Home,
  Bus,
  Fin,
  IT,
  Off,
  Per,
  Des,
  Mar,
  Lif,
  Pho,
  Hea,
  Mus,
  Tec,
  CourseDetail,
  CoursesCart,
  Login,
  Signup,
} from "./pages";
import CartContext from "./context/CartContext";

function App() {
  return (
    <CourseContext>
      <CartContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/cart" element={<CoursesCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Dev" element={<Dev />} />
          <Route path="/Bus" element={<Bus />} />
          <Route path="/Fin" element={<Fin />} />
          <Route path="/IT" element={<IT />} />
          <Route path="/Off" element={<Off />} />
          <Route path="/Per" element={<Per />} />
          <Route path="/Des" element={<Des />} />
          <Route path="/Mar" element={<Mar />} />
          <Route path="/Lif" element={<Lif />} />
          <Route path="/Pho" element={<Pho />} />
          <Route path="/Hea" element={<Hea />} />
          <Route path="/Mus" element={<Mus />} />
          <Route path="/Tec" element={<Tec />} />
        </Routes>
        <Footer />
      </CartContext>
    </CourseContext>
  );
}

export default App;
