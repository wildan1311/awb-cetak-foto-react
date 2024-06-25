// import logo from './logo.svg';
import UploadFoto  from "./components/UploadFoto";
import './App.css';
import { useState } from "react";
import EditFoto from "./components/EditFoto";

function App() {
  const [img, setImg] = useState(null);
  return (
    <div>
      {img == null 
        ?  <UploadFoto setImage={setImg} />
        : <EditFoto img={img}/>
      }
    </div>
  );
}

export default App;
