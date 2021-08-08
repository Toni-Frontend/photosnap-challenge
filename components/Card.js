import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Card = ({ title, creator, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image loading="eager" layout="fill" src={img} alt="" />
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
