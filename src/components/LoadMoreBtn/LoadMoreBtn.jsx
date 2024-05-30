import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore, searchQuery }) => {
  const loadMore = () => {
    onLoadMore(searchQuery);
  };
  return (
    <div className={css.btnWraper}>
      <button className={css.loadMoreBtn} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
