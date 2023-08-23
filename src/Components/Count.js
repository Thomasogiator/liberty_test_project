import classes from "./Transfers.module.css";
import union from "../Assets/Union.png";

const Count = () => {
  const numberSeperator = (num) => {
    return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

const content = [
    {
      date: "Today",
      amount: 200,
    },
    {
      date: "Yesterday",
      amount: 210,
    },
    {
      date: "This week",
      amount: 1200,
    },
    {
      date: "Last week",
      amount: 2400,
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.cover}>
        <div className={classes.transfer}>
          <p>Transactions count</p>
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
              <p>{numberSeperator(con.amount)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Count;
