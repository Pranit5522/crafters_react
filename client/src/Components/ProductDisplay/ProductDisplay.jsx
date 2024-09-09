import React, { useState } from 'react';
import './ProductDisplay.css';
import useImage from "../useImage";

const ProductDisplay = ({ productId}) => {

  console.log(productId);
  const imageFiles = Array.from({ length: 5 }, (_, i) => `./Assets/product_images/${productId}_${i + 1}.jpg`);
  const [selectedImage, setSelectedImage] = useState(imageFiles[0]);

  return (
    <div className="product-slider">
      <div className="product-container">
        <ImageLoader fileName={selectedImage} useImage={useImage} alt="Large" className="large-image" />
      </div>

      <div className="small-images">
        {imageFiles.map((fileName, index) => (
          <div className='img-container' key={fileName}>
          <ImageLoader
              fileName={fileName}
              useImage={useImage}
              alt={`Thumbnail ${index}`}
              className={`small-image ${selectedImage === fileName ? 'active' : ''}`}
              onClick={() => setSelectedImage(fileName)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageLoader = ({ fileName, useImage, alt, className, onClick }) => {
  const { loading, error, image } = useImage(fileName);

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  if (error) {
    return <div className={className}>Error loading image</div>;
  }

  return <img src={image} alt={alt} className={className} onClick={onClick} />;
};

export default ProductDisplay;
