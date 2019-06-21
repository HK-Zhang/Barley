import React, { Component } from 'react';
import styles from './GridDemo.module.scss';

import BasicGrid from '../components/grid/basicGrid';
import GutterGrid from '../components/grid/gutterGrid';
import OffsetGrid from '../components/grid/offsetGrid';
import SortGrid from '../components/grid/sortGrid';
import FlexGrid from '../components/grid/flexGrid';
import AlignGrid from '../components/grid/alignGrid';
import OrderGrid from '../components/grid/orderGrid';
import ResponsiveGrid from '../components/grid/responsiveGrid';
import MoreRespGrid from '../components/grid/moreRespGrid';


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
        <div className={styles.divframe}>
            <h2>Grid sort</h2>
            <SortGrid></SortGrid>
        </div>
        <div className={styles.divframe}>
            <h2>Flex Layout</h2>
            <FlexGrid></FlexGrid>
        </div>
        <div className={styles.divframe}>
            <h2>Flex Alignment</h2>
            <AlignGrid></AlignGrid>
        </div>
        <div className={styles.divframe}>
            <h2>Flex Order</h2>
            <OrderGrid></OrderGrid>
        </div>
        <div className={styles.divframe}>
            <h2>Responsive</h2>
            <ResponsiveGrid></ResponsiveGrid>
        </div>
        <div className={styles.divframe}>
            <h2>More responsive</h2>
            <MoreRespGrid></MoreRespGrid>
        </div>
    </React.Fragment>
)

export default GridDemo;