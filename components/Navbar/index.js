import React from 'react';

import styles from './navbar.less';

const Navbar = ({ children }) => {
  return <div className={styles.navbar}>{children}</div>;
};

export default Navbar;
