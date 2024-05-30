import css from "./ImageCard.module.css";
export interface Image {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  description: string | null;
  slug: string;
}

export interface Props {
  pic: Image;
  openModal: (url: string) => void;
  description: string | null;
}
const ImageCard: React.FC<Props> = ({ pic, openModal }) => {
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
