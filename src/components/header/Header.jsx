import React from "react";
import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import reactLogo from '../../assets/images/react.svg'

const Header = () =>{
    return(
        <header>
            <div className=" container">
                <div>
                    <img src={logo} alt="logo" 
                    className={classes.logo} />
                </div>
                <div className="textRight">
                    <img src={reactLogo} alt="React"
                     className={classes.reactLogo} />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    )
}
export default Header