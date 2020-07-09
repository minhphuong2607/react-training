import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class ProductList extends Component {

    render() {
        return (
            <>
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </Table>
            </>
        )
    }
}

export default ProductList;