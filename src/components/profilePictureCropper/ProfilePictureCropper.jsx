import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  textAlign: "center",
}));

const ProfilePictureCropper = () => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);

  const selectImage = (file) => {
    setSrc(URL.createObjectURL(file));
  };

  const cropImageNow = () => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // Converting to base64
    const base64Image = canvas.toDataURL("image/jpeg");
    setOutput(base64Image);
  };

  return (
    <StyledContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              selectImage(e.target.files[0]);
            }}
          />
        </Grid>
        {src && (
          <>
            <Grid item xs={12}>
              <ReactCrop
                src={src}
                onImageLoaded={setImage}
                crop={crop}
                onChange={setCrop}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={cropImageNow}>
                Crop
              </Button>
            </Grid>
            {output && (
              <Grid item xs={12}>
                <img src={output} alt="Cropped Image" />
              </Grid>
            )}
          </>
        )}
      </Grid>
    </StyledContainer>
  );
};

export default ProfilePictureCropper;
