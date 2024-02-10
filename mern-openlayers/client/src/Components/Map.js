import { Routes, Route } from 'react-router-dom';
import StreetLight from './StreetLight';
import CrimeRate from './CrimeRate';
import Navbar from './Navbar';
function Map() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/StreetLight' element={ <StreetLight /> }></Route>
        <Route path='/CrimeRate' element= { <CrimeRate /> }></Route>
        <Route path='/*' element={ <StreetLight /> }></Route>
      </Routes>
    </>
    
  );
}
export default Map;