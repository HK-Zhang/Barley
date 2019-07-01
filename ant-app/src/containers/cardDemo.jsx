import React, { Component } from 'react';
import styles from './layoutDemo.module.scss';
import BasicCard from '../components/card/basicCard';
import NoborderCard from '../components/card/noborderCard';
import SimpleCard from '../components/card/simpleCard';
import CustomizeCard from '../components/card/CustomizeCard';

const CardDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicCard></BasicCard>
        </div>
        <div className={styles.divframe}>
            <h2>No border</h2>
            <NoborderCard></NoborderCard>
        </div>
        <div className={styles.divframe}>
            <h2>Simple Card</h2>
            <SimpleCard></SimpleCard>
        </div>
        <div className={styles.divframe}>
            <h2>Customized content</h2>
            <CustomizeCard></CustomizeCard>
        </div>
    </React.Fragment>
)

export default CardDemo;