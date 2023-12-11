
import classes from './Footer.module.scss';

const Footer = () => {


    return (
        <footer className={classes.footer}>
          <div className={classes.newsletter}>
            <h2>Join Our Newsletter</h2>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridicul mus.
Nam luctus commodo urna, et pharetra iure reprehenderit .</p>
            <div className={classes.form}>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          
          <div className={classes.columns}>
            <div className={classes.column}>
              <h3>About Us</h3>
              <ul>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className={classes.column}>
              <h3>Programs</h3>
              <ul>
                <li><a href="#">Program 1</a></li>
                <li><a href="#">Program 2</a></li>
                <li><a href="#">Program 3</a></li>
              </ul>
            </div>
            <div className={classes.column}>
              <h3>Courses</h3>
              <ul>
                <li><a href="#">Course 1</a></li>
                <li><a href="#">Course 2</a></li>
                <li><a href="#">Course 3</a></li>
              </ul>
            </div>

            <div className={classes.column}>
              <h3>Courses</h3>
              <ul>
                <li><a href="#">Course 1</a></li>
                <li><a href="#">Course 2</a></li>
                <li><a href="#">Course 3</a></li>
              </ul>
            </div>
            {/* Add more columns as needed */}
          </div>
        </footer>
      );
}

export default Footer