import React, { useState } from "react";
import css from "./DownloadComponent.module.css";
import { useImageContext } from "../../context/ImageContext";
import previewImage from "../../assets/previewImage.svg";
import { AlertModal, Button } from "../index";

const DownloadComponent = () => {
  const { newImage, imagePath } = useImageContext();
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const downloadImage = () => {
    if (!newImage || !imagePath) {
      setAlertMessage("new image not yet generated");
      setShowAlertModal(true);
    } else {
      const a = document.createElement("a");
      a.href = newImage;
      a.download = "onImage.png";
      a.click();
      URL.revokeObjectURL(newImage);
    }
  };

  return (
    <div className={css.main}>
      <div className={css.heading_sec}>
        <h2 className={css.heading}>preview image</h2>
      </div>
      <div className={css.preview_container}>
        <div className={css.preview_box}>
          <img
            className={
              newImage || imagePath ? css.imagePreview : css.previewIcon
            }
            src={newImage || imagePath ? newImage || imagePath : previewImage}
            alt="preview icon"
          />
        </div>
      </div>
      <div className={css.btn_sec}>
        <Button onClick={() => downloadImage()}>download Image</Button>
      </div>
      {showAlertModal && (
        <AlertModal message={alertMessage} show={setShowAlertModal} />
      )}
    </div>
  );
};

export default DownloadComponent;
