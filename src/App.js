import { Routes, Route } from 'react-router-dom';

import Home from './pages/HomeRegister/Home';
import ProfileStaff from './pages/ProfileStaff/ProfileStaff';
import StaffSekritar from './pages/StaffSekritar/StaffSekritar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profileStaff' element={<ProfileStaff />} />
        <Route path='/staffSekritar' element={<StaffSekritar />} />
      </Routes>
    </>
  );
}

export default App;
