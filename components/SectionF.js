import Image from "next/image";
import imgOne from "../public/icons/devices.png";
import imgTwo from "../public/icons/dashboard.png";
import imgThree from "../public/icons/copy.png";
import checkbox from "../public/icons/checkbox.png";
import chart from "../public/icons/chart.png";
import grid from "../public/icons/grid.png";
import styles from "../styles/Services.module.css";

const SectionF = () => {
  return (
    <section className={styles.containerService}>
      <div className={styles.colMd}>
        <div className={styles.icons}>
          <Image src={imgOne} alt="" />
        </div>
        <h2>100% Responsive</h2>
        <p>
          No matter which the device you’re on, our site is fully responsive and
          sotries look beatiful on any screen
        </p>
      </div>
      <div className={styles.colMd}>
        <div className={styles.icons}>
          <Image src={imgTwo} alt="" />
        </div>
        <h2>No Photo Upload Limit</h2>
        <p>
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>
      <div className={styles.colMd}>
        <div className={styles.icons}>
          <Image src={imgThree} alt="" />
        </div>
        <h2>Available to Embed</h2>
        <p>
          Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube
          videos, Google Maps, and More.
        </p>
      </div>
      <div className={styles.colMd}>
        <div className={styles.icons}>
          <Image src={checkbox} alt="" />
        </div>
        <h2>Custom Domain</h2>
        <p>
          With Photosnap subscriptions you can host your stories on your own
          domain. You can also remove our branding!
        </p>
      </div>
      <div className={styles.colMd}>
        <div className={styles.icons}>
          <Image src={chart} alt="" />
        </div>
        <h2>Boost Your Exposure</h2>
        <p>
          Users that viewed your story or gallery can easily get notifed of new
          and featured stories with our built in mailing list.
        </p>
      </div>
      <div className={styles.colMd}>
        <div className={styles.icons}>
          <Image src={grid} alt="" />
        </div>
        <h2>Drag & Drop Image</h2>
        <p>
          Easily drag and drop your image and get beautiful shots everytime. No
          over the top tooling to add friction to creating stories.
        </p>
      </div>
    </section>
  );
};

export default SectionF;
