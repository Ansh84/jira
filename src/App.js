import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import KanbanBoard from './Project/DashBoard/kanbanBoard';
import ProjectSetting from './Project/DashBoard/projectSettings';
import Navbar from './Project/Navbar/Navbar';
import Sidebar from './Project/SideBar/sidebar';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/board' element={<KanbanBoard />} />
        <Route path='/editProject' element={<ProjectSetting />} />
      </Routes>
      
    </div>
  );
}

export default App;
