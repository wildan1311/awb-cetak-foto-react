import { useRef } from "react";
import alertError from "../tools/SweetAlert2"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import {ReactComponent as SvgUpload} from '../svg/photo-upload.svg'

function UploadFoto({setImage}){
    const inputRef = useRef(null);

    function chooseImage(){
        inputRef.current.click();
    }

    function handleFileChange(event){
        const file = event.target.files[0];
        if(checkImage(file)){
            const image = URL.createObjectURL(file);
            setImage(image);
        }else{
            event.target.value = null;
            alertError({title: "Masukkan Gambar Yang Sesuai", message: "Support Image JPG or PNG"});
        }
    }

    function checkImage(image){
        const imgName = image.name;
        const extImg = imgName.match(/\.(jpg|jpeg|png|gif)$/i)
        if(extImg == null){
            return false
        }
        return true
    }

    return (
        <section onClick={onclick} className="flex items-center justify-center h-screen bg-[#f5f8fa]">
            <div className="items-center w-1/2 rounded-2xl bg-[#fefefe] p-4 relative min-w-96">
                <div className="absolute top-4 right-4">
                    <HighlightOffIcon />
                </div>
                <p className="text-xl text-[#335a5d]">Add New Image</p>

                <div className="border-dashed border-2 border-[#dcf2f3] grid grid-cols-1 justify-items-center content-center h-52 my-4 hover:cursor-pointer"
                    onClick={chooseImage}
                >
                    <SvgUpload />
                    <p className="text-center">Drag & Drop or <span className="text-[#71c9ce]">choose file</span> to upload</p>
                    <p className="text-center sm:hidden lg:block text-[#71c9ce]">Crop WEBP,JPG,JPEG or PNG by defining a rectangle in pixels.</p>
                </div>

                <div className="relative h-10">
                    <hr className="border-black border-2 rounded-full absolute top-1/2 left-1/2"></hr>
                    <p className="text-center inline-block top-1/2 left-1/2">OR</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between content-center">
                    <p><LiveHelpIcon /> Still Need Help</p>
                    <div className="grid grid-cols-2 gap-2 sm:mt-2 lg:mt-0">
                        <button className="rounded-full border-solid border-2 border-[#71c9ce] py-2 px-5 text-[#71c9ce]  hover:bg-teal-400 hover:text-white">Cancel</button>
                        <button className="rounded-full bg-[#71c9ce] py-2 px-5 text-white  hover:bg-teal-400">Upload</button>
                    </div>
                </div>
                <input type="file" id="gambar" ref={inputRef} accept="image/png, image/jpeg, image/jpg"
                    hidden onChange={handleFileChange} />
            </div>
        </section>
    );
}

export default UploadFoto;