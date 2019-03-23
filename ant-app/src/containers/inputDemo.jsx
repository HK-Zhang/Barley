import React from 'react';
import { Input } from 'antd';
import styles from './inputDemo.module.scss';

const BasicInput = () => (
	<div className={styles.divframe}>
	<h2>Input Demo</h2>
		<ul>
			<li><Input placeholder="Basic usage one" /></li>
			<li><Input placeholder="Basic usage two " /></li>
			<li><Input placeholder="Basic usage three" /></li>
		</ul>
	</div>
);


export default BasicInput;