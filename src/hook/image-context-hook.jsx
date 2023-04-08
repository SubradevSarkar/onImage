import React, { useContext } from "react";
import ImageContext from "../context/image";

const useImageContext = () => {
  return useContext(ImageContext);
};

export default useImageContext;
