import React, { Component } from 'react';
import { Input, Select, Icon, Col, Row, InputNumber, DatePicker, AutoComplete, Cascader, Tooltip } from 'antd';
import styles from './inputDemo.module.scss';

const InputGroup = Input.Group;
const Option = Select.Option;

const { TextArea } = Input;

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

const selectBefore = (
	<Select defaultValue="Http://" style={{ width: 90 }}>
		<Option value="Http://">Http://</Option>
		<Option value="Https://">Https://</Option>
	</Select>
);

const selectAfter = (
	<Select defaultValue=".com" style={{ width: 80 }}>
		<Option value=".com">.com</Option>
		<Option value=".jp">.jp</Option>
		<Option value=".cn">.cn</Option>
		<Option value=".org">.org</Option>
	</Select>
);

const onChange = (e) => {
	console.log(e);
  };

  
function formatNumber(value) {
	value += '';
	const list = value.split('.');
	const prefix = list[0].charAt(0) === '-' ? '-' : '';
	let num = prefix ? list[0].slice(1) : list[0];
	let result = '';
	while (num.length > 3) {
		result = `,${num.slice(-3)}${result}`;
		num = num.slice(0, num.length - 3);
	}
	if (num) {
		result = num + result;
	}
	return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends Component {
	onChange = (e) => {
		const { value } = e.target;
		const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
		if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
			this.props.onChange(value);
		}
	}

	// '.' at the end or only '-' in the input box.
	onBlur = () => {
		const { value, onBlur, onChange } = this.props;
		if (value.charAt(value.length - 1) === '.' || value === '-') {
			onChange(value.slice(0, -1));
		}
		if (onBlur) {
			onBlur();
		}
	}

	render() {
		const { value } = this.props;
		const title = value ? (
			<span className="numeric-input-title">
				{value !== '-' ? formatNumber(value) : '-'}
			</span>
		) : 'Input a number';
		return (
			<Tooltip
				trigger={['focus']}
				title={title}
				placement="topLeft"
				overlayClassName="numeric-input"
			>
				<Input
					{...this.props}
					onChange={this.onChange}
					onBlur={this.onBlur}
					placeholder="Input a number"
					maxLength={25}
				/>
			</Tooltip>
		);
	}
}


class BasicInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			dataSource: [],
			value: ''
		}
	}

	handleChange = (value) => {
		this.setState({
			dataSource: !value || value.indexOf('@') >= 0 ? [] : [
				`${value}@gmail.com`,
				`${value}@163.com`,
				`${value}@qq.com`,
			],
		});
	}

	emitEmpty = () => {
		this.userNameInput.focus();
		this.setState({ userName: '' });
	}

	onChangeUserName = (e) => {
		this.setState({ userName: e.target.value });
	}

	onChange = (e) => {
		const { value } = e.target;
		const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
		if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
			this.props.onChange(value);
		}
	}

	// '.' at the end or only '-' in the input box.
	onBlur = () => {
		const { value, onBlur, onChange } = this.props;
		if (value.charAt(value.length - 1) === '.' || value === '-') {
			onChange(value.slice(0, -1));
		}
		if (onBlur) {
			onBlur();
		}
	}

	onChangeNumeric = (value) => {
		this.setState({ value });
	}

	render() {
		const { userName } = this.state;
		const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
		return (

			<React.Fragment>
				<div className={styles.divframe}>
					<h2>Input Demo</h2>
					<ul>
						<li><Input placeholder="Basic usage one"/></li>
						<li><Input placeholder="Basic usage two " /></li>
						<li><Input placeholder="Basic usage three" /></li>
					</ul>
					<ul>
						<li><Input size="large" placeholder="large size" /></li>
						<li><Input placeholder="default size" /></li>
						<li><Input size="small" placeholder="small size" /></li>
					</ul>
				</div>
				<div className={styles.divframe}>
					<h2>Other Input Type</h2>
					<ul>
						<li><div>
							<div style={{ marginBottom: 16 }}>
								<Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
							</div>
							<div style={{ marginBottom: 16 }}>
								<Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
							</div>
							<div style={{ marginBottom: 16 }}>
								<Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
							</div>
						</div></li>
						<li>
							<div>
								<InputGroup size="large">
									<Row gutter={8}>
										<Col span={5}>
											<Input defaultValue="0571" />
										</Col>
										<Col span={8}>
											<Input defaultValue="26888888" />
										</Col>
									</Row>
								</InputGroup>
								<br />
								<InputGroup compact>
									<Input style={{ width: '20%' }} defaultValue="0571" />
									<Input style={{ width: '30%' }} defaultValue="26888888" />
								</InputGroup>
								<br />
								<InputGroup compact>
									<Select defaultValue="Zhejiang">
										<Option value="Zhejiang">Zhejiang</Option>
										<Option value="Jiangsu">Jiangsu</Option>
									</Select>
									<Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
								</InputGroup>
								<br />
								<InputGroup compact>
									<Select defaultValue="Option1">
										<Option value="Option1">Option1</Option>
										<Option value="Option2">Option2</Option>
									</Select>
									<Input style={{ width: '50%' }} defaultValue="input content" />
									<InputNumber />
								</InputGroup>
								<br />
								<InputGroup compact>
									<Input style={{ width: '50%' }} defaultValue="input content" />
									<DatePicker style={{ width: '50%' }} />
								</InputGroup>
								<br />
								<InputGroup compact>
									<Select defaultValue="Option1-1">
										<Option value="Option1-1">Option1-1</Option>
										<Option value="Option1-2">Option1-2</Option>
									</Select>
									<Select defaultValue="Option2-2">
										<Option value="Option2-1">Option2-1</Option>
										<Option value="Option2-2">Option2-2</Option>
									</Select>
								</InputGroup>
								<br />
								<InputGroup compact>
									<Select defaultValue="1">
										<Option value="1">Between</Option>
										<Option value="2">Except</Option>
									</Select>
									<Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
									<Input
										style={{
											width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff',
										}}
										placeholder="~"
										disabled
									/>
									<Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
								</InputGroup>
								<br />
								<InputGroup compact>
									<Select defaultValue="Sign Up">
										<Option value="Sign Up">Sign Up</Option>
										<Option value="Sign In">Sign In</Option>
									</Select>
									<AutoComplete
										dataSource={this.state.dataSource}
										style={{ width: 200 }}
										onChange={this.handleChange}
										placeholder="Email"
									/>
								</InputGroup>
								<br />
								<InputGroup compact>
									<Select style={{ width: '30%' }} defaultValue="Home">
										<Option value="Home">Home</Option>
										<Option value="Company">Company</Option>
									</Select>
									<Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
								</InputGroup>
							</div>
						</li>
					</ul>
				</div>
				<div className={styles.divframe}>
					<h2>Text Area</h2>
					<ul>
						<li><div>
							<TextArea placeholder="Autosize height based on content lines" autosize />
							<div style={{ margin: '24px 0' }} />
							<TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
						</div></li>
						<li><TextArea rows={4}></TextArea></li>
					</ul>
				</div>
				<div className={styles.divframe}>
					<h2>prefix and suffix</h2>
					<ul>
						<li><Input
							placeholder="Enter your username"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							suffix={suffix}
							value={userName}
							onChange={this.onChangeUserName}
							ref={node => this.userNameInput = node}
						/></li><li><NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChangeNumeric} /></li>
					</ul>
					<ul>
						<li><Input placeholder="input with clear icon" allowClear onChange={onChange} /></li>
						<li><Input.Password placeholder="input password" /></li>
					</ul>
				</div>
			</React.Fragment>
		)
	}
}


export default BasicInput;