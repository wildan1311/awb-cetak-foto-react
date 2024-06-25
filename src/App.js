// import logo from './logo.svg';
import UploadFoto  from "./components/UploadFoto";
import './App.css';
import { useState } from "react";
import EditFoto from "./components/EditFoto";
import Navbar from './components/Navbar';

function App() {
  const [img, setImg] = useState(null);
  return (
    <>
      <Navbar />
      <div>
        {img == null 
          ?  <UploadFoto setImage={setImg} />
          : <EditFoto img={img}/>
        }
      </div>
    </>
  );
}

export default App;
