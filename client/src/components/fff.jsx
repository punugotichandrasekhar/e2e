import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/upload", // Ensure this matches your server's URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="file-upload-form">
      <label htmlFor="file">Upload File:</label>
      <input type="file" name="file" onChange={handleFileChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FileUploadForm;
