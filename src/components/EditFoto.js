import React, { useEffect, useState } from "react";
import Cropper from "cropperjs";
import { useRef } from "react";
import Card from "../components/partials/Card";
import AwbIcon from "../assets/images/logo-awb.png";
import Input from "../components/partials/Input";
import SelectSize from "./partials/SelectSize";
// import { AlignHorizontalCenter, AlignHorizontalCenterOutlined, AlignVerticalCenter, Height, OpenWith, VerticalAlignCenter, WidthFull } from "@mui/icons-material";
import Button from "./partials/Button";
import { alertSuccess } from "../tools/SweetAlert2";

function EditFoto({ img }) {
  const imgElement = useRef(null);
  const [selectedSize, setSelectedSize] = useState("2x3");
  const [numberOfPrint, setnumberOfPrint] = useState(1);

  function changeAspectRatio() {
    let aspectRatio = selectedSize;
    let x = aspectRatio.split("x")[0];
    let y = aspectRatio.split("x")[1];
    imgElement.current.cropper.setAspectRatio(x / y);
  }

  function cetak() {
    let aspectRatio = selectedSize;
    let x = aspectRatio.split("x")[0];
    let banyakCetak = numberOfPrint;
    let halamanPrint = document.getElementById("print");

    for (let i = 0; i < banyakCetak; i++) {
      let canvasElement = imgElement.current.cropper.getCroppedCanvas({
        imageSmoothingQuality: "high",
        fillColor: "#ac100b",
      });
      canvasElement.style.width = x + "cm";
      canvasElement.style.display = "inline";
      canvasElement.style.margin = "7px";
      canvasElement.style.border = "1px solid black";
      halamanPrint.appendChild(canvasElement);
    }

    window.print();
    alertSuccess({ title: "Success", message: "Berhasil Cetak Foto" }).then(
      (value) => window.location.reload()
    );
    halamanPrint.innerHTML = "";
    // window.location.reload();
  }

  useEffect(() => {
    new Cropper(imgElement.current, {
      viewMode: 3,
      aspectRatio: 2 / 3,
    });
    console.log("INISIALISASI CROPPER JALAN");
  }, [imgElement]);

  useEffect(() => {
    if (selectedSize) {
      changeAspectRatio();
    }
  }, [selectedSize]);

  return (
    <>
      <section
        className="flex justify-content-center align-items-center"
        id="edit"
      >
        <Card className="">
          <Card.Title>
            <h1>Editor foto</h1>
          </Card.Title>
          <Card.Body>
            <div className="flex flex-col md:flex-row items-center  gap-10">
              <div>
                <div className="border-dashed border-2 border-[#dcf2f3] w-[200px] md:mb-0 md:mr-4">
                  <img
                    src={img ?? AwbIcon}
                    ref={imgElement}
                    alt="gambar"
                    id="img-preview"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                {/* <div className="flex justify-around h-6 items-center">
                  <div className="rounded-full h-max bg-primary1 p-1"><AlignHorizontalCenter style={{width: "10px", height: "10px"}}/></div>
                  <div className="rounded-full h-max bg-primary1 p-1"><OpenWith style={{width: "10px", height: "10px"}}/></div>
                  <div className="rounded-full h-max bg-primary1 p-1"><AlignVerticalCenter style={{width: "10px", height: "10px"}}/></div>
                </div> */}
              </div>
              <div className="flex-grow">
                <div className="flex items-center my-2">
                  <label className="w-36">Ukuran</label>
                  <SelectSize setSelectedSize={setSelectedSize} />
                </div>
                <div className="flex items-center my-2">
                  <label className="w-36">Banyak Cetak</label>
                  <Input
                    name="banyak_cetak"
                    type="text"
                    className=""
                    handleChange={setnumberOfPrint}
                  />
                </div>
                <Button
                  classname="bg-[#71c9ce] py-2 px-5 text-white hover:bg-teal-400 float-end ms-auto"
                  id="submit"
                  title={"Cetak"}
                  onClick={cetak}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </section>
    </>
  );
}

export default EditFoto;
