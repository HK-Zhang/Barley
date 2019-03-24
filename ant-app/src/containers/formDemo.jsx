import React, { Component } from 'react';
import styles from './formDemo.module.scss';
import BasicForm from '../components/basicForm';
import LoginForm from '../components/loginForm';
import RegistrationForm from '../components/registerForm';
import SearchForm from '../components/searchForm';


const FormDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
        <h2>Basic Form</h2>
            <BasicForm></BasicForm>
        </div>
        <div className={styles.divframe}>
        <h2>Login Form</h2>
            <LoginForm></LoginForm>
        </div>
        <div className={styles.divframe}>
        <h2>Registration Form</h2>
            <RegistrationForm></RegistrationForm>
        </div>
        <div className={styles.divframe}>
        <h2>Search Form</h2>
            <SearchForm></SearchForm>
        </div>
    </React.Fragment>
);


export default FormDemo;