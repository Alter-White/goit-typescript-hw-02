import css from "./ImageCard.module.css";
const ImageCard = ({ pic, openModal }) => {
  const handleClick = () => {
    openModal(pic.urls.regular);
  };
  return (
    <div className={css.cardWrapper}>
      <img
        onClick={handleClick}
        className={css.cardImage}
        src={pic.urls.small}
        alt={pic.slug}
      />
      <div className={css.descWrapper}>
        <p>
          <strong>Likes: </strong>
          {pic.likes}
        </p>
        <p>
          <strong>Description: </strong>
          {pic.description === null ? "No description" : pic.description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
