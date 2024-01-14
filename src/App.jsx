import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Collections from "./pages/Collections";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import WordList from "./pages/WordList";
import Practice from "./pages/Practice";
import Friends from "./pages/Friends";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/collections" element={<Collections />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/word-list" element={<WordList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer limit={2} />
    </BrowserRouter>
  );
};

export default App;
