import React, { useState } from "react";
import "./diagnosis.css"

const Diagnosis = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return (
    <section className="sec" style={{textAlign:"center"}}>
      <label>
        + Add an Image
        <br />
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />

      {selectedImages.length > 0 &&
        (selectedImages.length > 1 ? (
          <p className="error">
            You can't upload more than 1 images! <br />
            <span>
              please delete <b> {selectedImages.length - 1} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log("UPLOAD IMAGES");
            }}
          >
            UPLOADED {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button
                  onClick={() =>
                    setSelectedImages(selectedImages.filter((e) => e !== image))
                  }
                >
                  delete image
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Diagnosis;