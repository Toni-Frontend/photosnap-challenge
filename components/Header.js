import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  const animationMenu = () => {
    document.querySelector(".Header_btnMenu__2fBIU").classList.toggle("open");
    document
      .querySelector(".Header_navlinkMenu__1LPFB")
      .classList.toggle("open");
  };

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.boxLogo}>
          <Link href="/">
            <a>PhotoSnap</a>
          </Link>
        </div>
        <button onClick={animationMenu} className={styles.btnMenu}>
          <div></div>
        </button>
        <ul className={styles.navlinkMenu}>
          <li>
            <Link href="/stories">
              <a>Stories</a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <div
            className={styles.lineMovil}
            style={{
              width: `80%`,
              height: `1px`,
              margin: `1rem 0`,
              backgroundColor: `#979797`,
            }}
          ></div>
          <li>
            <Link href="/">
              <a className={styles.linkBtn}>get an invite</a>
            </Link>
          </li>
        </ul>
        <div className={styles.btnInvite}>
          <Link href="/">
            <a className={styles.linkBtn}>get an invite</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
