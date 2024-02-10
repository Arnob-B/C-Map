import { Routes, Route } from 'react-router-dom';
import StreetLight from './StreetLight';
import CrimeRate from './CrimeRate';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
function Map() {
  const nav = useNavigate
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/StreetLight' element={ <StreetLight /> }></Route>
        <Route path='/CrimeRate' element= { <CrimeRate /> }></Route>
        <Route path='/*' element={<StreetLight/>}></Route>
      </Routes>
    </>
    
  );
}
export default Map;