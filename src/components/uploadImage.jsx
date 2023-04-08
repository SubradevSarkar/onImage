import React, { useState } from "react";
import css from "./uploadImage.module.css";
import useImageContext from "../hook/image-context-hook";
import Button from "./Button";
import uploadFile from "../assets/uploadFile.svg";
import AlertModal from "./alertModal";

const uploadImage = () => {
  const { setImagePath, setNewImage, imagePath } = useImageContext();
  const [text, setText] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const getInputText = (text) => {
    setText(text);
  };

  const setImageUrl = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setImagePath(imageUrl);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const imageUrl = URL.createObjectURL(e.dataTransfer.files[0]);
    setImagePath(imageUrl);
  };

  const generateImage = (text) => {
    if (!imagePath || !text) {
      setAlertMessage("Please add image/text");
      setShowAlertModal(true);
    } else {
      const img = new Image();
      img.src = imagePath;
      img.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "150px Arial";
        const maxWidth = canvas.width * 0.8; // Set a maximum width for the text
        let fontSize = canvas.width * 0.1; // Set an initial font size based on the width of the canvas
        ctx.font = `${fontSize}px sans-serif`;

        // Reduce the font size until the text fits within the maximum width
        while (ctx.measureText(text).width > maxWidth && fontSize > 12) {
          fontSize--;
          ctx.font = `${fontSize}px sans-serif`;
        }

        const x = (canvas.width - ctx.measureText(text).width) / 2;
        const y = canvas.height / 2;
        ctx.fillText(text, x, y);
        const newImageUrl = canvas.toDataURL("image/png");
        setNewImage(newImageUrl);
      };
    }
  };

  return (
    <div className={css.main}>
      <div className={css.heading_sec}>
        <h2 className={css.heading}>upload image</h2>
      </div>
      <div className={css.up_container}>
        <div
          className={`${css.upload_box} ${
            isDragging ? css.upload_box_drag : ""
          }`}
          draggable="true"
          onDragOverCapture={handleDragOver}
          onDragLeaveCapture={handleDragLeave}
          onDragEnd={handleDragLeave}
          onDrop={handleDrop}
        >
          <img
            className={css.uploadicon}
            src={uploadFile}
            alt="uploadFile icon"
          />

          <h3>
            Drag or drop file here or&nbsp;
            <label className={css.upload_link} htmlFor="up-btn">
              Choose file
            </label>
          </h3>
          <input
            className={css.up_section}
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            id="up-btn"
            onChange={(e) => {
              setImageUrl(e);
            }}
          />
        </div>
      </div>
      <div className={css.input_container}>
        <form>
          <label>Text</label>
          <input
            className={css.text_input}
            value={text}
            type="text"
            placeholder="Enter text ..."
            onChange={(e) => {
              getInputText(e.target.value);
            }}
          />
        </form>
      </div>
      <div className={css.btn_sec}>
        <Button onClick={() => generateImage(text)}>generate Image</Button>
      </div>
      {showAlertModal && (
        <AlertModal message={alertMessage} show={setShowAlertModal} />
      )}
    </div>
  );
};

export default uploadImage;
