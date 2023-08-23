import AverageCommission from './AverageCommission';
import AverageCount from './AverageCount';
import Cashout from './Cashout';
import Commission from './Commission';
import Comparative from './Comparative';
import Count from './Count';
import Customers from './Customers';
import classes from './DashBoard.module.css';
import Inflows from './Inflows';
import Navbar from './Navbar';
import POS from './POS';
import Savings from './Savings';
import Status from './Status';
import Transactions from './Transactions';
import Transfers from './Transfers';
import Wallet from './Wallet';
import home from '../Assets/home-2.png';
import icon from '../Assets/Icon.png';
import category from '../Assets/category-2.png';
import strongbox from '../Assets/strongbox.png';
import shop from '../Assets/shop.png';
import cube from '../Assets/3dcube.png';
import cardEdit from '../Assets/card-edit.png';
import cards from '../Assets/cards.png';
import medal from '../Assets/medal-star.png';
import security from '../Assets/security-user.png';
import radar from '../Assets/radar.png';

const DashBoard=()=>{
    return(
        <div className={classes.container}>
            <div className={classes.menu}>
                <div className={classes.menudiv}>
                    <h1>Paybox</h1>
                    <p>by LibertyPay</p>
                </div>
                <div className={classes.menudiv}>
                    <div className={classes["menu-section"]}>
                        <img src={home} alt='home'/>
                        <p>Home</p>
                    </div>
                    <div className={classes["menu-section"]}>
                        <img src={category} alt='home'/>
                        <p>Analytics Dashboard</p>
                    </div>
                </div>
                <div className={classes.menudiv}>
                    <div className={classes["menu-cover"]}>
                        <div className={classes["menu-section"]}>
                            <img src={strongbox} alt='home'/>
                            <p>Personal</p>
                        </div>
                        <img src={icon} alt='home'/>
                    </div>
                    <div className={classes["menu-cover"]}>
                        <div className={classes["menu-section"]}>
                            <img src={shop} alt='home'/>
                            <p>Sale Hub</p>
                        </div>
                        <img src={icon} alt='home'/>
                    </div>
                    <div className={classes["menu-cover"]}>
                        <div className={classes["menu-section"]}>
                            <img src={cube} alt='home'/>
                            <p>Talent management</p>
                        </div>
                        <img src={icon} alt='home'/>
                    </div>
                    <div className={classes["menu-cover"]}>
                        <div className={classes["menu-section"]}>
                            <img src={cardEdit} alt='home'/>
                            <p>Spend management</p>
                        </div>
                        <img src={icon} alt='home'/>
                    </div>
                    <div className={classes["menu-section"]}>
                        <img src={cards} alt='home'/>
                        <p>Cards</p>
                    </div>
                </div>
                <div className={classes.menudiv}>
                    <div className={classes["menu-section"]}>
                        <img src={medal} alt='home'/>
                        <p>Leaderboard</p>
                    </div>
                    <div className={classes["menu-section"]}>
                        <img src={security} alt='home'/>
                        <p>Profile & Settings</p>
                    </div>
                    <div className={classes["menu-cover"]}>
                        <div className={classes["menu-section"]}>
                            <img src={radar} alt='home'/>
                            <p>Bank performance</p>
                        </div>
                        <img src={icon} alt='home'/>
                    </div>
                </div>
            </div>
            <div className={classes.cover}>
                <div className={classes.nav2}><Navbar/></div>
                <div className={classes.over}>
                    <Wallet/>
                    <Savings/>
                    <Customers/>
                    <POS/>
                    <Transfers/>
                    <Inflows/>
                    <Transactions/>
                    <Count/>
                    <Cashout/>
                    <Status/>
                    <AverageCount/>
                    <Commission/>
                    <AverageCommission/>
                    <div className={classes.end}><Comparative/></div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;