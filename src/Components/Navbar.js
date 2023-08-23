import classes from './Navbar.module.css';
import profilePic from '../Assets/Ellipse 824.png';
import bell from '../Assets/notification-bing.png';
import drop from '../Assets/👑 Edit Color.png';

const Navbar=()=>{
    return(
        <nav>
            <div className={classes.container}>
                <h1>Analytics dashboard</h1>
                <button>Menu</button>
                <div className={classes.right}>
                    <div className={classes.bell}><img src={bell} alt='notification'/></div>
                    <div className={classes.profile}>
                        <img src={profilePic} alt='profile'/>
                        <div className={classes.details}>
                            <p>Dexter Olaniyi</p>
                            <div>
                                <span>Dexterola@gmail.com</span><img src={drop} alt='dropdown'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;