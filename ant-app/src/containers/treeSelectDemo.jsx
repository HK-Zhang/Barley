import React from 'react';
import styles from './treeSelectDemo.module.scss';
import BasicTree from '../components/treeselect/basicTreeSelect';
import MutipleTree from '../components/treeselect/mutipleTreeSelect';
import TreeDataSelect from '../components/treeselect/treeDataSelect';
import CheckableTreeSelect from '../components/treeselect/checkableTreeSelect';

const TreeSelectDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicTree></BasicTree>
        </div>
        <div className={styles.divframe}>
            <h2>Mutiple Selection</h2>
            <MutipleTree></MutipleTree>
        </div>
        <div className={styles.divframe}>
            <h2>Generate from tree data</h2>
            <TreeDataSelect></TreeDataSelect>
        </div>
        <div className={styles.divframe}>
            <h2>Checkable</h2>
            <CheckableTreeSelect></CheckableTreeSelect>
        </div>
    </React.Fragment>
)

export default TreeSelectDemo;