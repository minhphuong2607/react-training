import React, { Component } from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';
import { Route } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Products',
        to:'/product-list',
        exact: false
    },
    {
        name: 'Add Product',
        to:'/product/add',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact}) => {
    return (
        <Route 
            path = {to}
            exact = {activeOnlyWhenExact}
            children={({match})=> {
                var active = match ? 'active' : '';
                return (
                <Nav.Link to={to} active={active} href={to}>{label}</Nav.Link>
                );
            }}
        />
    )
}

class Menu extends Component {

    render() {
        return (
            <>
                <Navbar bg="light" variant="light">
                    <Nav className="mr-auto">
                        {this.showMenus(menus)}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </>
        )
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}

export default Menu;