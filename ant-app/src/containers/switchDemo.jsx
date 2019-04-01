import { Switch, Icon } from 'antd';
import React, { Component } from 'react';
import styles from './switchDemo.module.scss';

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

const SwitchDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <Switch defaultChecked onChange={onChange} />
        </div>
        <div className={styles.divframe}>
            <h2>Disabled</h2>
            <Switch disabled={true} defaultChecked />
        </div>
        <div className={styles.divframe}>
            <h2>Text & icon</h2>
            <div>
                <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                <br />
                <Switch checkedChildren="1" unCheckedChildren="0" />
                <br />
                <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Two sizes</h2>
            <div>
                <Switch defaultChecked />
                <br />
                <Switch size="small" defaultChecked />
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Loading</h2>
            <div>
                <Switch loading defaultChecked />
                <br />
                <Switch size="small" loading />
            </div>
        </div>
    </React.Fragment>
);


export default SwitchDemo;