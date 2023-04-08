import React, { createContext, useState } from "react";
const ImageContext = createContext();
const Provider = ({ children }) => {
  const [imagePath, setImagePath] = useState("");
  const [newImage, setNewImage] = useState("");

  const valueToShare = {
    imagePath,
    newImage,
    setImagePath,
    setNewImage,
  };

  return (
    <ImageContext.Provider value={valueToShare}>
      {children}
    </ImageContext.Provider>
  );
};

export { Provider };

export default ImageContext;
