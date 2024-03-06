import styles from "./index.module.css";

const AlertBox = ({ content }: { content: string }) => {
  return <div className={styles.alert_container}>{content}</div>;
};

export default AlertBox;
