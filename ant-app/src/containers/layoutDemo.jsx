import React, { Component } from 'react';
import styles from './layoutDemo.module.scss';

import BasicLayout from '../components/layout/basicLayout';
import HeaderContentFooter from '../components/layout/headerContentFooter';
import HeaderSider from '../components/layout/headerSider';

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
    </React.Fragment>
)

export default LayoutDemo;