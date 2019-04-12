import { Anchor } from 'antd';
import React, { Component } from 'react';
import styles from './anchorDemo.module.scss';

const { Link } = Anchor;

const handleClick = (e, link) => {
    e.preventDefault();
    console.log(link);
};

const AnchorDemo = () => (
    <React.Fragment>
        <div className={styles.divframe} id="Basic">
            <h2>Basic</h2>
            <Anchor>
                <Link href="#Basic" title="Basic demo" />
                <Link href="#StaticAnchor" title="Static demo" />
                <Link href="#Click" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                </Link>
            </Anchor>
        </div>
        <div className={styles.divframe} id="StaticAnchor">
            <h2>Static Anchor</h2>
            <Anchor affix={false}>
                <Link href="#Basic" title="Basic demo" />
                <Link href="#StaticAnchor" title="Static demo" />
                <Link href="#Click" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                </Link>
            </Anchor>
        </div>
        <div className={styles.divframe} id="Click">
            <h2>Static Anchor</h2>
            <Anchor affix={false} onClick={handleClick}>
                <Link href="#Basic" title="Basic demo" />
                <Link href="#StaticAnchor" title="Static demo" />
                <Link href="#Click" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                </Link>
            </Anchor>
        </div>
    </React.Fragment>
)

export default AnchorDemo;