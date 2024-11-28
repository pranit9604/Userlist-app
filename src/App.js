import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import AddUserPage from "./pages/AddUserPage";
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserListPage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
      <Route path="/add-user" element={<AddUserPage />} />
      <Route path="/users/:userId" component={UserDetailPage} />
    </Routes>
  </Router>
);

export default App;
