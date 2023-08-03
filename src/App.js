import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import HomePage from "./pages/HomePage/HomePage";
import Page404 from "./pages/Page404/Page404";
import Login from "./pages/Login/Login";
import AdminTemplate from "./template/AdminTemplate";
import Ribbon from "antd/es/badge/Ribbon";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import UserManagament from "./pages/Page404/UserManagement/UserManagament";
import LoaDing from "./pages/LoaDing/LoaDing";
import QuanTriPhim from "./Components/QuanTriPhim/QuanTriPhim";
// import Demo from "./Components/Footer/Demo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route index path="user" element={<UserManagament />} />
          <Route index path="movie" element={<QuanTriPhim />} />
        </Route>
        <Route path="/adminlogin" element={<LoginAdmin />}>
          {/* <Route path="demo" element={<Demo />} /> */}
        </Route>
        <Route path="*" element={<Page404 />} />
        <Route path="/loading" element={<LoaDing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
