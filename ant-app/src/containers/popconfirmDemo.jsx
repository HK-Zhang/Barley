import React from 'react';
import styles from './popconfirmDemo.module.scss';
import BasicPopconfim from '../components/popConfirm/basicPopconfim';
import PlacementPopconfirm from '../components/popConfirm/placementPopconfirm';
import ConditionalPopconfirm from '../components/popConfirm/conditionalPopconfirm';

const PopcomfirmDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicPopconfim></BasicPopconfim>
        </div>
        <div className={styles.divframe}>
            <h2>Placement</h2>
            <PlacementPopconfirm></PlacementPopconfirm>
        </div>
        <div className={styles.divframe}>
            <h2>Placement</h2>
            <ConditionalPopconfirm></ConditionalPopconfirm>
        </div>
    </React.Fragment>
)

 
export default PopcomfirmDemo;