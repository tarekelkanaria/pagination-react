import { useState } from "react";
import { ProductDetails } from "../../../types/products";
import RatingStars from "../../UI/RatingStars";
import ProductImages from "../ProductImages";

import classes from "./ProductItem.module.css";

const ProductItem: React.FC<ProductDetails> = ({
  title,
  description,
  price,
  rating,
  category,
  thumbnail,
  images,
  productBG,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen((prevState) => !prevState);
  };

  return (
    <section className={classes.wrapper} style={{ backgroundColor: productBG }}>
      <img
        src={thumbnail}
        alt={title}
        className={classes["product-img"]}
        loading="lazy"
      />
      <h2 className={classes.title}>{title}</h2>
      <div className={classes["category-feild"]}>
        <button onClick={togglePopup}>{category}</button>
        {isPopupOpen && (
          <ProductImages
            imagesList={images}
            close={togglePopup}
            imageAlt={title}
          />
        )}
      </div>
      <div className={classes.text}>
        <p className="break-words line-clamp-4">{description}</p>
      </div>
      <div className={classes.info}>
        <RatingStars ratingNumber={rating} />
        <p>${price}</p>
      </div>
    </section>
  );
};

export default ProductItem;
