import CardPopover from "./CardPopover/CardPopover";
import { Card as BSCard } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Card = (props) => {
  return (
    <BSCard
      style={{
        width: "30rem",
        height: "48rem",
        padding: "1rem",
        backgroundColor: `${props.bgColor}`,
      }}
      className="rounded ms-2 mb-5 border border-white border-5 rounded-2"
    >
      <BSCard.Img
        variant="top"
        src={props.thumbnail}
        alt="random product"
        className="d-block h-50 mh-50"
      />
      <BSCard.Body className="h-25">
        <BSCard.Title>{props.title}</BSCard.Title>
        <BSCard.Text className="text-truncate">{props.description}</BSCard.Text>
        <CardPopover id={props.id} images={props.images} title={props.category}>
          <BSCard.Link role="button">{props.category}</BSCard.Link>
        </CardPopover>
      </BSCard.Body>
      <BSCard.Footer className="text-muted d-flex justify-content-between">
        <div>
          <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
          <AiOutlineStar />
        </div>
        <div>${props.price}</div>
      </BSCard.Footer>
    </BSCard>
  );
};

export default Card;
