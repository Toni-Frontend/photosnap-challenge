import Image from "next/image";
import imgOne from "../public/icons/devices.png";
import imgTwo from "../public/icons/dashboard.png";
import imgThree from "../public/icons/copy.png";
import styles from '../styles/Services.module.css'

const Services = () => {
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
    </section>
  );
};

export default Services;
