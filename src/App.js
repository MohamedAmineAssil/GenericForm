import React, { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import SectionPanel from './components/Section/SectionPanel';
import { Store } from './Store/Store';

// create GenericFormContext 
export const GenericFormContext = createContext();

function App() {
  return (
    <GenericFormContext.Provider value={Store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Container/>}/>
          <Route path="forms/:form_id/" element={<Container/>}>
            <Route path='section/:section_id/:section_label' element={<SectionPanel/>}></Route>
          </Route>
        </Routes>
      </div>
    </GenericFormContext.Provider>
  );
}

export default App;
