import React from 'react';
import styles from './tableDemo.module.scss';
import BasicTable from "../components/table/basicTable";
import JsxStyleTable from '../components/table/jsxStyleTable';
import SelectionTable from '../components/table/selectionTable';
import SelOpsTable from '../components/table/selopsTable';
import CustomSelectionTable from '../components/table/customSelTable';
import FilterSorterTable from '../components/table/filterSorterTable';
import ResetFilterTable from '../components/table/resetFilterTable';
import FilterPanelTable from '../components/table/filterPanelTable';
import AjaxTable from '../components/table/ajaxTable';
import SizeTable from '../components/table/sizeTable';
import BorderTable from '../components/table/borderTable';

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
        <div className={styles.divframe}>
            <h2>Selection and operation</h2>
            <SelOpsTable></SelOpsTable>
        </div>
        <div className={styles.divframe}>
            <h2>Custom selection</h2>
            <CustomSelectionTable></CustomSelectionTable>
        </div>
        <div className={styles.divframe}>
            <h2>Filter and sorter</h2>
            <FilterSorterTable></FilterSorterTable>
        </div>
        <div className={styles.divframe}>
            <h2>Reset filters and sorters</h2>
            <ResetFilterTable></ResetFilterTable>
        </div>
        <div className={styles.divframe}>
            <h2>Customized filter panel</h2>
            <FilterPanelTable></FilterPanelTable>
        </div>
        <div className={styles.divframe}>
            <h2>Ajax</h2>
            <AjaxTable></AjaxTable>
        </div>
        <div className={styles.divframe}>
            <h2>size</h2>
            <SizeTable></SizeTable>
        </div>
        <div className={styles.divframe}>
            <h2>border, title and footer</h2>
            <BorderTable></BorderTable>
        </div>
    </React.Fragment>
)

export default TableDemo;