import { createContext, useState, useContext } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
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

export const useImageContext = () => {
  return useContext(ImageContext);
};
