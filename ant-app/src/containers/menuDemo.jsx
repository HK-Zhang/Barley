import React from 'react';
import styles from './menuDemo.module.scss';
import TopNav from '../components/topNav';
import InlineSider from '../components/inlineMenu';
import CollapsedInline from '../components/collapsedInline';
import SubmenuOnly from '../components/subMenuOnly';
import ThemeMenu from '../components/themeMenu';
import { Menu, Icon } from 'antd';
import FullMenu from '../components/fullMenu';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function handleClick(e) {
    console.log('click', e);
}

const MenuDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Top Navigation</h2>
            <TopNav></TopNav>
        </div>
        <div className={styles.divframe}>
            <h2>Inline menu</h2>
            <InlineSider></InlineSider>
        </div>
        <div className={styles.divframe}>
            <h2>Collapsed inline menu</h2>
            <CollapsedInline></CollapsedInline>
        </div>
        <div className={styles.divframe}>
            <h2>Open current submenu only</h2>
            <SubmenuOnly></SubmenuOnly>
        </div>
        <div className={styles.divframe}>
            <h2>Vertical menu</h2>
            <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Iteom 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
        <div className={styles.divframe}>
            <h2>Menu Themes</h2>
            <ThemeMenu></ThemeMenu>
        </div>
        <div className={styles.divframe}>
            <h2>Switch the menu type</h2>
            <FullMenu></FullMenu>
        </div>
    </React.Fragment>
);


export default MenuDemo;