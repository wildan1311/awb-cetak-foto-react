import Cropper from 'cropperjs';

class CropperTools{
    constructor(elementImg){
        this.setImageCrop(elementImg);
        this.cropdata = this.cropper.cropBoxData
    }

    setImageCrop(elementImg){
        this.cropper = new Cropper(elementImg, {
            viewMode: 3,
            aspectRatio: 2 / 3,
        });
    }

    zoom(scale) {
        this.cropper.zoom(scale);
    }

    move(x, y) {
        this.cropper.move(x, y)
    }

    center() {
        this.cropper.setCropBoxData({
            left: this.cropdata.maxLeft / 2,
            top: this.cropdata.maxTop / 2
        })
    }

    centerLeft() {
        this.cropper.setCropBoxData({
            left: this.cropdata.maxLeft / 2,
        })
    }

    centerTop() {
        this.cropper.setCropBoxData({
            top: this.cropdata.maxTop / 2
        })
    }
}

export default CropperTools