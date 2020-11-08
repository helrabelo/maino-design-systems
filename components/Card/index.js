import React from 'react';

import styles from './card.less';

const Card = (props) => {
  let {className, children, otherProps} = props;

  return <div className={styles.card + ' ' + className} {...otherProps}>{children}</div>
}

export default Card;