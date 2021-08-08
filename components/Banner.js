import Link from "next/link";
import styles from "../styles/Banner.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Banner = () => {
  return (
    <div className={styles.bgBanner}>
      <div className={styles.colXs}>
        <h3 className={styles.title}>We&quot;re in Beta. Get your invite today!</h3>
      </div>
      <div className={styles.colMd}>
        <Link href="/features">
          <a className={styles.link}>
            get an invite <ArrowRightAltIcon className="arrow-icon light"/>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
