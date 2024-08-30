import React from 'react';
import styles from "./Navigation.module.css";

function Navigation() {
  console.log(styles);
  
  return (
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/images/logo-img.jpg" alt="logo"/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
  )
}

export default Navigation

