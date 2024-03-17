import { ImageCard } from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <div>
              <ImageCard image={image} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
