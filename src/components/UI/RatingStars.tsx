import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import classes from "./RatingStars.module.css";

const RatingStars: React.FC<{ ratingNumber: number }> = ({ ratingNumber }) => {
  const filledStars = Math.round(ratingNumber);
  const ratingFilledStars = [];
  const ratingOutlineStars = [];
  for (let i = 0; i < filledStars; i++) {
    ratingFilledStars.push(
      <AiFillStar key={i.toString()} className={classes["filled-star"]} />
    );
  }
  for (let j = 0; j < 5 - filledStars; j++) {
    ratingOutlineStars.push(
      <AiOutlineStar key={j.toString()} className={classes["outline-star"]} />
    );
  }

  return (
    <p className={classes.rating}>
      {ratingFilledStars}
      {ratingOutlineStars}
    </p>
  );
};

export default RatingStars;
