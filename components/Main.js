import Link from "next/link";
import styles from "../styles/Main.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Main = () => {
  return (
    <>
      <section className={styles.sectionOne}>
        <div className={styles.contentOne}>
          <h1>
            CREATE AND
            <br /> SHARE YOUR
            <br /> PHOTO STORIES
          </h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <Link href="/">
            <a className={styles.btnInvite}>
              get an invite <ArrowRightAltIcon className="arrow-icon light"/>
            </a>
          </Link>
        </div>
        <div className={styles.imgOneSection}></div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.contentTwo}>
          <h1>
            Beautiful
            <br /> Stories
            <br /> Every Time
          </h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <Link href="/">
            <a className={styles.btnInvite}>
              get an invite <ArrowRightAltIcon className="arrow-icon dark"/>
            </a>
          </Link>
        </div>
        <div className={styles.imgTwoSection}></div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.contentTwo}>
          <h1>
            Designed for
            <br /> Everyone
          </h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <Link href="/">
            <a className={styles.btnInvite}>
              get an invite <ArrowRightAltIcon className="arrow-icon dark"/>
            </a>
          </Link>
        </div>
        <div className={styles.imgThreeSection}></div>
      </section>
    </>
  );
};

export default Main;
