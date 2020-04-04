import React,{useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddLogBtn from './components/layouts/AddLogBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/tech/AddTechModal';
import TechListModal from './components/tech/TechListModal';
import {Provider} from 'react-redux';
import store from './store';



function App() {
  
  useEffect(()=>{
      M.AutoInit();
  })

  return (
    <>
    <Provider store={store}>
      <SearchBar />
        <div className="container">
          <AddLogBtn />
          <AddLogModal />
          <AddTechModal />
          <EditLogModal />
          <TechListModal />
          <Logs />
          
        </div>
    </Provider>
      
     
    </>
  );
}

export default App;
