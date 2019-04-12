import { Tooltip, Button } from 'antd';
import React, { Component } from 'react';
import styles from './anchorDemo.module.scss';

const text = <span>prompt text</span>;

const buttonWidth = 70;

const ToolTipDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <Tooltip title="prompt text">
                <span>Tooltip will show when mouse enter.</span>
            </Tooltip>
        </div>
        <div className={styles.divframe}>
            <h2>Placement</h2>
            <div className="demo">
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                    <Tooltip placement="topLeft" title={text}>
                        <Button>TL</Button>
                    </Tooltip>
                    <Tooltip placement="top" title={text}>
                        <Button>Top</Button>
                    </Tooltip>
                    <Tooltip placement="topRight" title={text}>
                        <Button>TR</Button>
                    </Tooltip>
                </div>
                <div style={{ width: buttonWidth, float: 'left' }}>
                    <Tooltip placement="leftTop" title={text}>
                        <Button>LT</Button>
                    </Tooltip>
                    <Tooltip placement="left" title={text}>
                        <Button>Left</Button>
                    </Tooltip>
                    <Tooltip placement="leftBottom" title={text}>
                        <Button>LB</Button>
                    </Tooltip>
                </div>
                <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
                    <Tooltip placement="rightTop" title={text}>
                        <Button>RT</Button>
                    </Tooltip>
                    <Tooltip placement="right" title={text}>
                        <Button>Right</Button>
                    </Tooltip>
                    <Tooltip placement="rightBottom" title={text}>
                        <Button>RB</Button>
                    </Tooltip>
                </div>
                <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Tooltip placement="bottomLeft" title={text}>
                        <Button>BL</Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title={text}>
                        <Button>Bottom</Button>
                    </Tooltip>
                    <Tooltip placement="bottomRight" title={text}>
                        <Button>BR</Button>
                    </Tooltip>
                </div>
            </div>
        </div>
        <div className={styles.divframe} id="Click">
            <h2>Arrow pointing at the center</h2>
            <div>
                <Tooltip placement="topLeft" title="Prompt Text">
                    <Button>Align edge / 边缘对齐</Button>
                </Tooltip>
                <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
                    <Button>Arrow points to center / 箭头指向中心</Button>
                </Tooltip>
            </div>
        </div>
    </React.Fragment>
)

export default ToolTipDemo;