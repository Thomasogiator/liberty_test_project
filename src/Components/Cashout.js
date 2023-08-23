import classes from "./Transfers.module.css";
import union from "../Assets/Union.png";

const Cashout = () => {
  const numberSeperator = (num) => {
    return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

const content = [
    {
      date: "Today",
      amount: 1200000,
    },
    {
      date: "Yesterday",
      amount: 1200000,
    }
  ];

  return (
    <div className={classes.container}>
      <div className={classes.cover}>
        <div className={classes.transfer}>
          <p>Total cashout</p>
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
              <p>{con.date}</p>
              <p>&#x20A6; {numberSeperator(con.amount)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cashout;
