import classes from './Comparative.module.css';
import blue from '../Assets/Blue.png';
import yellow from '../Assets/Yellow.png';
import grey from '../Assets/Grey.png';

const Comparative=()=>{
    const numberSeperator = (num) => {
        return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    
    return(
        <div className={classes.container}>
            <div>
                <div className={classes.top}>
                    <p>Transaction Comparative</p>
                    <p><img src={blue} alt='color'/>Send money</p>
                    <p>&#x20A6; {numberSeperator(105000000)}</p>
                </div>
                <div className={classes.mid}>
                    <div>
                        <p><img src={yellow} alt='color'/>Cashout</p>
                        <p>&#x20A6; {numberSeperator(1200000)}</p>
                    </div>
                    <div>
                        <p><img src={grey} alt='color'/>Utilities and Bills</p>
                        <p>&#x20A6; {numberSeperator(4200000)}</p>
                    </div>
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.chart}>
                    <div></div>
                    <div>76%</div>
                    <div>12%</div>
                    <div>12%</div>
                </div>
            </div>
        </div>
    )
}

export default Comparative