import css from "./LoadMoreBtn.module.css";

interface Props {
  onLoadMore: (searchQuery: string | undefined) => void;
  searchQuery?: string | null;
}
const LoadMoreBtn: React.FC<Props> = ({ onLoadMore, searchQuery }) => {
  const loadMore = () => {
    onLoadMore(searchQuery !== null ? searchQuery : undefined);
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
