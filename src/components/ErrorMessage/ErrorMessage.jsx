import css from "../ErrorMessage/ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <b className={css.message}>
      Oops! Something went wrong! Please, reload page!
    </b>
  );
};

export default ErrorMessage;
