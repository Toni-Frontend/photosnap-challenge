import styles from "../styles/TablePrice.module.css";
import CheckIcon from "@material-ui/icons/Check";

const ComparePrice = () => {
  let featuresMobile = [
    { p: "UNLIMITED STORY POSTING", basic: true, pro: true, business: true },
    { p: "UNLIMITED PHOTO UPLOAD", basic: true, pro: true, business: true },
    { p: "EMBEDDING CUSTOM CONTENT", basic: false, pro: true, business: true },
    { p: "CUSTOMIZE METADATA", basic: false, pro: true, business: true },
    { p: "ADVANCED METRICS", basic: false, pro: false, business: true },
    { p: "PHOTO DOWNLOADS", basic: false, pro: false, business: true },
    { p: "SEARCH ENGINE INDEXING", basic: false, pro: false, business: true },
    { p: "CUSTOM ANALYTICS", basic: false, pro: false, business: true },
  ];

  return (
    <div className={styles.containerTable}>
      <h3 className={styles.h3}>Compare</h3>
      <div className={styles.desktopTable}>
        <div className={styles.headTable}>
          <p className={styles.titleFeature}>The Features</p>
          <p className={styles.titleFeature}>Basic</p>
          <p className={styles.titleFeature}>Pro</p>
          <p className={styles.titleFeature}>Business</p>
        </div>
        <div className={styles.lineDark}></div>
        {featuresMobile.map((item, index) => (
          <div key={index} className={styles.itemDesktop}>
            <p className={styles.titleItem}>{item.p}</p>
            <span>
              {item.basic === true ? (
                <CheckIcon className={styles.fas} />
              ) : null}
            </span>
            <span>
              {item.pro ? <CheckIcon className={styles.fas} /> : null}
            </span>
            <span>
              {item.business ? <CheckIcon className={styles.fas} /> : null}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.mobileTable}>
        <p className={styles.titleFeature}>The Features</p>
        <div className={styles.lineDark}></div>
        {featuresMobile.map((item, index) => (
          <div key={index} className={styles.itemTable}>
            <p className={styles.titleItem}>{item.p}</p>
            <div className={styles.colTable}>
              <div>
                <p className={styles.typetitle}>Basic</p>
                {item.basic ? <CheckIcon className={styles.fas} /> : null}
              </div>
              <div>
                <p className={styles.typetitle}>Pro</p>
                {item.pro ? <CheckIcon className={styles.fas} /> : null}
              </div>
              <div>
                <p className={styles.typetitle}>Business</p>
                {item.business ? <CheckIcon className={styles.fas} /> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePrice;
