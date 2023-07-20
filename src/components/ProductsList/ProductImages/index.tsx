import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos, MdClear } from "react-icons/md";

import classes from "./ProductImages.module.css";

const ProductImages: React.FC<{
  imagesList: string[];
  close: () => void;
  imageAlt: string;
}> = ({ imagesList, close, imageAlt }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const imgSrc = imagesList[imgIndex];

  return (
    <article className={classes.wrapper}>
      <div className={classes.arrow}></div>
      <div className={classes.poster}>
        <button className={classes.close} onClick={close}>
          <MdClear />
        </button>
        <button
          disabled={imgIndex === 0}
          onClick={() => setImgIndex((prevImg) => prevImg - 1)}
          className={classes["back-btn"]}
        >
          <MdArrowBackIosNew />
        </button>
        <img src={imgSrc} alt={imageAlt} className={classes.image} />
        <button
          disabled={imgIndex === imagesList.length - 1}
          onClick={() => setImgIndex((prevImg) => prevImg + 1)}
          className={classes["forward-btn"]}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </article>
  );
};

export default ProductImages;
