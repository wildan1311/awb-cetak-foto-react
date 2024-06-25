import React, { useEffect, useState } from 'react';
import CropperTools from '../tools/CropperTools';
import { useRef } from 'react';

function EditFoto({img}) {
    const imgElement = useRef(null);
    const [cropper, setCropper] = useState(null);
    useEffect(()=>{
        const cropper = new CropperTools(imgElement.current);
        setCropper(cropper);
        console.log(imgElement);
        console.log(cropper);
    }, [imgElement])

    return (
        <section className="flex justify-content-center align-items-center" id="edit">
            <div className="row text-center justify-content-center align-items-center">
                <h1>CETAK FOTO AWB</h1>
                <div className="editImage row justify-content-center">
                    <div className="row">
                        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                            <div className="image-preview">
                                <img src={img} ref={imgElement} alt="gambar" id="img-preview" style={{ maxWidth: '100%' }} />
                            </div>
                            <div className="btn-toolbar mt-3" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group btn-group-sm me-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-primary" onClick={() => cropper?.move(10, 0)}>
                                        <span title="geser kiri" className="fa-solid fa-arrow-left"></span>
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={() => cropper?.move(-10, 0)}>
                                        <span title="geser kanan" className="fa-solid fa-arrow-right"></span>
                                    </button>
                                </div>
                                <div className="btn-group btn-group-sm me-2" role="group" aria-label="Second group">
                                    <button type="button" className="btn btn-primary" onClick={() => cropper?.zoom(-0.1)}>
                                        <span title="Perbesar" className="fa-solid fa-magnifying-glass-minus"></span>
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={() => cropper?.zoom(0.1)}>
                                        <span title="Perkecil" className="fa-solid fa-magnifying-glass-plus"></span>
                                    </button>
                                </div>
                                <div className="btn-group btn-group-sm me-2" role="group" aria-label="Second group">
                                    <button type="button" className="btn btn-primary" onClick={() => cropper?.centerLeft({ left: 2 })}>
                                        <span title="Tengah" className="fa-solid fa-left-right"></span>
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={() => cropper?.center()}>
                                        <span title="Tengah" className="fa-solid fa-arrows-to-dot"></span>
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={() => cropper?.centerTop({ top: 2 })}>
                                        <span title="Tengah" className="fa-solid fa-up-down"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label htmlFor="ukuran" className="form-label text-start text-white fw-bolder">Ukuran</label>
                                </div>
                                <div className="col-6">
                                    <select name="ukuran" id="ukuran" className="form-select" 
                                    // onChange={changeAspectRatio}
                                    >
                                        <option value="2x3">2x3</option>
                                        <option value="3x4">3x4</option>
                                        <option value="4x6">4x6</option>
                                        <option value="6x9">2R</option>
                                        <option value="9x13">3R</option>
                                        <option value="10x15">4R</option>
                                        <option value="13x18">5R</option>
                                        <option value="15x20">6R</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label text-start text-white fw-bolder" htmlFor="banyak_cetak">Banyak Cetak</label>
                                </div>
                                <div className="col-6">
                                    <input type="text" name="banyak_cetak" className="form-control" />
                                </div>
                            </div>
                            <div className="align-self-end justify-content-end">
                                <button className="btn btn-primary px-5" 
                                // onClick={cetak}
                                >CETAK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditFoto;
