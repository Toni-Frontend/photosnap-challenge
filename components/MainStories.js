import Link from "next/link";
import { dataCards } from "../data/dataMain";
import styles from "../styles/Mainstorie.module.css";
import Card from "./Card";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const MainStories = () => {
  return (
    <>
      <div className={styles.containerStorie}>
        <div className={styles.content}>
          <h5>LAST MONTH’S FEATURED STORY</h5>
          <h2>HAZY FULL MOON OF APPALACHIA</h2>
          <p className={styles.date}>March 2nd {new Date().getFullYear()}</p>
          <p className={styles.description}>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called &quot;mountains,&quot; especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <Link href="/stories">
            <a>
              Read The Story <ArrowRightAltIcon className="arrow-icon light"/>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.containerCards}>
        {dataCards.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default MainStories;
