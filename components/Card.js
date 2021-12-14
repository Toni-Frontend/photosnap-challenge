import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import styles from "../styles/Card.module.css";

const Card = ({ title, creator, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          loading="eager"
          priority
          layout="fill"
          src={img}
          alt="Image provider"
        />
      </div>
      <div className={styles.contentText}>
        <h3>{title}</h3>
        <p>{creator}</p>
        <div className={styles.divLink}>
          <Link href="/">
            <a>Read Story</a>
          </Link>
          <ArrowRightAltIcon className="arrow-icon light" />
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};
