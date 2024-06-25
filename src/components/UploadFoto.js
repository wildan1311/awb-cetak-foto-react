import { useRef } from "react";
import alertError from "../tools/SweetAlert2"

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
        <section onClick={onclick} className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-4xl text-[#71c9ce]">CETAK FOTO AWB</h1>
                <div className="dropzone my-8"
                    onClick={chooseImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="133" height="88"
                        viewBox="0 0 133 88" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M132.494 88L89.0764 1.88578L62.2509 55.0909L43.418 30.0779L0 87.7437H45.7877L45.6585 88H132.494Z"
                            fill="#71C9CE" fillOpacity="0.26" />
                        <ellipse cx="18.7472" cy="10" rx="9" ry="10" fill="#71C9CE"
                            fillOpacity="0.26" />
                    </svg>
                </div>
                <div className="rounded-full hover:bg-teal-400 bg-[#71c9ce] px-5 py-2 text-center text-white font-bold w-6 hover:cursor-pointer" style={{width: 301 + 'px'}}
                    onClick={chooseImage}>UPLOAD</div>
                <input type="file" id="gambar" ref={inputRef} accept="image/png, image/jpeg, image/jpg"
                    hidden onChange={handleFileChange} />
            </div>
        </section>
    );
}

export default UploadFoto;