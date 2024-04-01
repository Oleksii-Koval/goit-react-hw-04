import css from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ image: { urls, alt_description }, onClick }) => {
  return (
    <div>
      <img
        className={css.image}
        src={urls.small}
        alt={alt_description}
        onClick={() => onClick()}
      />
    </div>
  );
};

export default ImageCard;
