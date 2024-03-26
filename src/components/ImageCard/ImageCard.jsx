import css from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ image: { urls, alt_description } }) => {
  return (
    <div>
      <img className={css.image} src={urls.small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
