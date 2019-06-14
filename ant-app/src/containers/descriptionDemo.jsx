import React, { Component } from 'react';
import styles from './descriptionDemo.module.scss';
import BasicDescription from '../components/Description/basicDescription';
import BorderDescription from '../components/Description/borderDescription';
import ResponsiveDescription from '../components/Description/responsiveDescription';

const DescriptionDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicDescription></BasicDescription>
        </div>
        <div className={styles.divframe}>
            <h2>Border</h2>
            <BorderDescription></BorderDescription>
        </div>
        <div className={styles.divframe}>
            <h2>Responsive</h2>
            <ResponsiveDescription></ResponsiveDescription>
        </div>
    </React.Fragment>
)

export default DescriptionDemo;