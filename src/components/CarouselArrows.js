const CarouselArrows = (props) => {
  const arrowStyleLeft = {
    zIndex: 995,
    position: "absolute",
    height: "60px",
    width: "60px",
    top: "50%",
    left: 0
  };

  const arrowStyleRight = {
    zIndex: 995,
    position: "absolute",
    height: "60px",
    width: "60px",
    top: "50%",
    right: 0
  };

  return (
    <>
      <img
        src="/left.svg"
        style={arrowStyleLeft}
        onClick={() => {
          props.prev();
        }}
      />
      <img
        src="/right.svg"
        style={arrowStyleRight}
        onClick={() => {
          props.next();
        }}
      />
    </>
  );
};

export default CarouselArrows;
