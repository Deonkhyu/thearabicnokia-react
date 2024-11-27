"use client";

import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

interface ImagesUploaderProps {
  setAnnotatedImagePath: (imagePath: string | null) => void;
  setResultsFilePath: (filePath: string | null) => void;
}

const ImagesUploader: React.FC<ImagesUploaderProps> = ({ setAnnotatedImagePath, setResultsFilePath }) => {
  const [images, setImages] = useState<ImageListType>([]);
  const maxNumber = 1;

  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages(imageList);
  };

  const handleUpload = async () => {
    if (images.length === 0) return;

    const formData = new FormData();
    formData.append('file', images[0].file as File);

    try {
      const response = await fetch('http://localhost:8000/predict/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setAnnotatedImagePath(data.annotated_image_path);
      setResultsFilePath(data.results_file_path);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="App flex">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="80%" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)} className="ms-2">Remove</button>
                  <button onClick={handleUpload} className="ms-2">Upload</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImagesUploader;