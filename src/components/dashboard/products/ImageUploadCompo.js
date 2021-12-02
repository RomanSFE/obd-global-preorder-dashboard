import React, { useState } from "react";

const ImageUploadCompo = () => {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    console.log(ImagesArray);
    setFile([...file, ...ImagesArray]);
    console.log("file", file);
  }

//   function upload(e) {
//     e.preventDefault();
//     console.log(file);
//   }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }

  return (
    <form>
      <div className="form-group preview image-upload-img-cls-prev">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <ul>
                  <li>
                    <div key={item}>
                        <img src={item} alt="" />
                        <button className="image-upload-img-delet" type="button" onClick={() => deleteFile(index)}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                  </li>
              </ul>
            );
          })}
      </div>

      <div className="form-group image-upload-img-cls">
        <span class="label">
          <p><i class="fas fa-upload"></i></p>
          Upload File
        </span>

        <input
          id="upload-cls"
          type="file"
          disabled={file.length === 6}
          className="form-control"
          onChange={uploadSingleFile}
          multiple
        />
      </div>
      {/* <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={upload}
      >
        Upload
      </button> */}
    </form>
  );
};

export default ImageUploadCompo;