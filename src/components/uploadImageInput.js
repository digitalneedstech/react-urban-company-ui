import React, { useState, useEffect } from "react";
import _ from "lodash";
import { storage } from "../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export default function UploadImageInput(props) {
  const { onImageUpload, deleteImg, setDeleteImg, isDoc } = props;

  const [fileName, setFileName] = useState("");
  const [percent, setPercent] = useState(0);
  const [error, setError] = useState("");

  function handleChange(event) {
    const tempFile = event.target.files[0];
    if (!tempFile) {
      setError("Please upload an image first!");
    } else {
      if (isDoc) {
        var ext = tempFile.name.split(".").pop().toLowerCase();
        if (["doc", "pdf", "docx"].indexOf(ext) == -1) {
          setError("Invalid format, Only PDF, Doc and DOCX are allowed");
          return;
        }
      } else {
        let pattern = /image-*/;

        if (!tempFile.type.match(pattern)) {
          setError("Invalid format");
          return;
        }
      }
      setFileName(tempFile.name);
      handleUpload(tempFile);
    }
  }

  const handleUpload = (file) => {
    setError("");
    const storageRef = ref(storage, `/images/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => {
        console.log(err);
        setError(err);
      },
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          onImageUpload(url);
        });
      }
    );
  };

  const deleteImage = () => {
    const desertRef = ref(storage, `/images/${fileName}`);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        onImageUpload("");
        setDeleteImg(false);
        setFileName("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (deleteImg) deleteImage();
  }, [deleteImage]);

  return (
    <>
      <div className="">
        <input
          type="text"
          className="form-control login-input profile-inpt"
          placeholder="Click to browse"
          defaultValue={fileName}
        />
        <div className="upload-btn-wrapper">
          <button className="uploadBtn">BROWSE</button>
          <input type="file" onChange={handleChange} accept="/image/*" />
        </div>
        {!_.isEmpty(error) && (
          <div className="invalid-feedback mb-3" style={{ display: "block" }}>
            {error}
          </div>
        )}
        {percent != 0 && percent != 100 && (
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: percent + "%" }}
              aria-valuenow={percent}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        )}
      </div>
    </>
  );
}
