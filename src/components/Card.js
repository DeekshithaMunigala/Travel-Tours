const Card = (props) => {
  const { id, image, bestPlace, description, tourPrice } = props.info;

  return (
    <div>
      <article className="singleTour">
        <img src={image} alt="" />
        <span className="tour-price">{tourPrice}</span>
        <div className="tour-info">
          <h5>{bestPlace}</h5>

          <p>{description}</p>

          <button className="del-btn">Not Interested</button>
        </div>
      </article>
    </div>
  );
};

export default Card;
