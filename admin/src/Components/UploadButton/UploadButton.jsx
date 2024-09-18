import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "./UploadButton.css";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload({ files, setFiles }) {
  const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= MAX_FILE_SIZE) {
        setFiles((prevFiles) => [...prevFiles, file]); // Pass files to parent
        console.log("File added:", file);
      } else {
        alert("File is too large. Please upload files smaller than 1MB.");
      }
    }
  };

  return (
    <div>
      { 
        files.length < 10 ?
        <Button
          className='upload-button'
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload Images
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button> :
        <div>
          <Button variant="outlined" disabled startIcon={<CloudUploadIcon />}>
            Upload Images
          </Button>
          <p className='error-message'>Only 10 images per product</p>
        </div>
      }

      <div className='uploaded-files'>
        {files.length > 0 && <h4>Selected Files:</h4>}
        {files.map((file, index) => (
          <p key={index}>{file.name}</p>
        ))}
      </div>
    </div>
  );
}
