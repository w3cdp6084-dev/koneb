import React, { useState } from 'react';
import styles from '../styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 const toggleMenu = () => {
   setMenuOpen(!menuOpen);
 };

 return (
   <div className={`${styles['menuWrapper']} ${menuOpen ? styles.open : ''}`}>
     <div className={styles.menu}>
       <div className={styles.menuContent}>
        <div className={styles.menuContentLayout}>
          <div className={styles.menuLinksWrapper}>
            <div className={styles.marginBottomMenuLink}>
              <div className={styles.textSizeMenu}>
                <Link href="/" aria-current="page" className={`${styles.textColorBlack} ${styles.linkOpacity} ${styles.Wcurrent}`}>Projekte</Link>
              </div>
            </div>
            <div className={styles.marginBottomMenuLink}>
              <div className={styles.textSizeMenu}>
                <a href="/studio" className={`${styles.textColorBlack} ${styles.linkOpacity}`}>Studio</a>
              </div>
            </div>
            <div className={`${styles.textSizeMenu}`}>
              <div className={`${styles.hideMobileLandscape}`}>
                <div className={`${styles.textColorBlack}`}>Sag <Link href="#" className={`${styles.clipboardLinkMenu}`} data-ol-has-click-handler="">hey@<br />sonderform.com</Link></div>
              </div>
              <div className={`${styles.showMobileLandscape}`}>
                <div className={`${styles.textColorBlack}`}>Sag <Link href="mailto:hey@sonderform.com?subject=Hey%20Sonderform!" className={`${styles.clipboardLinkMenu}`} data-ol-has-click-handler="">hey@<br />sonderform.com</Link></div>
              </div>
            </div>
          </div>
          <div className={`${styles.linkHorizontalWrapper} ${styles.legal}`}>
            <div className={`${styles.marginRightSmall}`}><Link href="/impressum" className={`${styles.textColorBlack} ${styles.linkOpacity}`}>Impressum</Link></div>
            <Link href="/datenschutz" className={`${styles.textColorBlack} ${styles.linkOpacity}`}>Datenschutz</Link>
          </div>
        </div>

       </div>
     </div>
     <div className={`${styles.menuButton}`} onClick={toggleMenu}>
       <div className={`${styles.crossWrapper}`}>
         <div className={`${styles.cross}`}>
           <svg width="auto" height="auto" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="20" width="2" height="41" fill="currentColor"></rect>
             <rect x="41" y="20" width="2" height="41" transform="rotate(90 41 20)" fill="currentColor"></rect>
           </svg>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Menu;
