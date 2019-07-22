import React, { Component } from 'react';
import styles from './layoutDemo.module.scss';
import BasicCard from '../components/card/basicCard';
import NoborderCard from '../components/card/noborderCard';
import SimpleCard from '../components/card/simpleCard';
import CustomizeCard from '../components/card/CustomizeCard';
import CardInCol from '../components/card/cardInCol';
import CardGrid from '../components/card/cardGrid';
import InnerCard from '../components/card/innerCard';
import TabsCard from '../components/card/tabCard';

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
        <div className={styles.divframe}>
            <h2>Card in Columns</h2>
            <CardInCol></CardInCol>
        </div>
        <div className={styles.divframe}>
            <h2>Grid Card</h2>
            <CardGrid></CardGrid>
        </div>
        <div className={styles.divframe}>
            <h2>Inner Card</h2>
            <InnerCard></InnerCard>
        </div>
        <div className={styles.divframe}>
            <h2>Tabs Card</h2>
            <TabsCard></TabsCard>
        </div>
    </React.Fragment>
)

export default CardDemo;