import React from 'react';
// import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import './index.scss';

const Menu = () => {
    return (
        <ul className="menu">
            <Menu.Item
                name={"user"}
                link="/#about"
            >
                About
            </Menu.Item>
            <Menu.Item
                name={"list-alt"}
                link="/resume#resume"
            >
                Resume
            </Menu.Item>
            <Menu.Item
                name={'paint-brush'}
                link="/works#works"
            >
                Works
            </Menu.Item>
            <Menu.Item
                name={'at'}
                link="/contact#contact"
            >
                Contact
            </Menu.Item>
        </ul>
    );
};

Menu.Item = ({link = '#', children, name }) =>
    <li>
        <NavHashLink
            smooth
            to={link}
            activeClassName={'active'}
            exact>
            <span className={`fa fa-${name}`} />
            {children}
        </NavHashLink>
    </li>;

export default Menu;
