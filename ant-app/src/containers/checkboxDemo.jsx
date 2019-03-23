import { Checkbox, Button,Row, Col } from 'antd';
import React, { Component } from 'react';
import styles from './checkboxDemo.module.scss';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];

class CheckboxDemo extends Component {



    state = {
        checked: true,
        disabled: false,
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
    };

    toggleChecked = () => {
        this.setState({ checked: !this.state.checked });
    }

    toggleDisable = () => {
        this.setState({ disabled: !this.state.disabled });
    }

    onChange = (e) => {
        console.log('checked = ', e.target.checked);
        this.setState({
            checked: e.target.checked,
        });
    }

    onChange2 = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }

    onChange3 = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    }

    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }

    render() {
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
        return (<React.Fragment>
            <div className={styles.divframe}>
                <h2>Checkbox Demo</h2>
                <ul>
                    <li><Checkbox onChange={this.onChange}>Checkbox</Checkbox></li>
                    <li><div>
                        <Checkbox defaultChecked={false} disabled />
                        <br />
                        <Checkbox defaultChecked disabled />
                    </div></li>
                </ul>
            </div>
            <div className={styles.divframe}>
                <h2>Checkbox Demo</h2>
                <ul>
                    <li><div>
                        <p style={{ marginBottom: '20px' }}>
                            <Checkbox
                                checked={this.state.checked}
                                disabled={this.state.disabled}
                                onChange={this.onChange}
                            >
                                {label}
                            </Checkbox>
                        </p>
                        <p>
                            <Button
                                type="primary"
                                size="small"
                                onClick={this.toggleChecked}
                            >
                                {!this.state.checked ? 'Check' : 'Uncheck'}
                            </Button>
                            <Button
                                style={{ marginLeft: '10px' }}
                                type="primary"
                                size="small"
                                onClick={this.toggleDisable}
                            >
                                {!this.state.disabled ? 'Disable' : 'Enable'}
                            </Button>
                        </p>
                    </div></li>
                    <li><div>
                        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange2} />
                        <br /><br />
                        <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange2} />
                        <br /><br />
                        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onChange2} />
                    </div></li>
                </ul>
            </div>
            <div className={styles.divframe}>
            <ul>
                    <li><Checkbox.Group style={{ width: '100%' }} onChange={this.onChange2}>
                        <Row>
                            <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                            <Col span={8}><Checkbox value="B">B</Checkbox></Col>
                            <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                            <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                            <Col span={8}><Checkbox value="E">E</Checkbox></Col>
                        </Row>
                    </Checkbox.Group></li>
                    <li>
                        <div>
                            <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                                <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll}
                                >
                                    Check all
          </Checkbox>
                            </div>
                            <br />
                            <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange3} />
                        </div>
                    </li>
            </ul>
            </div>
        </React.Fragment>)
    }
}

export default CheckboxDemo;