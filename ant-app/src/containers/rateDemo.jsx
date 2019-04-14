import React from 'react';
import { Rate,Icon  } from 'antd';
import styles from './rateDemo.module.scss';
import Rater from '../components/rater';

const RateDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <Rate />
        </div>
        <div className={styles.divframe}>
            <h2>Half star</h2>
            <Rate allowHalf defaultValue={2.5} />
        </div>
        <div className={styles.divframe}>
            <h2>normal</h2>
            <Rater></Rater>
        </div>
        <div className={styles.divframe}>
            <h2>read only</h2>
            <Rate disabled defaultValue={2} />
        </div>
        <div className={styles.divframe}>
            <h2>Clear start</h2>
            <div>
                <Rate defaultValue={3} /> allowClear: true
    <br />
                <Rate allowClear={false} defaultValue={3} /> allowClear: false
  </div>
        </div>
        <div className={styles.divframe}>
            <h2>Other Character</h2>
            <div>
                <Rate character={<Icon type="heart" />} allowHalf />
                <br />
                <Rate character="A" allowHalf style={{ fontSize: 36 }} />
                <br />
                <Rate character="好" allowHalf />
            </div>
        </div>
    </React.Fragment>
);


export default RateDemo;