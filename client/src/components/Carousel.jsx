import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarouselLoader() {
  const images = [
    "https://res.cloudinary.com/dmszzb7zv/image/upload/v1718383278/farm-farmers-water-drops-rice-wallpaper-preview_3_piwsbg.jpg",
    "https://res.cloudinary.com/dmszzb7zv/image/upload/c_scale,h_496,w_1916/farmers-7457046_1280_assoz9.jpg",
    "https://res.cloudinary.com/dmszzb7zv/image/upload/c_scale,h_496,w_1916/e_improve:outdoor:100/e_pixelate:1/nqsqohpu3dzgysic4px1.jpg",
    "https://res.cloudinary.com/dmszzb7zv/image/upload/c_scale,h_496,w_1916/plough-4659016_1280_gx9zzj.jpg",
    "https://res.cloudinary.com/dmszzb7zv/image/upload/v1718383278/farm-farmers-water-drops-rice-wallpaper-preview_3_piwsbg.jpg",
    "https://res.cloudinary.com/dmszzb7zv/image/upload/c_scale,h_496,w_1916/farmers-7457046_1280_assoz9.jpg",
    "https://res.cloudinary.com/dmszzb7zv/image/upload/c_scale,h_496,w_1916/e_improve:outdoor:100/e_pixelate:1/nqsqohpu3dzgysic4px1.jpg",
    "https://res.cloudinary.com/dmszzb7zv/image/upload/c_scale,h_496,w_1916/plough-4659016_1280_gx9zzj.jpg",
  ];
  return (
    <Carousel
      axis="horizontal"
      autoPlay={true}
      interval={4000}
      infiniteLoop={true}
      transitionTime={40}
      showThumbs={false}
      showStatus={false}
    >
      {images.map((image) => {
        return <img src={image} />;
      })}
    </Carousel>
  );
}

export default CarouselLoader;
