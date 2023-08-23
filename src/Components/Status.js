import classes from "./Transfers.module.css";
import union from "../Assets/Union.png";
import styles from "./Status.module.css";
import red from "../Assets/Red.png";
import green from "../Assets/Green.png";

const Status = () => {
  const numberSeperator = (num) => {
    return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

const content = [
    {
        color: green,
        date: "Successful",
        amount: 422,
    },
    {
        color: red,
        date: "Failed",
        amount: 18,
    }
  ];

  return (
    <div className={classes.container}>
      <div className={classes.cover}>
        <div className={classes.transfer}>
          <p>Transactions status</p>
          <div>
            <span>More</span>
            <span>
              <img src={union} alt="union" />
            </span>
          </div>
        </div>
        <div className={classes.details}>
          {content.map((con) => (
            <div>
              <p><img className={styles.image} src={con.color} alt="color"/>{con.date}</p>
              <p className={styles.amount}>{numberSeperator(con.amount)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
