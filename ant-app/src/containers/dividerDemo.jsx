import { Divider } from 'antd';
import React, { Component } from 'react';

import styles from './dividerDemo.module.scss';

const DividerDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Horizontal</h2>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                <Divider />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                <Divider>With Text</Divider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                <Divider dashed />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Vertical</h2>
            <div>
                Text
    <Divider type="vertical" />
                <a href="#">Link</a>
                <Divider type="vertical" />
                <a href="#">Link</a>
            </div>
        </div>
        <div className={styles.divframe}>
            <h1>Orientation of title</h1>
            <div>
                <Divider orientation="left">Left Text</Divider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                <Divider orientation="right">Right Text</Divider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            </div>
        </div>
    </React.Fragment>
)

export default DividerDemo;