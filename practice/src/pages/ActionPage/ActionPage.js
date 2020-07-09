import React, { Component } from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import Menu from './../../components/Menu/Menu';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';

class ActionPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStocking: '',
            chkbOutStock: ''
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var  value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var {txtName, txtPrice, chkbStocking, chkbOutStock} = this.state;
        var {history} = this.props;
        callApi('product-list', 'POST', {
            name: txtName,
            price: txtPrice,
            chkbStocking: chkbStocking,
            chkbOutStock: chkbOutStock}).then((response) =>{
                history.goBack();
            });
    }

    render() {
        var {txtName, txtPrice, chkbStocking, chkbOutStock} = this.state;
        return (
            <>
                <Menu />
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={6}>
                            <Form onSubmit={this.onSave}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name Product</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="txtName" value={txtName} onChange={this.onChange}/>
                                </Form.Group>

                                <Form.Group controlId="form-check-input">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" placeholder="Price" name="txtPrice" value={txtPrice} onChange={this.onChange}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Check type="checkbox" label="stocking" name="chkbStocking" value={chkbStocking} onChange={this.onChange}/>
                                    <Form.Check type="checkbox" label="Out of stock" name="chkbOutStock" value={chkbOutStock} onChange={this.onChange}/>
                                </Form.Group>
                                <Link to='/product-list' className="mr-10" variant="outline-primary">Back</Link>
                                <Button variant="primary" type="submit">
                                    Save
                                </Button>
                            </Form> 
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default ActionPage;