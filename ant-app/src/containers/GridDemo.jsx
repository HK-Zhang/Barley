import React, { Component } from 'react';
import styles from './GridDemo.module.scss';

import BasicGrid from '../components/grid/basicGrid';
import GutterGrid from '../components/grid/gutterGrid';
import OffsetGrid from '../components/grid/offsetGrid';


const GridDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicGrid></BasicGrid>
        </div>
        <div className={styles.divframe}>
            <h2>Grid Gutter</h2>
            <GutterGrid></GutterGrid>
        </div>
        <div className={styles.divframe}>
            <h2>Column offset</h2>
            <OffsetGrid></OffsetGrid>
        </div>
    </React.Fragment>
)

export default GridDemo;