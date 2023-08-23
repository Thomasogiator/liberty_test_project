import classes from "./Transfers.module.css";
import union from "../Assets/Union.png";

const AverageCount = () => {
  const numberSeperator = (num) => {
    return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={classes.container}>
      <div className={classes.cover}>
        <div className={classes.transfer}>
          <p>Average transaction Count</p>
          <div>
            <span>More</span>
            <span>
              <img src={union} alt="union" />
            </span>
          </div>
        </div>
        <div className={classes.details}>
            <div>
              <p>Value</p>
              <p>&#x20A6; {numberSeperator(20400)}</p>
            </div>
            <div>
              <p>Count</p>
              <p>{numberSeperator(422)}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AverageCount;
