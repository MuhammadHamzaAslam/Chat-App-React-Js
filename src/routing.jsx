import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Pages/login";
import App from "./App";
import SignupForm from "./Pages/signup";
import AddPerson from "./Pages/addPerson";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/addUser" element={<AddPerson />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
