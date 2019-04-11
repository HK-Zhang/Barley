import { BackTop } from 'antd';
import React, { Component } from 'react';
import styles from './topDemo.module.scss';

const TopDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <div>
                <BackTop />
                Scroll down to see the bottom-right
    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                button.
  </div>
        </div>
        <div className={styles.divframe}>
            <h2>Custome Style</h2>
            <div>
                <BackTop>
                    <div className={styles.ant_back_top_inner}>UP</div>
                </BackTop>
                Scroll down to see the bottom-right
    <strong style={{ color: '#1088e9' }}> blue </strong>
                button.
  </div>
        </div>
        <div className={styles.divframe} style={{height:"1000px"}}>
        <h1>Placehoder</h1>
        </div>
    </React.Fragment>
)

export default TopDemo;