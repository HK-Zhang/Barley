import React, { Component } from 'react';
import { Cascader } from 'antd';
import styles from './cascadeDemo.module.scss';
import CitySwitcher from '../components/CitySwitcher';
import LazyOptions from '../components/lazyOptions';


const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

const options2 = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

const options3 = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
            code: 752100,
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 453400,
        }],
    }],
}];

const options4 = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }, {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua men',
        }],
    }],
}];


const options5 = [{
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [{
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [{
            code: 'xihu',
            name: 'West Lake',
        }],
    }],
}, {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [{
        code: 'nanjing',
        name: 'Nanjing',
        items: [{
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
        }],
    }],
}];

function onChange(value) {
    console.log(value);
}

// Just show the latest item.
function displayRender(label) {
    return label[label.length - 1];
}

function handleAreaClick(e, label, option) {
    e.stopPropagation();
    console.log('clicked', label, option);
}

const displayRender2 = (labels, selectedOptions) => labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
        return (
            <span key={option.value}>
                {label} (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
        </span>
        );
    }
    return <span key={option.value}>{label} / </span>;
});

function filter(inputValue, path) {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}

function onChange2(value, selectedOptions) {
    console.log(value, selectedOptions);
}


const CasecadeDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <Cascader options={options} onChange={onChange} placeholder="Please select" />
        </div>
        <div className={styles.divframe}>
            <h2>Default value</h2>
            <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} />
        </div>
        <div className={styles.divframe}>
            <h2>Custom trigger</h2>
            <CitySwitcher></CitySwitcher>
        </div>
        <div className={styles.divframe}>
            <h2>Hover</h2>
            <Cascader
                options={options}
                expandTrigger="hover"
                displayRender={displayRender}
                onChange={onChange}
            />
        </div>
        <div className={styles.divframe}>
            <h2>Disabled option</h2>
            <Cascader options={options2} onChange={onChange} />
        </div>
        <div className={styles.divframe}>
            <h2>Change on selection</h2>
            <Cascader options={options} onChange={onChange} changeOnSelect />
        </div>
        <div className={styles.divframe}>
            <h2>Size</h2>
            <div>
                <Cascader size="large" options={options} onChange={onChange} /><br /><br />
                <Cascader options={options} onChange={onChange} /><br /><br />
                <Cascader size="small" options={options} onChange={onChange} /><br /><br />
            </div>
        </div>
        <div className={styles.divframe}>
            <h2>Custom render</h2>
            <Cascader
                options={options3}
                defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                displayRender={displayRender2}
                style={{ width: '100%' }}
            />
        </div>
        <div className={styles.divframe}>
            <h2>Search</h2>
            <Cascader
                options={options4}
                onChange={onChange2}
                placeholder="Please select"
                showSearch={{ filter }}
            />
        </div>
        <div className={styles.divframe}>
            <h2>Load Options Lazily</h2>
            <LazyOptions></LazyOptions>
        </div>
        <div className={styles.divframe}>
            <h2>Custom Field Names</h2>
            <Cascader fieldNames={{ label: 'name', value: 'code', children: 'items' }} options={options5} onChange={onChange} placeholder="Please select" />
        </div>
    </React.Fragment>
);


export default CasecadeDemo;