import React from 'react';

import styles from './footer.less';

const Footer = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};

export default Footer;
