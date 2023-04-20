import Carousel from "react-bootstrap/Carousel";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const CardPopover = ({ images, title, children }) => {
  const imagesElements = images.map((image) => (
    <Carousel.Item key={image}>
      <img className="d-block w-100 m-3" src={image} alt={title} />
    </Carousel.Item>
  ));

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={
        <Popover className="bg-primary">
          <Popover.Header as="h3" className="fs-2">
            {title}
          </Popover.Header>
          <Popover.Body>
            <Carousel variant="dark">{imagesElements}</Carousel>
          </Popover.Body>
        </Popover>
      }
    >
      {children}
    </OverlayTrigger>
  );
};

export default CardPopover;
