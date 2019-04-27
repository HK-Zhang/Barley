import React, { PureComponent } from 'react';
import styles from './tableDemo.module.scss';
import BasicTable from "../components/table/basicTable";
import JsxStyleTable from '../components/table/jsxStyleTable';
import SelectionTable from '../components/table/selectionTable';

const TableDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicTable></BasicTable>
        </div>
        <div className={styles.divframe}>
            <h2>JSX style API</h2>
            <JsxStyleTable></JsxStyleTable>
        </div>
        <div className={styles.divframe}>
            <h2>selection</h2>
            <SelectionTable></SelectionTable>
        </div>
    </React.Fragment>
)

export default TableDemo;