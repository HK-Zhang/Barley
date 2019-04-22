import React, { PureComponent } from 'react';
import styles from './tableDemo.module.scss';
import BasicTable from "../components/table/basicTable";

const TableDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <BasicTable></BasicTable>
        </div>
    </React.Fragment>
)

export default TableDemo;