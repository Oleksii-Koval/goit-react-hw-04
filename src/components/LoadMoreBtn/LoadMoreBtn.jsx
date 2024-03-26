import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMoreBtn }) => {
  return (
    <button className={css.button} onClick={onLoadMoreBtn} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
