import { useRef } from "react";
import {alertError} from "../tools/SweetAlert2";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import Card from "../components/partials/Card";
import { ReactComponent as SvgUpload } from "../svg/photo-upload.svg";
import Button from "../components/partials/Button";

function UploadFoto({ setImage, image }) {
  const inputRef = useRef(null);

  function chooseImage() {
    inputRef.current.click();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (checkImage(file)) {
      const image = URL.createObjectURL(file);
      setImage(image);
    } else {
      event.target.value = null;
      alertError({
        title: "Masukkan Gambar Yang Sesuai",
        message: "Support Image JPG or PNG",
      });
    }
  }

  function checkImage(image) {
    const imgName = image.name;
    const extImg = imgName.match(/\.(jpg|jpeg|png|gif)$/i);
    if (extImg == null) {
      return false;
    }
    return true;
  }

  return (
    <section className="flex items-center justify-center h-screen">
      <Card>
        <div
          className="border-dashed border-2 border-[#dcf2f3] grid grid-cols-1 justify-items-center content-center h-52 my-4 hover:cursor-pointer"
          onClick={chooseImage}
        >
          <SvgUpload />
          <p className="text-center">
            Drag & Drop or <span className="text-[#71c9ce]">choose file</span>{" "}
            to upload
          </p>
          <p className="text-center sm:hidden lg:block text-[#71c9ce]">
            Crop WEBP,JPG,JPEG or PNG by defining a rectangle in pixels.
          </p>
        </div>

        

        <div className="flex flex-col lg:flex-row justify-between content-center">
          <p>
            <LiveHelpIcon /> Still Need Help
          </p>
          <div className="grid grid-cols-2 gap-2 sm:mt-2 lg:mt-0">
            <Button
              className="border-solid border-2 border-[#71c9ce] text-[#71c9ce] hover:bg-teal-400 hover:text-white"
              title="Cancel"
              disabled={true}
            />
            <Button classname="bg-[#71c9ce] py-2 px-5 text-white hover:bg-teal-400" title={"Upload"}/>
          </div>
        </div>
        <input
          type="file"
          id="gambar"
          ref={inputRef}
          accept="image/png, image/jpeg, image/jpg"
          hidden
          onChange={handleFileChange}
        /> 
      </Card>
    </section>
  );
}

export default UploadFoto;
