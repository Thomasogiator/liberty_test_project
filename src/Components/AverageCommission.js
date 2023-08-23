import classes from "./Transfers.module.css";
import union from "../Assets/Union.png";

const AverageCommission = () => {
  const numberSeperator = (num) => {
    return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

const content = [
    {
      date: "POS commission",
      amount: 500,
    },
    {
      date: "Lotto commission",
      amount: 200,
    }
  ];

  return (
    <div className={classes.container}>
      <div className={classes.cover}>
        <div className={classes.transfer}>
          <p>Average commission per transaction</p>
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

export default AverageCommission;
