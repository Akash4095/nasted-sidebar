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
import Profile from './components/pages/Profile';
import Auth from './components/pages/Auth';
import Billing from './components/pages/Billing';

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
          <Route path="/settings/profile" element={<Profile />} />
          <Route path="/settings/auth" element={<Auth />} />
          <Route path="/settings/billings" element={<Billing />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </div>
  );
}

export default App;
