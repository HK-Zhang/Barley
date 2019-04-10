import { Tag, Icon } from 'antd';
import React, { Component } from 'react';
import styles from './tagDemo.module.scss';
import DynamicTag from '../components/dynamicTag';
import CheckTag from '../components/CheckableTag';


function log(e) {
    console.log(e);
}

function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
}

const TagDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <div>
                <Tag>Tag 1</Tag>
                <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
                <Tag closable onClose={log}>Tag 2</Tag>
                <Tag closable onClose={preventDefault}>Prevent Default</Tag>
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Colorful Tag</h2>
            <div>
                <h4 style={{ marginBottom: 16 }}>Presets:</h4>
                <div>
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag>
                </div>
                <h4 style={{ margin: '16px 0' }}>Custom:</h4>
                <div>
                    <Tag color="#f50">#f50</Tag>
                    <Tag color="#2db7f5">#2db7f5</Tag>
                    <Tag color="#87d068">#87d068</Tag>
                    <Tag color="#108ee9">#108ee9</Tag>
                </div>
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Add & Remove Dynamically</h2>
            <DynamicTag></DynamicTag>
        </div>
        <div className={styles.divframe}>
            <h2>Checkable</h2>
            <div>
                <CheckTag>Tag1</CheckTag>
                <CheckTag>Tag2</CheckTag>
                <CheckTag>Tag3</CheckTag>
            </div>
        </div>
    </React.Fragment>
);


export default TagDemo;