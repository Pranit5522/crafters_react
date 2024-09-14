import React, { useState, useEffect } from 'react';
import './ProductDisplay.css';

const ProductDisplay = ({ productId}) => {

  const imageFiles = Array.from({ length: 5 }, (_, i) => `/Assets/product_images/${productId}_${i + 1}.jpg`);
  const [selectedImage, setSelectedImage] = useState(imageFiles[0]);

  useEffect(() => {
    setSelectedImage(imageFiles[0]);
  }, [productId]);

  return (
    <div className="product-slider">
      <div className="product-container">
        <img 
            src={selectedImage} 
            alt= "Large"
            className="large-image"
          />
      </div>

      <div className="small-images">
        {imageFiles.map((fileName, index) => (
          <div className='img-container' key={fileName}>
          
          <img 
            src={fileName} 
            alt= {`Thumbnail ${index}`} 
            className={`small-image ${selectedImage === fileName ? 'active' : ''}`} 
            onClick={() => setSelectedImage(fileName)} 
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;