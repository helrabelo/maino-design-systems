import React from 'react';

import styles from './grid.less';

const GridLayout = ({ children }) => {
  return <div className={styles.gridWrapper}>{children}</div>;
};

export default GridLayout;
