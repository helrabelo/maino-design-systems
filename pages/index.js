import React from 'react';
import Head from 'next/head';

import styles from '../styles/index.less';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Mainô - Design Systems</h1>
    </div>
  );
}
