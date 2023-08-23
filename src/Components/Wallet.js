import classes from './Wallet.module.css';
import rect1 from '../Assets/Rectangle 22630.png';
import rect2 from '../Assets/Rectangle 22627.png';
import rect3 from '../Assets/Rectangle 22628.png';
import rect4 from '../Assets/Rectangle 22631.png';
import eye from '../Assets/eye.png';

const Wallet=()=>{
    return(
        <div className={classes.container}>
            <div className={classes.cover}>
                <p>Wallet Balance</p>
                <div className={classes.amount}>
                    <span>&#x20A6; 50,000.00</span>
                    <div><img src={eye} alt='eye'/></div>
                </div>
                <div className={classes.btn}>
                    <button>Add fund</button>
                    <button> Withdraw</button>
                </div>
            </div>
            <div className={classes.images}>
                <img src={rect1} alt='rect'/>
                <img src={rect2} alt='rect'/>
                <img src={rect3} alt='rect'/>
                <img src={rect4} alt='rect'/>
            </div>
            
        </div>
    )
}

export default Wallet;