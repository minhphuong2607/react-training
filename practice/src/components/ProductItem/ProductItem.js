import React, { Component } from 'react';
import {Button, Badge} from 'react-bootstrap';




class ProductItem extends Component {

    onDelete = (id) => {
        if(confirm('Are you sure you want to delete?')){// eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product,index } = this.props;
        var statusName = product.status ? 'Stocking' : 'Out of stock';
        var statusClass = product.status ? 'warning' : 'danger';
        return (
            <>
                <tr>
                    <td>{index+1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <Badge variant={`${statusClass}`}>{statusName}</Badge>
                    </td>
                    <td>
                        <Button variant="success">Accept</Button>{' '}
                        <Button variant="danger" onClick={ () => {this.onDelete(product.id)} }>Cancel</Button>{' '}
                    </td>
                </tr>
            </>
        )
    }
}

export default ProductItem;