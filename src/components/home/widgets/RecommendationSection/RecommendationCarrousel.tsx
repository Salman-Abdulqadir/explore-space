import { Carousel } from "antd";

import carrouselImage1 from "../../../../assets/carrousel-1.jpg";
import carrouselImage2 from "../../../../assets/carrousel-2.jpg";
import carrouselImage3 from "../../../../assets/carrousel-3.jpg";
import carrouselImage4 from "../../../../assets/carrousel-4.jpg";
import carrouselImage5 from "../../../../assets/carrousel-5.jpg";
import carrouselImage6 from "../../../../assets/carrousel-6.jpg";
import carrouselImage7 from "../../../../assets/carrousel-7.jpg";

const RecommendationCarrousel = () => {
  const images: string[] = [
    carrouselImage1,
    carrouselImage2,
    carrouselImage3,
    carrouselImage4,
    carrouselImage5,
    carrouselImage6,
    carrouselImage7,
  ];
  return (
    <div className="recoomendation-section-carrousels">
      <Carousel
        effect="scrollx"
        autoplay
        className="recoomendation-section-carrousel-1"
      >
        {images.slice(0, 2).map((image, index) => (
          <img
            className="recoomendation-section-carrousel-image"
            src={image}
            key={`${image} - ${index}`}
            alt={image}
          />
        ))}
      </Carousel>
      <Carousel
        effect="scrollx"
        autoplay
        className="recoomendation-section-carrousel-2"
      >
        {images.slice(2, 4).map((image, index) => (
          <img
            className="recoomendation-section-carrousel-image"
            src={image}
            key={`${image} - ${index}`}
            alt={image}
          />
        ))}
      </Carousel>
      <Carousel
        effect="scrollx"
        autoplay
        className="recoomendation-section-carrousel-3"
      >
        {images.slice(4, 7).map((image, index) => (
          <img
            className="recoomendation-section-carrousel-image"
            src={image}
            key={`${image} - ${index}`}
            alt={image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default RecommendationCarrousel;
