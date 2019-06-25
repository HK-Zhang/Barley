import React, { Component } from 'react';
import styles from './layoutDemo.module.scss';

import BasicLayout from '../components/layout/basicLayout';
import HeaderContentFooter from '../components/layout/headerContentFooter';
import HeaderSider from '../components/layout/headerSider';
import HeaderSider2 from '../components/layout/headerSider2';


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
    </React.Fragment>
)

export default LayoutDemo;