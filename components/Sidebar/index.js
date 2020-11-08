import React from 'react';

import styles from './sidebar.less';

const Sidebar = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>;
};

export default Sidebar;
