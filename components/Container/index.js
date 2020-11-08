import React from 'react';

import styles from './container.less';

const Container = (props) => {
  let {className, children, otherProps} = props;

  return <div className={styles.container + ' ' + className} {...otherProps}>{children}</div>
}

export default Container