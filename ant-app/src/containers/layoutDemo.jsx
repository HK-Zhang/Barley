import React, { Component } from 'react';
import styles from './layoutDemo.module.scss';

import BasicLayout from '../components/layout/basicLayout';
import HeaderContentFooter from '../components/layout/headerContentFooter';
import HeaderSider from '../components/layout/headerSider';
import HeaderSider2 from '../components/layout/headerSider2';
import FixHeader from '../components/layout/fixHeader';


const LayoutDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicLayout></BasicLayout>
        </div>
        <div className={styles.divframe}>
            <h2>Header Content Footer</h2>
            <HeaderContentFooter></HeaderContentFooter>
        </div>
        <div className={styles.divframe}>
            <h2>Header sider</h2>
            <HeaderSider></HeaderSider>
        </div>
        <div className={styles.divframe}>
            <h2>Header sider2</h2>
            <HeaderSider2></HeaderSider2>
        </div>
        <div className={styles.divframe}>
            <h2>Fix Header</h2>
            <FixHeader></FixHeader>
        </div>
    </React.Fragment>
)

export default LayoutDemo;