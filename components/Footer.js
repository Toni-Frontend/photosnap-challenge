import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { links } from "../data/social";

// Icons
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.colMd}>
        <div>
          <div className={styles.logo}>
            <Link href="/">
              <a>PhotoSnap</a>
            </Link>
          </div>
          <ul className={styles.social}>
            <li>
              <Link href="/">
                <a>
                  <YouTubeIcon className={styles.fas} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <FacebookIcon className={styles.fas} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <InstagramIcon className={styles.fas} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <TwitterIcon className={styles.fas} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <ul className={styles.listLink}>
          {links.map((item) => (
            <li key={item.id}>
              <Link href="/">
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.colXs}>
        <Link href="/">
          <a>
            GET AN INVITE <ArrowRightAltIcon className="arrow-icon light"/>
          </a>
        </Link>
        <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
