import React from 'react';
import { Popover, Button } from 'antd';
import styles from './popoverDemo.module.scss';
import ClosablePopOver from '../components/closablePopover';
import ClickPopover from '../components/clickPopover';


const text = <span>Title</span>;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const buttonWidth = 70;

const PopOverDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <Popover content={content} title="Title">
                <Button type="primary">Hover me</Button>
            </Popover>
        </div>
        <div className={styles.divframe}>
            <h2>Three ways to trigger</h2>
            <div>
                <Popover content={content} title="Title" trigger="hover">
                    <Button>Hover me</Button>
                </Popover>
                <Popover content={content} title="Title" trigger="focus">
                    <Button>Focus me</Button>
                </Popover>
                <Popover content={content} title="Title" trigger="click">
                    <Button>Click me</Button>
                </Popover>
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Placement</h2>
            <div className="demo">
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                    <Popover placement="topLeft" title={text} content={content} trigger="click">
                        <Button>TL</Button>
                    </Popover>
                    <Popover placement="top" title={text} content={content} trigger="click">
                        <Button>Top</Button>
                    </Popover>
                    <Popover placement="topRight" title={text} content={content} trigger="click">
                        <Button>TR</Button>
                    </Popover>
                </div>
                <div style={{ width: buttonWidth, float: 'left' }}>
                    <Popover placement="leftTop" title={text} content={content} trigger="click">
                        <Button>LT</Button>
                    </Popover>
                    <Popover placement="left" title={text} content={content} trigger="click">
                        <Button>Left</Button>
                    </Popover>
                    <Popover placement="leftBottom" title={text} content={content} trigger="click">
                        <Button>LB</Button>
                    </Popover>
                </div>
                <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
                    <Popover placement="rightTop" title={text} content={content} trigger="click">
                        <Button>RT</Button>
                    </Popover>
                    <Popover placement="right" title={text} content={content} trigger="click">
                        <Button>Right</Button>
                    </Popover>
                    <Popover placement="rightBottom" title={text} content={content} trigger="click">
                        <Button>RB</Button>
                    </Popover>
                </div>
                <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Popover placement="bottomLeft" title={text} content={content} trigger="click">
                        <Button>BL</Button>
                    </Popover>
                    <Popover placement="bottom" title={text} content={content} trigger="click">
                        <Button>Bottom</Button>
                    </Popover>
                    <Popover placement="bottomRight" title={text} content={content} trigger="click">
                        <Button>BR</Button>
                    </Popover>
                </div>
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Controlling the close of the dialog</h2>
            <ClosablePopOver></ClosablePopOver>
        </div>
        <div className={styles.divframe}>
            <h2>Arrow pointing</h2>
            <div>
                <Popover placement="topLeft" title={text} content={content}>
                    <Button>Align edge / 边缘对齐</Button>
                </Popover>
                <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
                    <Button>Arrow points to center / 箭头指向中心</Button>
                </Popover>
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Hover with click popover</h2>
            <ClickPopover></ClickPopover>
        </div>
    </React.Fragment>
)

export default PopOverDemo;