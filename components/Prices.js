import Link from "next/link";
import { useState } from "react";
import Switch from "@material-ui/core/Switch";
import styles from "../styles/Prices.module.css";

const Prices = () => {
  const [active, setActive] = useState({ checkedA: false });

  const { checkedA } = active;

  const handleChange = (event) => {
    setActive({ ...active, [event.target.name]: event.target.checked });
  };

  return (
    <section className={styles.sectionPrice}>
      <div className={styles.containerPrice}>
        <div className={styles.toggle_switch}>
          <span className={styles.monthly_switch_yearly}>Monthly</span>
          <div>
            <Switch
              checked={checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
          <span className={styles.monthly_switch_yearly}>Yearly</span>
        </div>
        <div className={styles.card_pricing}>
          <div className={styles.cardPrice}>
            <div>
              <h5 className={styles.typeTitle}>Basic</h5>
              <p className={styles.descriptionPrice}>
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
            </div>
            <div className={styles.colTwo}>
              {checkedA ? (
                <>
                  <p className={styles.pricing}>$190.00</p>
                  <p className={styles.pear}>per year</p>
                </>
              ) : (
                <>
                  <p className={styles.pricing}>$19.00</p>
                  <p className={styles.pear}>per month</p>
                </>
              )}
              <Link href="/pricing">
                <a className={styles.linkPrice}>Pick Plan</a>
              </Link>
            </div>
          </div>
          <div className={styles.cardPrice}>
            <div>
              <h5 className={styles.typeTitle}>Pro</h5>
              <p className={styles.descriptionPrice}>
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
            </div>
            <div className={styles.colTwo}>
              {checkedA ? (
                <>
                  <p className={styles.pricing}>$390.00</p>
                  <p className={styles.pear}>per year</p>
                </>
              ) : (
                <>
                  <p className={styles.pricing}>$39.00</p>
                  <p className={styles.pear}>per month</p>
                </>
              )}
              <Link href="/pricing">
                <a className={styles.linkPrice}>Pick Plan</a>
              </Link>
            </div>
          </div>
          <div className={styles.cardPrice}>
            <div>
              <h5 className={styles.typeTitle}>Business</h5>
              <p className={styles.descriptionPrice}>
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </p>
            </div>
            <div className={styles.colTwo}>
              {checkedA ? (
                <>
                  <p className={styles.pricing}>$990.00</p>
                  <p className={styles.pear}>per year</p>
                </>
              ) : (
                <>
                  <p className={styles.pricing}>$99.00</p>
                  <p className={styles.pear}>per month</p>
                </>
              )}
              <Link href="/pricing">
                <a className={styles.linkPrice}>Pick Plan</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
