import Link from "next/link";
import styles from "../styles/Main.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const MainFeature = () => {
  return (
    <section className={styles.sectionOne}>
      <div className={styles.contentOne}>
        <h1>Features</h1>
        <p>
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
        <Link href="/features">
          <a className={styles.btnInvite}>
            view features
          </a>
        </Link>
      </div>
      <div className={styles.imgFourSection}></div>
    </section>
  );
};

export default MainFeature;
