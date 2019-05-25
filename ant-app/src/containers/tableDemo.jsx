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
import ExpandableTable from '../components/table/expandableTable';
import SpanTable from '../components/table/spanTable';
import TreeTable from '../components/table/treeTable';
import FixedHeaderTable from '../components/table/fixheadTable';
import FixedColTable from '../components/table/fixedColTable';
import FixedTable from '../components/table/fixedTable';
import GroupHeaderTable from '../components/table/groupHeadTable';
import AddRowTable from '../components/table/addRowTable';
import EditableRowTable from '../components/table/editableRowTable';
import NestedRowTable from '../components/table/nestedTable';
import DragRowTable from '../components/table/dragTable';
import ResizableTable from '../components/table/resizeableTable';

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
        <div className={styles.divframe}>
            <h2>Expandable Row</h2>
            <ExpandableTable></ExpandableTable>
        </div>
        <div className={styles.divframe}>
            <h2>colSpan and rowSpan</h2>
            <SpanTable></SpanTable>
        </div>
        <div className={styles.divframe}>
            <h2>Tree Data</h2>
            <TreeTable></TreeTable>
        </div>
        <div className={styles.divframe}>
            <h2>Fix Header Data</h2>
            <FixedHeaderTable></FixedHeaderTable>
        </div>
        <div className={styles.divframe}>
            <h2>Fix Columns</h2>
            <FixedColTable></FixedColTable>
        </div>
        <div className={styles.divframe}>
            <h2>Fix Table</h2>
            <FixedTable></FixedTable>
        </div>
        <div className={styles.divframe}>
            <h2>Grouping table head</h2>
            <GroupHeaderTable></GroupHeaderTable>
        </div>
        <div className={styles.divframe}>
            <h2>Add Row</h2>
            <AddRowTable></AddRowTable>
        </div>
        <div className={styles.divframe}>
            <h2>Editable Rows</h2>
            <EditableRowTable></EditableRowTable>
        </div>
        <div className={styles.divframe}>
            <h2>Nested Rows</h2>
            <NestedRowTable></NestedRowTable>
        </div>
        <div className={styles.divframe}>
            <h2>Drag sorting</h2>
            <DragRowTable></DragRowTable>
        </div>
        <div>
            <h2>Resizable Table</h2>
            <ResizableTable></ResizableTable>
        </div>
    </React.Fragment>
)

export default TableDemo;