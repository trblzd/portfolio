import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Carousel = ({ images, intervalTime = 5000 }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, intervalTime);

    return () => clearInterval(interval); 
  }, [images, intervalTime]);

  return (
    <div className="carousel">
      <img src={currentImage} alt="Imagem do carrossel" />
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  intervalTime: PropTypes.number,
};

export default Carousel;
