import classes from "./Transfers.module.css";
import union from "../Assets/Union.png";

const Commission = () => {
  const numberSeperator = (num) => {
    return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

const content = [
    {
      date: "POS commission",
      amount: 87000,
    },
    {
      date: "Lotto commission",
      amount: 102000,
    }
  ];

  return (
    <div className={classes.container}>
      <div className={classes.cover}>
        <div className={classes.transfer}>
          <p>Total commission</p>
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

export default Commission
;
