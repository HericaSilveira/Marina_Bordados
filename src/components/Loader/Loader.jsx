import "./styles.scss";

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};
