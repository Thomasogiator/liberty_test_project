import classes from './Savings.module.css';
import arrow1 from '../Assets/Right (1).png';
import arrow2 from '../Assets/Right (2).png';

const Customers=()=>{
    return(
        <div className={classes.container}>
            <div className={classes.cover}>
                <p>Total customers</p>
                <p>919</p>
            </div>
            <div className={classes.details}>
                <p>View details</p><span><img className={classes.image} src={arrow1} alt='arrow'/><img src={arrow2} alt='arrow'/></span>
            </div>
        </div>
    )
}

export default Customers;