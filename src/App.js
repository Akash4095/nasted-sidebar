import './App.css';
import SideBar from "./components/sidebar";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import Users from "./components/pages/Users";
import Messages from "./components/pages/Messages";
import FileManager from "./components/pages/FileManager";
import Analytics from "./components/pages/Analytics";
import Order from "./components/pages/Order";
import Saved from "./components/pages/Saved";
import Setting from "./components/pages/Setting";

function App() {
  return (
    <div className="App">
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </div>
  );
}

export default App;
