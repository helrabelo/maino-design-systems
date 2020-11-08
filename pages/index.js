import React from 'react';
import Head from 'next/head';

import styles from '../styles/index.less';

import Grid from '../components/GridLayout';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>
        <Sidebar />
        <Navbar />
        <Container className={styles.main} />
        <Footer/>
      </Grid>
    </div>
  );
}
