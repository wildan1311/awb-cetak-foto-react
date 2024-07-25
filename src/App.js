// import logo from './logo.svg';
import UploadFoto  from "./components/UploadFoto";
import './App.css';
import { useState } from "react";
import EditFoto from "./components/EditFoto";
import Navbar from './components/partials/Navbar';

function App() {
  const [img, setImg] = useState(null);
  return (
    <>
      <Navbar />
      <main>
        <div>
          {img == null 
            ?  
            <UploadFoto setImage={setImg} image={img}/>
            : 
            <EditFoto img={img}/>
          }
        </div>
      </main>
      <div id="print" className="">
      </div>
    </>
  );
}

export default App;
